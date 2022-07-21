//Coded by Cyberxkid Fenandez
// Edit This File
const fs = require('fs')
const chalk = require('chalk')
// You can Change this Buttons
// 👈 You Can change this your choice
global.list = ('📟List Menu 📟')
global.allmenu = ('📱All Menu 📱')
global.github = ('📟Github 📟')
global.owner = ('👩‍💻Owner 👩‍💻')
global.deploy = ('💻Deploy 💻')
global.project = ('👩‍💻Project 👩‍💻')
global.donate = ('📠Donate 📠')
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
