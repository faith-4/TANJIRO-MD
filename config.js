const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0lMdVpnN0xUdi83d2x6YTVSWE9zTGk1elpyeld0R1RrSm5BODNrNHhIST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR2VFOU9Fc3hWZWNaRlA2WTRId3JVVHdXUjVEcHhlTytZQ242cTJtTDIzWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2SmZHUkRZY3ptOUl5VVpUVGdtTEhhdWh5TG10Q1E4QmlVQ3oxckczdVYwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJWVlVaaWRNYzJESkN1V1d3OUc1ZWJ1aDhTVXppRnpGY3RseGlnblYyV1ZJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFBaXdwUit2aDM4c2cwamc1SFpGcVkxb2kyQlRZcnhlc0JxalZoSUZ0VkU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRrSlRYRGFxYU5kNmdCTTllTnRKMHhkajN5SFdvS3pxcTFlVHJSOG0xa0U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0NVTURtY09Zb0hpUmFUaEx5dkkwVjBJRmVXbFJCSTRaZkg1cFpRV1NuST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSmtnRng3Z2h6ZHI4emlhSDh5ZTYramJQdHA2WDVveTlCanAwVnlsSGxnWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9yaVlBcEhkcUJTN1djN0xMajBPN0xGSU1ZZytNdDBiYS9NOXV3cm1BVjMycW1uRUwvOFhUdGluSTZXZ3VaaVN0RVNTQWdrTUZ3NG9ad1hJckU4Y0R3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQzLCJhZHZTZWNyZXRLZXkiOiIyS1pyOGhkeFJnWlJBdU5vdWdTRjNreVd0cExQWHlWV3ZPaUVpMm1hNzc0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIwMTExNjYzMDA0N0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJDNUE3M0E1RDM1NUQ3Mzg1RUY4REYyREZDRjU1MEQwNiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU1NDE3OTI2fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyMDExMTY2MzAwNDdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNDEwRDI4NkNFM0U2QUVENDAzOTY3NkY1NzE0MkE0OTEifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1NTQxNzkyOX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiWEVTRFJFWDMiLCJtZSI6eyJpZCI6IjIwMTExNjYzMDA0NzoxQHMud2hhdHNhcHAubmV0IiwibGlkIjoiMTc5NDYxNTY3ODA3NTkxOjFAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOSGpzV3NRd1pxR3hRWVlBU0FBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJOWW9LbnFHV3Q3NDh0N00zdFQwOXViNjRtSk5jK1gzTlN5ZjJESVRvYWxZPSIsImFjY291bnRTaWduYXR1cmUiOiJ3eWVlLzJlNU84Ym9uSU5Uem9yZlRpN3ZOa1FBNEUyVXd4SjZpZWtTOGVaZEJvaTRvSEhHL0IxWDgzTVlsem1sSjM5Mk16NEFkV3ZQZm92bTVUWkJDZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiZTJLUHR2dmwzRjdxa2gwaFpSYmJXZFVRV2xWZnJ3T2lPQ2REQjNobyszakp3ZE9lYjZhSm9zcjhLMHRGeHVlSFNEaHhSbm9KV2oydE1CVURpcWowRHc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMDExMTY2MzAwNDc6MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJUV0tDcDZobHJlK1BMZXpON1U5UGJtK3VKaVRYUGw5elVzbjlneUU2R3BXIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQTBJQ0E9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTU0MTc5MjQsImxhc3RQcm9wSGFzaCI6IjNSOVozOSJ9",
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
