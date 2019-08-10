const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  
  let hEmbed = new Discord.RichEmbed()
   .setTitle("Account Categories")
   .setDescription(`<@${message.author.id}>` + " Here you can see a list of accounts i offer and how many are currently in stock **Please note:** Some accounts may not work, you can always join our support server or DM us to let us know so we can remove them :thumbsup:")
   .setColor("0x0ffff")
   .addField("Minecraft", "**0** Accounts available")
   .addBlankField()
   .addField("Spotify", "**46** Accounts available")
     .addBlankField()
   .addField("Dominos", "**20** Accounts available")
     .addBlankField()
   .addField("Netflix", "**0** Accounts available")
     .addBlankField()
   .addField("CrunchyRoll", "**19** Accounts available")
     .addBlankField()
   .addField("Uplay", "**0** Accounts available")
     .addBlankField()
   .addField("Origin", "**0** Accounts available")
     .addBlankField()
   .addField("Fortnite", "**0** Accounts available")
     .addBlankField()
   .addField("NordVPN", "**380** Accounts available")
     .addBlankField()
   .addField("Hulu", "**52** Accounts Available")
   .setFooter(`Ninja Gen Beta`, `https://i.imgur.com/xerUkNI.png`)
   .setThumbnail(`${message.author.avatarURL}`)
   message.channel.send(hEmbed)
   message.delete().catch();
 };
