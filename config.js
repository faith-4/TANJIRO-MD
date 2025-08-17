const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUZ4VGNCcnlwdzVxa3FWZ0l0b0cvODk0U0lUVDg0eFlEamJrY0dpQlNGdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUzRnOWh4UVhGcGpmNTRYeC90VzVrZGNMYUlGdU95b2hYRUtCcjZSSDFtOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwR3gwWHBWMERhUmpBUnJnc0ttc3pPRVdTRlREZTUzanV4bGFqU3dZNm5VPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkenZReVJ0ZzlCVXl0TmRNK2xpL0JFaDJUWFRZY2lqb2piajYyVnFsaHdZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitKMkxzN1pRRkd6TW93WGtOeUgzeTRhNGdISGJNSmhjdlVFc3BaVVF5a009In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ijlhb1V1cHp4OXRkMFhSeHhyR0dkQkxvQU94a3Vhbk9IbFdXN3pIOGRaalE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0sydzE0ZFlVRmU1akYvREMrNEVDUnUyU1ZmL1doUVBKVXhqTE1PdjMzMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYjF4b01nSWd3c2JBZEJOcHFYcWxZZHdRQUR5aUJ1eDRaRWs2MVV0NUpVST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjNFWndmNnpMdVFnTkhjdWhlTTIvK3o0dXA4bUkreFcwazEvdWViNW96eTRGejR2WEpJVUlHUlVBaVZWVkVQM1hKS0xycTBsRjZSYnc4bnB3SWNBMkRBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTYsImFkdlNlY3JldEtleSI6Ii9aVFozT083TXJMTTRDeWVkaEJIV0NTOTFIY1RIY25PRmpBT3VoVUkzMXc9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IjI0V0VINFlYIiwibWUiOnsiaWQiOiIyMzQ5MDczMzE1NjQxOjE5QHMud2hhdHNhcHAubmV0IiwibGlkIjoiMjE5NDgxOTU1NjQ3NjE5OjE5QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUEdGemQwQkVPK09oc1VHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiaGVFdUhoTGllbXVmTVJqUjZNenZmclVSaDFWU0V4a0pHSndWMHdQQStsWT0iLCJhY2NvdW50U2lnbmF0dXJlIjoibE5yNXdQZDF4OTNMeEFYTXFmbW9BVnBRdGRhYnRKQmRBd1NveWVkNzRwdDBQVTg1TFFKZnNZd2l4Kyt4bitSbURtZmNJbWlUaEsxMHpwS09LcG8wRHc9PSIsImRldmljZVNpZ25hdHVyZSI6Ik4xQmg4WSsrR2g3bHNYY3hBeU1jMlpmVUcvNWFZeUJKQ2MzRGZvWUc2bGNqU2QvN2RYcVlROGlrYU5NTnZCS1hTQWczZG5aa2tCVHNhVlFiWVRVZEJnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0OTA3MzMxNTY0MToxOUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJZWGhMaDRTNG5wcm56RVkwZWpNNzM2MUVZZFZVaE1aQ1JpY0ZkTUR3UHBXIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQVVJRWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTU0MTY0MzUsImxhc3RQcm9wSGFzaCI6Im5tM0JiIn0=",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY TANJIRO-MD 🤍*",
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
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/cl2vd6.png",
MENU_VIDEO_URL: process.env.MENU_VIDEO_URL || "https://files.catbox.moe/nl99hq.mp4",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "ΓȺṈJƗRO-MD ",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "Tanjiro md",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "2348054671458",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*DAMĪNĪ*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ Damini 🍂*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/9i3z0o.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> nonchalanceispure 🧘 ⚡",
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
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "2348054671458",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
