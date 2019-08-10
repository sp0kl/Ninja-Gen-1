const Discord = require('discord.js');
const snekfetch = require('snekfetch');
const owners = require ("../Data/config.json");

exports.run = async (client, message, args) => {
  
    
   let hEmbed = new Discord.RichEmbed()
   .setTitle("Ninja Gen Invite")
   .setDescription(`<@${message.author.id}>` + " Interested in inviting me to your server? Use the link below")
   .setColor("0x0ffff")
   .addField("You Can Invite Me Here", "[Ninja Gen Invite Link](https://discordapp.com/api/oauth2/authorize?client_id=544049582959755264&permissions=2146958839&scope=bot)")
    .setFooter(`Ninja Gen Beta`, `https://i.imgur.com/xerUkNI.png`)
   .setThumbnail(`https://i.imgur.com/xerUkNI.png`);
   message.channel.send(hEmbed)
   message.delete().catch() 
}   
