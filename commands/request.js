const Discord = require('discord.js');
const snekfetch = require('snekfetch');
const owners = require ("../Data/config.json");

exports.run = async (client, message, args) => {
	
	 let Pembed = new Discord.RichEmbed()
      .setColor(0xff0000)
      .setTitle("Ninja Gen Change Requests")
      .setDescription(`<@${message.author.id}>` + " Ninja Gen Request help :point_down:")
      .addField("Usage", "``gen request {what you want to request}``")
      .addField("Usage Example", "``gen request remove dead Origin account {account info here}``")
      .addField("Usage Example 2", "``gen request restock Origin accounts``");
      message.delete().catch();

    const sayMessage = args.join(" ");
    message.delete().catch();
if(!args[0] || args[0 == "help"]) return message.channel.send(Pembed);


    let sEmbed = new Discord.RichEmbed()
    .setTitle("Ninja Gen Account/Stock Requests")
    .setColor("0x0ffff")
    .addField("User", message.author)
    .addField("UserID", `${message.author.id}`)
    .addField("Server", `${message.channel.guild}`)
    .addField("Request", `${sayMessage}`)
    .setFooter(`Ninja Gen Beta`, `https://i.imgur.com/xerUkNI.png`)
    .setThumbnail(`https://i.imgur.com/xerUkNI.png`)

let Pembed2 = new Discord.RichEmbed()
      .setColor(0x0ff00)
      .setTitle("Ninja Gen Change Requests")
      .setDescription(`<@${message.author.id}>` + " Your request has been sent :white_check_mark:")
      message.delete().catch();

let requestChannel = client.guilds.find("id", "586817026522218507").channels.find("name","account-requests").send(sEmbed);
  message.channel.send(Pembed2);
     if(!requestChannel) return message.channel.send(`<@${message.author.id}> Couldn't find the required channel, please message the devs ASAP as this may be a mistake or error`);
      
console.log(`<@${message.author.id}> has used the suggest command in ${message.channel.guild} channel ${message.channel}`)
  }
