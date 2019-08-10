const Discord = require('discord.js');
const snekfetch = require('snekfetch');
const owners = require ("../Data/config.json");

exports.run = async (client, message, args) => {
	
	 const sayMessage = args.join(" ");
    message.delete().catch();
if(!args[0] || args[0 == "help"]) return message.reply("Usage: ``gen reminder {What you want to remember}``, Example: ``gen reminder Update bot config`` ");

  let devEmbed = new Discord.RichEmbed()
     .setDescription("Ninja Gen Reminders")
     .setColor("0x0ffff")
     .addField("Requested by", `${message.author} with ID ${message.author.id}`)
     .addField("Server Name", message.guild.name)
     .addField("Channel Name", message.channel)
     .addField("Time Of Report", message.createdAt)
     .addField("Reminder Message", `${sayMessage}`)
     .setFooter(`Ninja Gen Beta`, `https://i.imgur.com/xerUkNI.png`)
    .setThumbnail(`https://i.imgur.com/xerUkNI.png`)



 let reminderChannel = client.guilds.find("id", "586817026522218507").channels.find("name","dev-reminders").send(devEmbed);
  message.reply(`Your reminder has been sent`);
     if(!reminderChannel) return message.channel.send(`<@${message.author.id}> Couldn't find the required channel`);
  
console.log(`<@${message.author.id}> has used the bug reports command in the server ${message.channel.guild} channel ${message.channel}`)
  
      }
