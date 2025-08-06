const { default: makeWASocket, useMultiFileAuthState, DisconnectReason, fetchLatestBaileysVersion } = require('@whiskeysockets/baileys');
const { Boom } = require('@hapi/boom');
const P = require('pino');

async function startBot() {
    const { state, saveCreds } = await useMultiFileAuthState('./session');

    const { version } = await fetchLatestBaileysVersion();

    const sock = makeWASocket({
        version,
        auth: state,
        printQRInTerminal: true,
        logger: P({ level: 'silent' }),
        browser: ['TANJIRO-MD', 'Chrome', '1.0.0']
    });

    // Save credentials every time it's updated
    sock.ev.on('creds.update', saveCreds);

    // Handle connection updates
    sock.ev.on('connection.update', (update) => {
        const { connection, lastDisconnect } = update;

        if (connection === 'close') {
            const reason = new Boom(lastDisconnect?.error)?.output?.statusCode;
            if (reason === DisconnectReason.badSession) {
                console.log(`Bad session file. Delete session and try again.`);
            } else if (reason === DisconnectReason.connectionClosed) {
                console.log("Connection closed, reconnecting...");
                startBot();
            } else if (reason === DisconnectReason.connectionLost) {
                console.log("Connection lost from server, reconnecting...");
                startBot();
            } else if (reason === DisconnectReason.loggedOut) {
                console.log("Logged out. Delete session and scan again.");
            } else if (reason === DisconnectReason.restartRequired) {
                console.log("Restart required, restarting...");
                startBot();
            } else if (reason === DisconnectReason.timedOut) {
                console.log("Connection timed out, retrying...");
                startBot();
            } else {
                console.log("Unknown disconnect reason:", reason, "Reconnecting...");
                startBot();
            }
        } else if (connection === 'open') {
            console.log("Bot connected to WhatsApp ✅");
        }
    });

    // Example: listen to messages
    sock.ev.on('messages.upsert', ({ messages, type }) => {
        if (type === 'notify' && messages[0]?.message) {
            const m = messages[0];
            console.log("Received message:", m.message);
        }
    });
}

startBot();
