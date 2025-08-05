const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMk5BUldDbXdCN3hTUEJNR3pDaTJxK01vUU1nMU55Wk9IQ2t0bUV3RThWOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0xrdXBmZVVwMjRyOWZzK3ZOeEUxbjRKdFVROTlZU0JRREQ3QmZadGkxQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4RUlZYjVnRHJocEp2eUZEblpzN3phSFF5a2Fabk9UT3ZOQXYwWldzc0hFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjRnFkaGJBTWJDL1R4V3B3MUpDMXJaVjZZZGxESzdMSDlVT0xrS2dtdlNZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitIazQ4UnZ3MStSQTJZVmNVQUtaMFFjemlSN2tDbGgwTUlyYzNjSHdnMG89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlgzMGtvVWF1L2RzYVpkZ2c0UE92K29hZ0FiUkV1YUs4Y3dKK3ZDM1grWG89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0ZpN2N1c0dmNk5BY1hza1l3L1g2S3dVcmt3cWZuNkdycG9YRlZLMDYzVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidElvamhCQm1RbER1R0ltSXc5SEFLUERjRSszZ2kyMzBqYThZU1FNUnh3cz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlM3TmlHdGNHL3FOM0tVRXRXOGRsZ3l0SXNiQnY3YjhTVkNFZ2UxNTNUbndXMG14MjlabGlvSVp3WHNDems3d2tUUzgxY1hXTjZYd3NrZkJIdjB4ZmpRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTksImFkdlNlY3JldEtleSI6IjVqcStIdjFadGpMUFhQZXJyakJ3SlZPOUVMNHIzaFlaUy9mckhIWlpnazg9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IkdKVzZESFI1IiwibWUiOnsiaWQiOiIyMzQ3MDcyODcyMTM3OjEzQHMud2hhdHNhcHAubmV0IiwibGlkIjoiMjQ1NTE4MTQ4MDYzMzI3OjEzQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDT2Z5cFhZUTMvckp4QVlZQVNBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiOFlZUzJVY1kyL0NNVS9OQ2ZzVzNFUGRiSFpYcXRMcGp3MmFDL2hTYXgxMD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiQ0JnenpxVTBUdmVFUWJOY1NXOEdtVjJSQ1Q5ODRaSXdNeXQvNnp0QkVOUnFRemI0NzlaU0JQZXQ1QzQ1WS9WSm1DNUlLL3NPZk9tWXNBblh3QmZXQ0E9PSIsImRldmljZVNpZ25hdHVyZSI6ImRLbTBNbDR2ZXZjV1hEWTVvdjkyNjBSNUZRenNNVnh1bWFzZ0FDQXlnaE9xSnNTSTEreXRRTXpXZUpTVXY1bTZJRThSNmIxVllkOVdJUWVQN1FLRmhBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0NzA3Mjg3MjEzNzoxM0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJmR0dFdGxIR052d2pGUHpRbjdGdHhEM1d4MlY2clM2WThObWd2NFVtc2RkIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQUlJQ0E9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTQ0MzA4MTgsImxhc3RQcm9wSGFzaCI6Im5tM0JiIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFLNSsifQ==",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY Tanjiro Md 🤍*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/xo2r6c.jpg",
MENU_VIDEO_URL: process.env.MENU_VIDEO_URL || "https://files.catbox.moe/s1kqfx.mp4",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || "!",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "ŦȺNɈƗɌØ-MĐ ⚔",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "Tanjiro Md",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "22871394585",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*ᗪ卂爪丨†*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© NONCHALANT DAMI ❣️*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/xo2r6c.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> I AM TANJIRO ⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "true",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "22871394585",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
