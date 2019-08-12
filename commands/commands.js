const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  
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
