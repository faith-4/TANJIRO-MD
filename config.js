const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
SESSION_ID: process.env.SESSION_ID || "TANJIRO-MD~your_encoded_session_here",
// === SESSION SETTINGS ===
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY TANJIRO-MD 🤍*",

// === GROUP & MESSAGE BEHAVIOR ===
ANTI_DELETE: process.env.ANTI_DELETE || "true",
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox",
WELCOME: process.env.WELCOME || "true",
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
ANTI_LINK: process.env.ANTI_LINK || "true",
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
ANTI_BAD: process.env.ANTI_BAD || "false",
READ_MESSAGE: process.env.READ_MESSAGE || "false",
READ_CMD: process.env.READ_CMD || "false",
AUTO_REACT: process.env.AUTO_REACT || "false",
AUTO_STICKER: process.env.AUTO_STICKER || "false",
AUTO_REPLY: process.env.AUTO_REPLY || "false",
AUTO_TYPING: process.env.AUTO_TYPING || "true",
AUTO_RECORDING: process.env.AUTO_RECORDING || "false",
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
ANTI_VV: process.env.ANTI_VV || "true",
MENTION_REPLY: process.env.MENTION_REPLY || "false",
DELETE_LINKS: process.env.DELETE_LINKS || "false",

// === BOT INFO ===
PREFIX: process.env.PREFIX || "!",
BOT_NAME: process.env.BOT_NAME || "TANJIRO-MD",
STICKER_NAME: process.env.STICKER_NAME || "TANJIRO-MD",
OWNER_NAME: process.env.OWNER_NAME || "*ᗪ卂爪丨†*",
OWNER_NUMBER: process.env.OWNER_NUMBER || "2348054671458",
DEV: process.env.DEV || "22871394585",
DESCRIPTION: process.env.DESCRIPTION || "*© NONCHALANT DAMI 🙂*",
MODE: process.env.MODE || "public",
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",

// === CUSTOM MENU STUFF ===
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/9i3z0o.jpg",
MENU_VIDEO_URL: process.env.MENU_VIDEO_URL || "https://files.catbox.moe/nl99hq.mp4",
MENU_AUDIO_URL: process.env.MENU_AUDIO_URL || "https://files.catbox.moe/s7689r.mp3",
NEWSLETTER_JID: process.env.NEWSLETTER_JID || "120363377534493877@newsletter",

// === CUSTOM REACTS ===
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
};
