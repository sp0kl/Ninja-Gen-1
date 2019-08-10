//These are the node modules required to run the bot and use the commands
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


exports.run = (client, message, args) => {
   if(message.author.id !== config.owners) return message.channel.send("You cannot use this command it is **BOTOWNER** only!")
  if(!args || args.size < 1) return message.reply("Must provide a command name to reload.");
  const commandName = args[0];
  if(!client.commands.has(commandName)) {
    return message.reply("That command does not exist");
  }
  delete require.cache[require.resolve(`./${commandName}.js`)];
  client.commands.delete(commandName);
  const props = require(`./${commandName}.js`);
  client.commands.set(commandName, props);
  message.reply(`The command ${commandName} has been reloaded`);
};
