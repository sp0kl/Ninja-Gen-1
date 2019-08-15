const Discord = require("discord.js");
const { version } = require("discord.js");
const moment = require("moment");
require("moment-duration-format");

exports.run = (client, message, args, level) => { // eslint-disable-line no-unused-vars
const duration = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
  let commit = ('ef95ec9')  
  let hEmbed = new Discord.RichEmbed()
   .setTitle("Ninja Gen Staistics")
   .setColor("0x0ffff")
   .setDescription(`<@${message.author.id}>` + " All of my stats can be found below")
   .addField("Memory Usage", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`)
   .addField("Current Uptime", `${duration}`)
   .addField("Total Users", `${client.users.size.toLocaleString()}`)
   .addField("Total Servers", `${client.guilds.size.toLocaleString()}`)
   .addField("Total Channels", `${client.channels.size.toLocaleString()}`)
   .addField("Current Discord.js Version", `v${version}`)
   .addField("Current Commit Version", `${commit}`)
   .setFooter("© Ninja Gen Beta", "https://cdn.discordapp.com/avatars/544049582959755264/b5f7f7b81321f647ff62c991871bae43.png?size=2048?size=1024");
   message.channel.send(hEmbed)
   message.delete().catch();	
 };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "stats",
  category: "Miscelaneous",
  description: "Gives some useful bot statistics",
  usage: "stats"
};
