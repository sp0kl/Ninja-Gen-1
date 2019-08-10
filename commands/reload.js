//These are the node modules required to run the bot and use the commands DO NOT remove these
const Discord = require("discord.js");
const Music = require('discord.js-musicbot-addon');
const Enmap = require("enmap");
const fs = require("fs");
const snekfetch = require('snekfetch');
const talkedRecently = new Set();
const token = process.env.BOT_TOKEN;
const client = new Discord.Client();
const config = require('../Data/config.json');
const owners = require ('../Data/config.json');
client.config = config;

//These are our message embeds, to make the bots command responses look cleaner.
 let rEmbed1 = new Discord.RichEmbed()
   .setTitle("About Ninja Gen")
   .setColor("0x0ffff")
   .addField("Current Version", "**BETA** v1.00")
   .addField("Owner/Author", `Created By: ${owner}`)
   .addField("Coders/Developers", `${owner}`)
   .addField("Ninja Gen Support", "[Support Server](https://discord.gg/CRhNHBs)")
     .setFooter(`© Ninja Gen Beta`, `https://i.imgur.com/xerUkNI.png`)
    .setThumbnail(`https://i.imgur.com/xerUkNI.png`)
   message.channel.send(aEmbed)
 
 
 let rEmbed2 = new Discord.RichEmbed()
   .setTitle("Whoops Something Went Wrong")
   .setColor(0xff0000)
   .setDescription(":thinking: Sorry but that command does not exist, If you need help please use ``gen help`` to see a list of commands :shrug:")
     .setFooter(`© Ninja Gen Beta`, `https://i.imgur.com/xerUkNI.png`)
    .setThumbnail(`https://i.imgur.com/xerUkNI.png`)
 
 
 let rEmbed3 = new Discord.RichEmbed()
   .setTitle("About Ninja Gen")
   .setColor("0x0ffff")
   .addField("Current Version", "**BETA** v1.00")
   .addField("Owner/Author", `Created By: ${owner}`)
   .addField("Coders/Developers", `${owner}`)
   .addField("Ninja Gen Support", "[Support Server](https://discord.gg/CRhNHBs)")
     .setFooter(`© Ninja Gen Beta`, `https://i.imgur.com/xerUkNI.png`)
    .setThumbnail(`https://i.imgur.com/xerUkNI.png`)
   message.channel.send(aEmbed)
 

//This is our command code and args.
exports.run = (client, message, args) => {
   if(message.author.id !== config.owners) return message.channel.send("You cannot use this command it is **BOTOWNER** only!")
  if(!args || args.size < 1) return message.reply("Must provide a command name to reload.");
  const commandName = args[0];
  if(!client.commands.has(commandName)) {
    return message.channel.send(rEmbed2);
  }
  delete require.cache[require.resolve(`./${commandName}.js`)];
  client.commands.delete(commandName);
  const props = require(`./${commandName}.js`);
  client.commands.set(commandName, props);
  message.reply(`The command ${commandName} has been reloaded`);
};
