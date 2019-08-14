//Required Node Modules go here!
const Discord = require('discord.js');
const snekfetch = require('snekfetch');
const Regex = require('regex');
const Reg = require('regex');
const moment = require('moment');
const owners = require('../Data/config.json');
const config = require('../Data/config.json');

//This tells the bot to execute these async functions
exports.run = async (client, message, args) => {
 
//This defines functions for certain args and executions   
   let user = message.mentions.users.first();
  let muser = message.guild.member(message.mentions.users.first());
    if (!muser) muser = message.member;
    if(!user) user = message.author;

//These lines are used to define The "Owners", "Devs" and the "Bot" Itself
//Helps when wanting to @Mention in embeds or messages.	
   let owner = client.users.get('444609097233465347'); //Tyler. H#9393
   let dev = client.users.get('391376464064282627'); //Cpt.Calcium#7586
   let bot = client.users.get('544049582959755264'); //Ninja Gen#1378 

//This is the message embed (What the bot sends in discord) When the command is executed    
message.delete().catch();
   let aEmbed = new Discord.RichEmbed()
   .setTitle("About Ninja Gen")
   .setThumbnail("https://cdn.discordapp.com/avatars/544049582959755264/91c669a444b56e0d7b61958916d74ff4.png?size=2048?size=1024")
   .setColor("#0x3dfbff")
   .addField("Bot Author", `${owner}`, true)
   .addField("Author Tag", `${config.ownerName}`, true)
   .addField("Code Library", "[discord.js](https://discord.js.org/#/)", true)
   .addField('Current Status', `${client.user.presence.status.toUpperCase()}`, true)
   .addField('Current Game', `${client.user.presence.game === null ? "No Game" : client.user.presence.game.name}`, true)
   .addField('Bot Creation Date', `${moment(client.user.createdAt).toString().substr(0, 15)}\n(${moment(client.user.createdAt).fromNow()})`, true)        
   .addField("Current Version", "[Beta Release](https://github.com/GrimDesignsFiveM/Ninja-Gen/releases)", true)
   .addField("Ninja Gen Support", "[Support Server](https://discord.gg/yFmtAUM)", true)
   .setFooter(`© Ninja Gen Beta`, `https://cdn.discordapp.com/avatars/544049582959755264/91c669a444b56e0d7b61958916d74ff4.png?size=2048?size=1024`);
   message.channel.send(aEmbed)
}   //This is the end of our command :(
