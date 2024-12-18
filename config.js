const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || "enter your session",
    CAPTION: process.env.CAPTION || "POWERED BY MRSHABAN",
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
    AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "true",
    READ_MESSAGE: process.env.READ_MESSAGE || "false", // Added auto-read configuration
    MODE: process.env.MODE || "public",
    AUTO_VOICE: process.env.AUTO_VOICE || "true",
    AUTO_STICKER: process.env.AUTO_STICKER || "true",
    AUTO_REPLY: process.env.AUTO_REPLY || "true",
    ALIVE_IMG: process.env.ALIVE_IMG || "https://i.imgur.com/57Mn5Xw.jpeg",
    ALIVE_MSG: process.env.ALIVE_MSG || "HII DEAR IM ONLINE I'M SHABAN-MD WHATSAPP BOT 😊♻️",
    ANTI_LINK: process.env.ANTI_LINK || "true",
    ANTI_BAD: process.env.ANTI_BAD || "true",
    PREFIX: process.env.PREFIX || ".",
    FAKE_RECORDING: process.env.FAKE_RECORDING || "true",
    AUTO_REACT: process.env.AUTO_REACT || "false",
    HEART_REACT: process.env.HEART_REACT || "true",
    OWNER_REACT: process.env.OWNER_REACT || "false",
    BOT_NAME: process.env.BOT_NAME || "➺🇸 🇭 🇦 🇧 🇦 🇳 _🇲 🇩࿐",
    STATUS_REPLY: process.env.STATUS_REPLY || "`➺✰Y̆̈ŏ̈ŭ̈r̆̈ĕ̈ S̆̈t̆̈ă̈t̆̈ŭ̈s̆̈ S̆̈ĕ̈ĕ̈n̆̈ J̆̈ŭ̈s̆̈t̆̈ N̆̈ŏ̈w̆̈ Sʜᴀʙᴀɴ☢︎MD`",
    OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39", // omdbapi.com
};
