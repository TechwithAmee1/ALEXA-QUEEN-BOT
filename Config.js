// 👈 You Can change this your choice
// 👈 You Can change this your choice
const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}
// 👈 You Can change this your choice
global.emoji01 = ['🧚‍♂️'] // 👈 Enter your Emoji 
global.emoji02 = ['❤️'] //👈 Enter your Emoji
global.notice = ` *Hi 🥰 I m*
*CYBΞXKID*
*I am 16 years old developer...*
*From South Africa🇿🇦*
*I am a Learning.*
*Not more..*
*Also I am Student*
*Follow My Facebook - https://www.facebook.com/diegofenandez*`  // 👈 Enter Your details and Social Media Links and Anything
global.owner =  ['+27686881509'] //👈  Enter Your number
global.premium =  ['+27686881509'] //👈  Enter Your number
global.ownernomer = '+27686881509' //👈  Enter Your number
global.ownername = 'CYBERXKID' //👈 Enter Your name
global.botname = 'ALEXA QUEEN' //👈 Enter Your Bot name
global.footer = '© 𝖯𝗈𝗐𝖾𝗋𝖾𝖽 𝖡𝗒 Alexa Queen' //👈 Enter Your Name
global.ig = 'https://github.com/CYBERXKID/ALEXA-QUEEN-BOT' // 👈 You Can change this your choice
global.region = 'India, South India, Kerala' // 👈 You Can change this your choice
global.sc = 'https://github.com/CYBERXKID/ALEXA-QUEEN-BOT'
global.myweb = 'https://www.facebook.com/alexaqueen/' // 👈 Enter your Social media link to follow now button
global.packname = 'ALEXA QUEEN'  // 👈 You Can change this your choice 
global.author = 'CYBERXKID DEVELOPMENT' // 👈 You Can change this your choice 
global.sessionName = 'session' // 👈 You Can change this your choice
global.prefa = ['','!','.','🧚','💗','👑'] // 👈 You Can change this your choice
//Go to https://imgbb.com/, upload a photo of your choice and put its link here
global.thumb =  'https://te.legra.ph/file/893869de8f9eb636f540f.jpg'
//Go to https://imgbb.com/, upload a photo of your choice and put its link here
global.sp = '⭔'
global.mess = {
    success: 'Done 🧚', // 👈 You Can change this your choice
    admin: 'This Feature Is Only For Admin!', // 👈 You Can change this your choice
    botAdmin: 'Bot Want To Be Admin First!', // 👈 You Can change this your choice
    owner: 'This Feature Is Only For Owner!', // 👈 You Can change this your choice
    group: 'Feature Used Only For Groups!', // 👈 You Can change this your choice
    private: 'Features Used Only For Private Chat!', // 👈 You Can change this your choice
    bot: 'This Feature Is Only For Bot', // 👈 You Can change this your choice
    wait: '```Please Wait...```', // 👈 You Can change this your choice
    error: 'Error! Maybe Api Key Is Expired🤔!', // 👈 You Can change this your choice
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
} // 👈 You Can change this your choice
// Do Not Change 👇 
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
