//This is the bots required node modules, certain aspects of the code will not work without this.
const Discord = require("discord.js");
const client = new Discord.Client({
  disableEveryone : true,
  fetchAllMembers : true
});
 
const config = require("../Data/config.json");
const fs = require("fs");
const snekfetch = require('snekfetch');

//This SHOULD allow us to use the "client, message & args" async functions.(Example: message.author.id)
exports.run = async (client, message, args) => {
 
//This is your Command or Discord Rich Embed code Line followed by the end of the command. OR close "}" bracket
let hEmbed = new Discord.RichEmbed()
   .setTitle("Ninja Gen Help")
   .setColor("0x0ffff")
   .setDescription(`<@${message.author.id}>` + " My general command usage for this module can be found below ***PLEASE NOTE: These commands are BOT OWNER only***")
   .addField("Developer Reminder", "``gen reminder`` - Sends a reminder to the support server **DEVELOPERS & BOT OWNER ONLY**")
   .addField("Java Code Eval", "``gen eval {JavaScript Code Here}`` Evaluates the given code and returns the response")
   .setFooter(`© Ninja Gen Beta`, `https://cdn.discordapp.com/avatars/544049582959755264/b5f7f7b81321f647ff62c991871bae43.png?size=2048?size=1024`)
   .setThumbnail(`https://cdn.discordapp.com/avatars/544049582959755264/b5f7f7b81321f647ff62c991871bae43.png?size=2048?size=1024`)
   message.channel.send(hEmbed)
   message.delete().catch();	
 };
 
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['ownercmds', 'owncmds'],
  permLevel: 0
};

exports.help = {
  name: 'ownercmds',
  description: 'Shows a list of all available owner commands',
  usage: 'gen helpcmds'
};
