//This is the bots required node modules, certain aspects of the code will not work without this.
const Discord = require("discord.js");
const client = new Discord.Client({
  disableEveryone : true,
  fetchAllMembers : true
});
 
const config = require("../Data/config.json");
const fs = require("fs");
const snekfetch = require('snekfetch');

//This SHOULD allow us to use the "client, message & args" async functions.(Example: message.author.id)
exports.run = async (client, message, args) => {
 
//This is your Command or Discord Rich Embed code Line followed by the end of the command. OR close "}" bracket
 let hEmbed = new Discord.RichEmbed()
   .setTitle("Ninja Gen Help Commands")
   .setColor("0x0ffff")
   .setDescription(`<@${message.author.id}>` + " My general command usage can be found below")
   .addField("About The Bot", "``gen about`` - Shows you some info about me and my team")
   .addField("Invite The Bot", "``gen invite`` - Generates a invite link")
   .addField("List Of Servers", "``gen serverlist`` - Shows a list of servers i am in")
   .addField("Current Server Info", "``gen serverinfo`` - Shows information for the current server")
   .addField("Ping The Bot", "``gen ping`` Pings the bot and checks for Response time, Latency and API issues")
   .addField("Message Vote", "``gen vote {Message Here}`` Posts the message and allows members **15 Minutes** to vote yes or no")
   .addField("Bot Stats", "``gen stats`` Shows you a list of my current Stats")
   .addField("Bot Uptime", "``gen uptime`` Shows how long the bot has been online since it's last restart")
   .setFooter(`© Ninja Gen Beta`, `https://i.imgur.com/xerUkNI.png`)
   .setThumbnail(`https://i.imgur.com/xerUkNI.png`)
   message.channel.send(hEmbed)
   message.delete().catch();	
 };

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['helpcmds', 'hcmds'],
  permLevel: 0
};

exports.help = {
  name: 'helpcmds',
  description: 'Shows a list of all available help commands',
  usage: 'gen helpcmds'
};
