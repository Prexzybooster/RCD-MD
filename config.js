//#ENJOY
/**
**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "Nigeria .";
global.mongodb = process.env.MONGODB_URI || "mongodb://mongo:bREwFKCVLDvzfqqsqVNXloIYCiiLBbuR@monorail.proxy.rlwy.net:38244";
global.allowJids = process.env.ALLOW_JID || "2349159895444@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://rcdnew:DUjQ85jkrvaF5HmsoyjBgyoSYhpsHIjN@dpg-cqamj22ju9rs739asi6g-a.oregon-postgres.render.com/rcd";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DEXTER-BOTS/RCD-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://graph.org/file/c3367b00001035677cc6b.jpg";
global.devs = "2349159895444";
global.sudo = process.env.SUDO || "2349159895444";
global.owner = process.env.OWNER_NUMBER || "2349159895445";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "https://graph.org/file/c3367b00001035677cc6b.jpg";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "";
global.scan = "";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY05Nb0hjMXhvczhPODE4Nm92bXNhTjJiRW53QVRDQTNmTTkya3llaVkwaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTWxraElURk54Q0F6cUFZR1JDeHNSeCt6cllKeWV3NUdaMWRHQ3JwTEV6OD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvQkNKQm0vVHkxV1cwQ3BXYndiUHpQdFU2UnphVlR0T09VVnpnRE5lazFFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJYUGhZS09URCtUWjlCc0pDTHhLWnRaSHJwWjQzQnhqMi8zejMvYWRzdVVJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVFNStaNm8rMjlSeHhoTWZBMmM1STRCN3JPdkM2aHdRMlBDYktPdlkxM2s9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkhlWHBhLzJ2WHhteVJjckpEU1hOcWU2NThvUWkyM2pxUk9FSTQ4eWRLUkE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUZKR0haeTFvU1l5Z3NNZXdOQXlMM1FTeUZnUHJhajk5NUJsQ05PTXgwVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY2M0M0d1cktWaHhyUnBGQVhudUtuamVEZWY3Sk04V0Q1NkxIOHJGWTNrVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjVEYnBaQTNVM0xkRkdIUUJnMWlnZmJpdXQrWWlKS0dSMUtDaHJHend4KzQ5QzNOQXNSQ050L1JHTmRKbjk1OUo1MXE1M01LY1FWODRVUlprNFZqRUN3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDgsImFkdlNlY3JldEtleSI6IndGNG5IOFEvMWJnQXFqV2NCVS80L0hVWHRuRFRnaVhTc2REK3UzQWtVUG89IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkdlSE9JWlY3U0VXWWdweGZ1RDZFd1EiLCJwaG9uZUlkIjoiNjA1N2Y4NmYtZTAyMy00NjMzLWFhMmEtNDRhOGVhZmRkNDc4IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllJaVpaSG1Ud2FmOWZyUnY3YnRUQW5KRmwvZz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIxVUVNSjQ4U3p6ZjIyY3RFNmdxcXJad3o1T3c9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiV0ExU0paM1oiLCJtZSI6eyJpZCI6IjIzNDkxNTk4OTU0NDQ6NTRAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0tXSDRaMENFUGpnM0xRR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjIvajdxTm95Vnc2RW9QZis4WE0wWFd5U1BjWmhacytnME03UVZZRnRNVDQ9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlZoSlNSNm55a01MUU9PYXZHMGdJVkRKQ2RmajNBUkRmQXkzZnNjZ3Q3Qk84YUdlanhEcG9XZkxJU1RYek4rN2gzSko2SFFXQ1pWQzRGNXNzUFJXZUJ3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJmYUl1QWdvREtIMlpPMG1DVTYyUDFTTXBvcFV1UmdodjVJTEhZSGNUbVc3cC9BY2hOcE1lcjdKSG1ZZXNMVEtHZFR2cXZtdkk0VjRJemdscitldDFDUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDkxNTk4OTU0NDQ6NTRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZHY0KzZqYU1sY09oS0QzL3ZGek5GMXNrajNHWVdiUG9ORE8wRldCYlRFKyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMTE4NDM4OSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFHR28ifQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || " 𝗣𝗢𝗪𝗘𝗥ED 𝗕𝗬 PREXZY 🇱🇰",
  author: process.env.PACK_AUTHER || "PREXZY",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "PREXZY BOT",
  ownername: process.env.OWNER_NAME || "PRECIOUS AYOMIDE👑",
  errorChat: process.env.ERROR_CHAT || "2349159895444",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
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
