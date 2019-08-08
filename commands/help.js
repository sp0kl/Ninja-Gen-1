const Discord = require('discord.js');

exports.run = async (client, message, args) => {
 
   let hEmbed = new Discord.RichEmbed()
   .setTitle("Ninja Gen Help")
   .setColor("0x0ffff")
   .setDescription(`<@${message.author.id}>` + " My general command usage can be found below")
   .addField("About The Bot", "``gen about`` - Shows you some info about me and my team")
   .addField("Generator Commands", "``gen commands`` - Shows a list of Account Generator commands")
   .addField("Generator Categories", "``gen catergories`` - Shows all account categories and stock")
   .addField("Invite The Bot", "``gen invite`` - Generates a invite link")
   .addField("Report A Bug", "``gen bugreport {Reason}`` - Sends a message to the support server so the devs know about the bug you reported")
   .addField("Account/Stock Request", "``gen request {YourRequest}`` - Sends a message to the support server so the devs know what you requested")
   .addField("Developer Reminder", "``gen reminder`` - Sends a reminder to the support server **DEVELOPERS & BOT OWNER ONLY**")
   .addField("List Of Servers", "``gen serverlist`` - Shows a list of servers i am in")
   .addField("Current Server Info", "``gen serverinfo`` - Shows information for the current server")
   .setFooter(`Ninja Gen Beta`, `https://i.imgur.com/xerUkNI.png`)
   .setThumbnail(`https://i.imgur.com/xerUkNI.png`)
   message.channel.send(hEmbed)
   message.delete().catch();	
 };
