const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNlA0cjg1UW1OdmVyQTUwaFhxS3h0dGtrQWJNUkRJcFlpVEJ4QmptSEJudz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0FtdmZVTGF3RzZCMmdlQ3pHVitLNGpNd043djdacTRSd2pjZG5sMGh4WT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNQXYrd2x2K3lZejBlK3EvVm8vVkc5ZUJpTitXbDV6STM1dWF3YmNyL1Y4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvajJLT29FbXdQSFlmTDEzeGVVcVFQODRVRVgwdXU0UjU0RHltSDFDQ0NVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBBdmlYVXlRWHNMVUVvcWRwbWVzbTVoSVppdGJUV2J0TlBLUWJ6ZTN5Mlk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJkdEY4eUdwa0l5M01ya3V5TlFPd1RBdU1vRlp1U2lnNUpUTWJXWjhaeFU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0NkOFFaM3k1ZXQxVDc5L3FHNHhnaklkOUQyUWlmdDlkWnZtWXYvVGxFND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZlp1Q1VQV2Q3Zy9Ea0tMcG03dGtHbzdEV3BhR0VOdzN5NW9mRFVnNjlTOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9uSGtJNHUrZUxYSCtEVWh2OVdsMmtVUkZ6QlowL2hpWWcrTWxFOEhHSlBMaW5qa05qSVJEWTNkU0NBR1k4Ty96N1FhTk02dnZEd3ZDcCswZkJyZWhRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjgsImFkdlNlY3JldEtleSI6IjZZRkExTkxyL1MzOG8zS1ZtVjcwc2NNZnNqWGRheUpTRG5KbDB2dGFjZnc9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IllBUDc0OU1XIiwibWUiOnsiaWQiOiIyMzQ3MDcyODcyMTM3OjE2QHMud2hhdHNhcHAubmV0IiwibGlkIjoiMjQ1NTE4MTQ4MDYzMzI3OjE2QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDT3J5cFhZUXlZUE94QVlZQVNBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiOFlZUzJVY1kyL0NNVS9OQ2ZzVzNFUGRiSFpYcXRMcGp3MmFDL2hTYXgxMD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiTmRGcHE0c0ZvQ2RoeXN5YmVaZC9lcmNGWVl3VENlZEJ3T1FQbGFoeEVFeklBRnBlU3o4c2ExbXptSU1uaWgzSEFhVkdMVFQrSUxiRGFZdXJDQ1NuQ0E9PSIsImRldmljZVNpZ25hdHVyZSI6IkJaVG1tek0vd1NQZjNtWEVvbFdyRGMrOGFNTnlFcEZaUHI4aXV5ZFIzdjB6NTRQQW90dlNLc1FxdEtwS29UODVNSEUvYjBwRnJyQ084ZGRIY3YxZ2pRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0NzA3Mjg3MjEzNzoxNkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJmR0dFdGxIR052d2pGUHpRbjdGdHhEM1d4MlY2clM2WThObWd2NFVtc2RkIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQUlJQ0E9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTQ0OTc0ODQsImxhc3RQcm9wSGFzaCI6Im5tM0JiIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFLNkcifQ==",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY Tanjiro md 🤍*",
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
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "",
MENU_VIDEO_URL: process.env.MENU_VIDEO_URL || "https://files.catbox.moe/nl99hq.mp4",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "Tanjiro md",
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
