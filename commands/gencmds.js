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
   .setTitle("Generator Commands")
   .setColor("53380")
   .setDescription(`<@${message.author.id}>` + " Here is a list of my Generator commands and usage")
   .addField("Generator Categories", "``gen catergories`` - Shows all account categories and stock")
   .addField("Minecraft Accounts", "``gen minecraft`` - Generates a Minecraft account and sends it to your DMs [**currently out of stock**]")
   .addField("Spotify Accounts", "``gen spotify`` - Generates a Spotify account and sends it to your DMs")
   .addField("Dominos Accounts", "``gen dominos`` - Generates a Dominos account and sends it to your DMs")
   .addField("NordVPN Accounts", "``gen nordvpn`` - Generates a NordVPN account and sends it to your DMs")
   .addField("Netflix Accounts", "``gen netflix`` - Generates a Netflix account and sends it to your DMs [**currently out of stock**]")
   .addField("CrunchyRoll Accounts", "``gen crunchyroll`` - Generates a CrunchyRoll account and sends it to your DMs")
   .addField("Uplay Accounts", "``gen uplay`` - Generates a Uplay account and sends it to your DMs [**currently out of stock**]")
   .addField("Origin Accounts", "``gen origin`` - Generates a Origin account and sends it to your DMs [**currently out of stock**]")
   .addField("Fortnite Accounts", "``gen fortnite`` - Generates a Fortnite account and sends it to your DMs [**currently out of stock**]")
   .setFooter(`Ninja Gen Beta`, `https://i.imgur.com/xerUkNI.png`)
   .setThumbnail(`https://i.imgur.com/xerUkNI.png`)
   message.channel.send(hEmbed)
   message.delete().catch();
 };
 
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['gencmds', 'gcmds'],
  permLevel: 0
};

exports.help = {
  name: 'ownercmds',
  description: 'Shows a list of all available owner commands',
  usage: 'gen helpcmds'
};
