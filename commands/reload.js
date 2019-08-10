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

//This is used to define and execute our commands.
exports.run = async (client, message, args) => {

//These are our message embeds, to make the bots command responses look cleaner.
let rEmbed1 = new Discord.RichEmbed()
   .setTitle("Whoops Something Went Wrong")
   .setColor(0xff0000)
   .setDescription(":thinking: Sorry but that command does not exist, If you need help please use ``gen help`` to see a list of commands :shrug:")
     .setFooter(`© Ninja Gen Beta`, `https://i.imgur.com/xerUkNI.png`)
    .setThumbnail(`https://i.imgur.com/xerUkNI.png`)
   message.delete().catch();
   
   let rEmbed2 = new Discord.RichEmbed()
   .setTitle("Permission Error :dizzy_face:")
   .setColor(0xff0000)
   .setDescription("You can not use this command :shrug: it is ***BOT OWNER*** only")
     .setFooter(`© Ninja Gen Beta`, `https://i.imgur.com/xerUkNI.png`)
    .setThumbnail(`https://i.imgur.com/xerUkNI.png`)
   message.delete().catch();
   
   let rEmbed3 = new Discord.RichEmbed()
   .setTitle("Reload Successful")
   .setColor(53380)
   .setDescription("The command ${commandName} has been reloaded :thumbsup:")
     .setFooter(`© Ninja Gen Beta`, `https://i.imgur.com/xerUkNI.png`)
    .setThumbnail(`https://i.imgur.com/xerUkNI.png`)
   message.delete().catch();
   
//Here we define the bot owner/s and seperate them from other members
  let owner = client.users.get('544049582959755264'); //Tyler. H (Bot Owner)
  let owner2 = client.users.get('391376464064282627'); //Cpt.Calcium (Bot Developer)

//This is our command code and executed arguments   
   if(message.author.id !== owner) return message.channel.send(rEmbed2)
  if(!args || args.size < 1) return message.reply("Must provide a command name to reload.");
  const commandName = args[0];
  if(!client.commands.has(commandName)) {
    return message.channel.send(rEmbed1);
  }
  delete require.cache[require.resolve(`./${commandName}.js`)];
  client.commands.delete(commandName);
  const props = require(`./${commandName}.js`);
  client.commands.set(commandName, props);
  message.channel.send(rEmbed3);
 });
}   
