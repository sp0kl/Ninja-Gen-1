//Required Node Modules go here!
const Discord = require('discord.js');
const snekfetch = require('snekfetch');
const Regex = require('regex');
const Reg = require('regex');
const owners = require('../Data/config.json');
const config = require('../Data/config.json`);

//This tells the bot to execute these async functions
exports.run = async (client, message, args) => {

//These lines are used to define The "Owners", "Devs" and the "Bot" Itself
//Helps when wanting to @Mention in embeds or messages.	
   let owner = client.users.get('444609097233465347'); //Tyler. H#9393
   let dev = client.users.get('391376464064282627'); //Cpt.Calcium#7586
   let bot = client.users.get('544049582959755264'); //Ninja Gen#1378 

//This is the message embed (What the bot sends in discord) When the command is executed    
message.delete().catch();
   let aEmbed = new Discord.RichEmbed()
   .setTitle("About Ninja Gen")
   .setThumbnail("https://cdn.discordapp.com/avatars/595155471611068426/b6ffdf628b989aa8c55c446ff623042f.png?size=2048?size=1024")
   .setColor("#0x3dfbff")
   .addField("Bot Author", `${owner}, ${config.ownerName}`, true)
   .addField("Author ID", `${config.ownerID}`, true)
   .addField("Code Library", "[discord.js](https://discord.js.org/#/)", true)
   .addField('Current Status', `${muser.presence.status.toUpperCase()}`, true)
   .addField('Current Game', `${muser.presence.game === null ? "No Game" : muser.presence.game.name}`, true)
   .addField('Bot Creation Date', `${moment(user.createdAt).toString().substr(0, 15)}\n(${moment(user.createdAt).fromNow()})`, true)        
   .addField("Current Version", "[Version 1.00](https://github.com/GrimDesignsFiveM/Ninja-Gen/releases", true)
   .addField("Ninja Gen Support", "[Support Server](https://discord.gg/yFmtAUM)", true)
   .setFooter(`© Ninja Bot v1.00`, `https://cdn.discordapp.com/avatars/595155471611068426/b6ffdf628b989aa8c55c446ff623042f.png?size=2048?size=1024`);
   message.channel.send(aEmbed)
}   //This is the end of our command :(
