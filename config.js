//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "basanzietech@gmail.com";
global.location = "Goba,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/basanzietech/shakira-md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaJX1NzCxoAyVGHlfY2l";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaJX1NzCxoAyVGHlfY2l";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/e11bafaedba6aebcd9410.jpg";
global.devs = "255657779003";
global.sudo = process.env.SUDO || "255657779003";
global.owner = process.env.OWNER_NUMBER || "254781263753";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://shakira-md-session.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0dReGtoWTdRcTRGWElFNndEMXhSajV5V24rQW0vVzZoYUIwUDY5ZlpIST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidnhxdEdFVzJ1elRORXkyYytRNm1WT1lETVFxYnJiQkFMUkhPWnNqenhSST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2RzRsQkxnc2IyK1ZYUUEybkd0bHV2MEZucm81eXhNUVhlVEF5VkErcDJVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBY1lCRENuY2tZUEl4em9tOVlVZ3JsYWZmay8rTjFwSTBLWUpGM0VpZkVNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndBLzVuSzhUYzZVWnpZL04zSnNKMWJrN0N5dUlkY2lPR01sZEhqeG9MVWM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJrN2tBUVRMMmdBVFVBU21kVXlwU3dVSHR3dFU3NklRN1JzVzFXRXlVVVk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUxKYUdiR2VRZ0pRK0hDc21CV0xWeDljclRIRVNyblpHMnEwcGh5MG9XVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTTJrYkRoOUxZVE1JTnVCU0lBSnc3OSt1MCtzWW9hN3dGblhMVG1OUDYwdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjA5dlVQOWpnZWNTZDMrYzNzQnRKdUZUcWRMcXFxNlE5ekVKQ04vYThhZk1nYkJFVFl1bkRWR3Fra0xVaXEwVnJHRmlPbVRtME1SZW1EUS9qSXdrQWhRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDEsImFkdlNlY3JldEtleSI6ImpuK0IyeGxuY0NZUUx0NXFNeHJ0SVFjQ1g5c0V4STIvTmFBclhzODNkUHM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Ikx2eWVJejJFUWNDaVNMdE5na1BOLVEiLCJwaG9uZUlkIjoiZGM1ZDAyZDQtNzYzMS00NGEzLWIwOWItMWQ3OWIzNDcwNjJiIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJTbEd3OVcxWlcwWUhhZU9rOFZXVFN4SmRSOD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHMGJrYTE1SlFrZ2NrdlAwRVBLTThCYXN4V1k9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiWjZSWUYxSjQiLCJtZSI6eyJpZCI6IjI1NDc4MTI2Mzc1MzoyOUBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUHlVd3dRUXBmMjh0UVlZQWlBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiQm9Wd1NtdjRIdEp6T093TFRUNXhkRzl2MlRhVG9LbXpzY0RKaWhBRmVqQT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiYm1Rb3UxdlRjMHRsQzRnRUh2U0pqVU5HM2g2VU04WWlCUVYzV2ZCR21MZ29BaGJzY1kxZWhOaFBUenQ2Zi96L3N5SklGZ1c2U2dnbVZNK2ZNdkVyQkE9PSIsImRldmljZVNpZ25hdHVyZSI6ImNKazVPRE5MallLVyt0dzFtcTExcUh0WGpja1UwS1BZY0R2RFhIVUlHZkU1cnNBVS9mN0pPNHQ1cWcrUkUweC85cWZXVzZNeEV5OTFEWVkzT2xLL2hBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0NzgxMjYzNzUzOjI5QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlFhRmNFcHIrQjdTY3pqc0MwMCtjWFJ2YjlrMms2Q3BzN0hBeVlvUUJYb3cifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjI3NjA4ODIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQml3In0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "💻basanzietech | shakira-md❤️",
  author: process.env.PACK_AUTHER || "basanzietech",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "shakira-md",
  ownername: process.env.OWNER_NAME || "MPOKOT",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "SHAKIRA").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
