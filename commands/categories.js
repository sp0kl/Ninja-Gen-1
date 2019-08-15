const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  
  let hEmbed = new Discord.RichEmbed()
   .setTitle("Account Categories")
   .setDescription(`<@${message.author.id}>` + " Here you can see a list of accounts i offer and how many are currently in stock **Please note:** Some accounts may not work, you can always join our support server or DM us to let us know so we can remove them :thumbsup:")
   .setColor("0x0ffff")
   .addField("Minecraft", "***0*** Accounts available")
   .addField("Spotify", "***46*** Accounts available")
   .addField("Dominos", "***20*** Accounts available")
   .addField("Netflix", "***0*** Accounts available")
   .addField("CrunchyRoll", "***21*** Accounts available")
   .addField("Uplay", "***0*** Accounts available")
   .addField("Origin", "***0*** Accounts available")
   .addField("Fortnite", "***0*** Accounts available")
   .addField("NordVPN", "***380*** Accounts available")
   .addField("Hulu", "***52*** Accounts Available")
   .setFooter(`Ninja Gen Beta`, `https://cdn.discordapp.com/avatars/544049582959755264/b5f7f7b81321f647ff62c991871bae43.png?size=2048?size=1024`)
   .setThumbnail(`${message.author.avatarURL}`)
   message.channel.send(hEmbed)
   message.delete().catch();
 };
