const Discord = require('discord.js');
const snekfetch = require('snekfetch');
const fs = require("fs");
const owners = require ('../Data/config.json');

exports.run = async (client, message, args) => {
if (message.author.id !== '444609097233465347') return message.channel.send('You scrub, what made you think you\'d be able to do that??');
let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));   
    const Message = args.join(" ");
    let sicon = message.guild.iconURL;
    message.delete().catch();

    if(!args[0] || args[0 == "help"]) return message.reply("Usage: nb/sendembed <Embed Title> <Embed message>");
  let embedMessage = new Discord.RichEmbed()
  
  .setDescription(Message)
  .setThumbnail(sicon)
  .setColor("#0x3dfbff")
    
  message.channel.send(embedMessage);
  }
