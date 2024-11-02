const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_21_37_11_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDkyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxODIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMyxcbiAgICAgICAgNzMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMyxcbiAgICAgICAgODMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTkwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDMxLFxuICAgICAgICAzNSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMixcbiAgICAgICAgNjIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTUxLFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNjAsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgOTIsXG4gICAgICAgIDgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMixcbiAgICAgICAgMTk3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDY2LFxuICAgICAgICAxNDksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDYyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDExNixcbiAgICAgICAgNzMsXG4gICAgICAgIDkxLFxuICAgICAgICA0MSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNjYsXG4gICAgICAgIDg4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMzZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgOTksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyOSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDgwLFxuICAgICAgICAxNSxcbiAgICAgICAgNDksXG4gICAgICAgIDE4MyxcbiAgICAgICAgNjUsXG4gICAgICAgIDM3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjM4LFxuICAgICAgICA5NCxcbiAgICAgICAgOTgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTczLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTYsXG4gICAgICAgIDExNyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNixcbiAgICAgICAgNzMsXG4gICAgICAgIDk3LFxuICAgICAgICA2LFxuICAgICAgICAyMjksXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTcwLFxuICAgICAgICA1OCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxODcsXG4gICAgICAgIDkzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE3MixcbiAgICAgICAgNDcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMTksXG4gICAgICAgIDE5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDk0LFxuICAgICAgICA4NCxcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDkxLFxuICAgICAgICA1MSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDU5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTA2LFxuICAgICAgICA4MixcbiAgICAgICAgMjMxLFxuICAgICAgICAzMCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyOCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDk4LFxuICAgICAgICAxNixcbiAgICAgICAgOTEsXG4gICAgICAgIDU0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDM1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMyxcbiAgICAgICAgMjE4LFxuICAgICAgICA2MCxcbiAgICAgICAgMTUyLFxuICAgICAgICA1MixcbiAgICAgICAgMjMzLFxuICAgICAgICAyMDksXG4gICAgICAgIDExMCxcbiAgICAgICAgNDUsXG4gICAgICAgIDEyMixcbiAgICAgICAgNjgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDgwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDM5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDExNSxcbiAgICAgICAgNDIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNixcbiAgICAgICAgOTQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgOTQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExMixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDc4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDExNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzOSxcbiAgICAgICAgOTcsXG4gICAgICAgIDUyLFxuICAgICAgICAxMTksXG4gICAgICAgIDAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNjIsXG4gICAgICAgIDIwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgOCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNyxcbiAgICAgICAgNzAsXG4gICAgICAgIDM5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDExMSxcbiAgICAgICAgNzQsXG4gICAgICAgIDg2LFxuICAgICAgICAyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDY2LFxuICAgICAgICA5OSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDI3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDYzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDMzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTExLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE5LFxuICAgICAgICA5NixcbiAgICAgICAgNDgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTA3LFxuICAgICAgICA4NyxcbiAgICAgICAgODgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTE0LFxuICAgICAgICA5MCxcbiAgICAgICAgMTczLFxuICAgICAgICAyMDMsXG4gICAgICAgIDk3LFxuICAgICAgICA1MyxcbiAgICAgICAgNzYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNzksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTQxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAzMyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJJeDBtdGErT0VzQmlvbUJEbnlQS0JwSm95a1hWcTN5WHU2S2JZYlFUbGdvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJueFpLM2JvN1FUUy01THBKb1JoTWt3XCIsXG4gIFwicGhvbmVJZFwiOiBcImEzN2ViOGYyLWMxZjQtNGRiNi1iNTY0LTg3YWQyNzg0OGM3ZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3MyxcbiAgICAgIDIzMSxcbiAgICAgIDcsXG4gICAgICA5OSxcbiAgICAgIDE5NCxcbiAgICAgIDM1LFxuICAgICAgMjEyLFxuICAgICAgMTAyLFxuICAgICAgMTUzLFxuICAgICAgMTE2LFxuICAgICAgMTUxLFxuICAgICAgMjMzLFxuICAgICAgNSxcbiAgICAgIDU2LFxuICAgICAgMzUsXG4gICAgICAxMyxcbiAgICAgIDIsXG4gICAgICAxMzcsXG4gICAgICAxODAsXG4gICAgICAxNzVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTcwLFxuICAgICAgMTg3LFxuICAgICAgNzcsXG4gICAgICAxMDQsXG4gICAgICAyMixcbiAgICAgIDE3MyxcbiAgICAgIDgsXG4gICAgICAyNTUsXG4gICAgICAyMzgsXG4gICAgICAxNDQsXG4gICAgICA5OCxcbiAgICAgIDIzNyxcbiAgICAgIDksXG4gICAgICAxMDgsXG4gICAgICAyMTgsXG4gICAgICAxNzYsXG4gICAgICAzOCxcbiAgICAgIDg5LFxuICAgICAgMTIyLFxuICAgICAgMTQ0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlg2U1hSRVlTXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMjE3NjAyNjM2MzE6ODlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLwnZCB8J2QovCdkJzwnZCo8J2QpvCdkJrwnZCr8J2QriDwnZCS8J2QofCdkKjwnZCg8J2QrvCdkKfwnZCaxKtcIixcbiAgICBcImxpZFwiOiBcIjgzOTY2Nzc4NDA5MTU5Ojg5QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pmRDBjc0hFS2EzbXJrR0dBUWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiRy9aZXJYbUU0TWJrODl3a0ZVME4vWWhYcE9laHlYb2lmbnU3bCt0WGR3dz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJsR1JsanBpOEd0SmFTWldnL3Z3UGRoODU4VlBsZDlNZk5hNWN1aE54L3d4VWJPY1pIVFQ1em5pYnB0dXphb2pwVENmdnJIVzJVVmJ0SmRidjFqUHJCUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJxWGVEdEQrenlvQVdTdytLMUtHVFpFbUFKTHZMYzlTQ1RBN1JZYnQxeWxzWldnUHNXMXFhRFl1VmRIMmlYUEpWWCt4VkFCR24wdmNuczEweEJKMlVqZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMjE3NjAyNjM2MzE6ODlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMDU4MzQ2NSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUYyMVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRjIxLmpzb24iOiAie1wia2V5RGF0YVwiOlwid1FzOVVzZDN0cVlOVXljOEdRV3ZoUlFHL3E1R241Ync5M0IyVmw4Wnd4Zz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMDM3NjcwMjk1LFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMCwxLDJdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "𝐁𝐢𝐜𝐨𝐦𝐚𝐫𝐮•𝐒𝐡𝐨𝐠𝐮𝐧𝐚ī ",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
