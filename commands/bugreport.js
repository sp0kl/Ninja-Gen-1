const Discord = require('discord.js');
const snekfetch = require('snekfetch');
const owners = require ('../Data/config.json');

exports.run = async (client, message, args) => {
	
	 let Eembed = new Discord.RichEmbed()
      .setColor(0xff0000)
      .setTitle("Ninja Gen Bug Reports")
      .setDescription(`<@${message.author.id}>` + " Ninja Gen Bug Report help :point_down:")
      .addField("Usage", "``gen bugreport {what you want to report}``")
      .addField("Usage Example", "``gen bugreport Fortnite accounts not working``")
      .addField("Usage Example 2", "``gen bugreport Bot not sending info``");
      message.delete().catch();

    const sayMessage = args.join(" ");
    message.delete().catch();
if(!args[0] || args[0 == "help"]) return message.channel.send(Eembed);


    let bugEmbed = new Discord.RichEmbed()
    .setTitle("Ninja Gen Bug Reports")
    .setColor("0x0ffff")
    .addField("User", message.author)
    .addField("UserID", `${message.author.id}`)
    .addField("Server", `${message.channel.guild}`)
    .addField("Request", `${sayMessage}`)
    .setFooter(`Ninja Gen Beta`, `https://cdn.discordapp.com/avatars/544049582959755264/b5f7f7b81321f647ff62c991871bae43.png?size=2048?size=1024`)
    .setThumbnail(`https://cdn.discordapp.com/avatars/544049582959755264/b5f7f7b81321f647ff62c991871bae43.png?size=2048?size=1024`)

let Bugembed2 = new Discord.RichEmbed()
      .setColor(0x0ff00)
      .setTitle("Ninja Gen Bug Report Sent")
      .setDescription(`<@${message.author.id}>` + " Your bug report has been sent :white_check_mark:")
      message.delete().catch();

let requestChannel = client.guilds.find("id", "586817026522218507").channels.find("name","bug-reports").send(bugEmbed);
  message.channel.send(Bugembed2);
     if(!requestChannel) return message.channel.send(`<@${message.author.id}> Couldn't find the required channel, please message the devs ASAP as this may be a mistake or error`);
      
console.log(`<@${message.author.id}> has used the suggest command in ${message.channel.guild} channel ${message.channel}`)
  }
