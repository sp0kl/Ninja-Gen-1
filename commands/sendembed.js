const Discord = require('discord.js');
const snekfetch = require('snekfetch');
const fs = require("fs");
const owners = require ("./config.json");

exports.run = async (client, message, args) => {

let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));    
    const Title = args.leave(" ");
    const Message = args.join(" ");
    let sicon = message.guild.iconURL;
    message.delete().catch();

    if(!args[0] || args[0 == "help"]) return message.reply("Usage: nb/sendembed <Embed Title> <Embed message>");
  let embedMessage = new Discord.RichEmbed()
  
  .setTitle(Title)
  .setDescription(Message)
  .setThumbnail(sicon)
  .setColor("#0x3dfbff")
    
  message.channel.send(embedMessage);
  }
