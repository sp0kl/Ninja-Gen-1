const fights = require('./fights.json');
exports.run = (client, message, args) => {
  let user = message.mentions.users.first();
  let reason = args.slice(0).join(' ');
  message.delete().catch()
  if (reason.length < 1) return message.reply('You can\'t fight thin air dude, pick someone to fight.');
  if(message.mentions.users.first().id === "544049582959755264") return message.reply('Kame KAme KAME HAAAAAA. ***It dealt ∞ damage. You got demolished.*** Ninja Gen won');
  if(message.mentions.users.first().id === "595155471611068426") return message.reply('You can\'t fight him you pleblord.:facepalm: He will destroy you:wink:');
  if (user.id === message.author.id) return message.reply(`Self harm is bad :facepalm: go take a time out kid!`)
      message.channel.send(`<@${message.author.id}> is fighting ${message.mentions.users.first().username} ${fights[Math.floor(Math.random() * fights.length)]}`)
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