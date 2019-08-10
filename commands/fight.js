const Discord = require('discord.js');
const fights = require('../Data/fights.json');
exports.run = (client, message, args) => {
  let user = message.mentions.users.first();
  let reason = args.slice(0).join(' ');
  message.delete().catch()

let bot = client.users.get('544049582959755264');
let nb = client.users.get('595155471611068426');  
   message.delete().catch();
   let fEmbed1 = new Discord.RichEmbed()
   .setTitle("Fight Club :punch:")
   .setColor("0x0ffff")
   .setDescription('WHAT!? Hiyah!!!.')
   .addField(`Fight Results`, `${bot} Karate Chopped You and dealt ∞ Damage ***YOU GOT DESTROYED***`)
   .addField(`Winner`, `${bot}`)
   .addField(`Loser`, `<@${message.author.id}>`);
  
   message.delete().catch();
   let fEmbed2 = new Discord.RichEmbed()
   .setTitle("Fight Club :punch:")
   .setColor("0x0ffff")
   .setDescription('You can\'t fight him you pleblord.:facepalm: He will destroy you:wink:')
   .addField(`Winner`, `${nb}`)
   .addField(`Loser`, `<@${message.author.id}>`);
   
   message.delete().catch();
  let fEmbed3 = new Discord.RichEmbed()
  .setTitle("Fight Club :punch:")
  .setColor("0x0ffff")
  .setDescription("Self harm is bad :facepalm: go take a time out kid!")
  
  message.delete().catch();
  let fEmbed4 = new Discord.RichEmbed()
  .setTitle("Fight Club :punch:")
  .setColor("0x0ffff")
  .setDescription(`<@${message.author.id}> is fighting <@${message.mentions.users.first().id}> ${fights[Math.floor(Math.random() * fights.length)]}`);

  if (reason.length < 1) return message.reply('You can\'t fight thin air dude, pick someone to fight.');
  if(message.mentions.users.first().id === "544049582959755264") return message.channel.send(fEmbed1);
  if(message.mentions.users.first().id === "595155471611068426") return message.channel.send(fEmbed2);
  if (user.id === message.author.id) return message.channel.send(fEmbed3)
      message.channel.send(fEmbed4)
  }


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'fight',
  description: 'Fights a user.',
  usage: 'fight <user>'
};
