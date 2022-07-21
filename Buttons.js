//Coded by Cyberxkid Fenandez
// Edit This File
const fs = require('fs')
const chalk = require('chalk')
// You can Change this Buttons
// 👈 You Can change this your choice
global.list = ('❲ ❑ 𝗟𝗶𝘀𝘁 𝗠𝗲𝗻𝘂 ❑ ❳')
global.allmenu = ('❲ ❑ 𝗔𝗹𝗹 𝗠𝗲𝗻𝘂 ❑ ❳')
global.github = ('❲ ❑𝗚𝗶𝘁𝗵𝘂𝗯❑ ❳')
global.owner = ('❲ ❑ 𝗼𝘄𝗻𝗲𝗿 ❑ ❳')
global.deploy = ('❲ ❑𝗗𝗲𝗽𝗹𝗼𝘆❑ ❳')
global.project = ('❲ ❑𝗣𝗿𝗼𝗷𝗲𝗰𝘁❑ ❳')
global.donate = ('❲ ❑𝗗𝗼𝗻𝗮𝘁𝗲❑ ❳')
global.stop = ('Stop 🛑')
global.skip = ('Skip ⏩')
global.thanks = ('*You are welcome 💙*')
// 👈 You Can change this your choice
global.nextimg = ('Next Image ➡️')
global.audio = ('🎶 Audio')
global.video = ('Video 📽')
global.yts = ('YTSEARCH 🌐')
global.play = ('Start 🍿')
// 👈 You Can change this your choice

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
