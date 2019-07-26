const Discord = require('discord.js');
const snekfetch = require('snekfetch');
const owners = require ("./config.json");

exports.run = async (client, message, args) => {
  
          let Uembed = new Discord.RichEmbed() 
      .setTitle("Ninja Gen Invite")
      .setDescription(`<@${message.author.id}>` + " Sorry i am not yet available to be invited to servers. This feature will be available after my Beta stages :frowning:")
      .setColor("0xff0000")
      .addField("Current Verison", "Beta v1.00")
      .addField("Next Version", "Beta v1.01")
      .addField("Expected Full Release Date", "August/14/2019")  
    message.delete().catch();
   
   
   
    if(message.author.id !== owners) return message.channel.send(Uembed)
        snekfetch.get(`http://ip-api.com/json/${args}`).then (r => {
          message.delete().catch();
    
   let hEmbed = new Discord.RichEmbed()
   .setTitle("Ninja Gen Invite")
   .setDescription(`<@${message.author.id}>` + " Interested in inviting me to your server? Use the link below")
   .setColor("0x0ffff")
   .addField("You Can Invite Me Here", "[Ninja Gen Invite Link](https://discordapp.com/api/oauth2/authorize?client_id=544049582959755264&permissions=2146958839&scope=bot)")
    .setFooter(`Ninja Gen Beta`, `https://i.imgur.com/xerUkNI.png`)
   .setThumbnail(`https://i.imgur.com/xerUkNI.png`);
   message.channel.send(hEmbed)    
    })
}   
