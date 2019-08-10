const Discord = require('discord.js');
const snekfetch = require('snekfetch');
const owners = require ('../Data/config.json');

exports.run = async (client, message, args) => {
	
	  message.delete().catch();
  var list = client.guilds.array().sort();
  let botembed = new Discord.RichEmbed()
  .setTitle("Ninja Gen Server List")
  .setDescription(list)
  .setColor("0x0ffff")
  .setFooter(`Total Count: ${client.guilds.size} Servers`);
  message.channel.send(botembed);

}
