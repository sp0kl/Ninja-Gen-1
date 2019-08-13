exports.run = (client, message, args) => {
    	let embed = new Discord.RichEmbed()
    .setColor("#ff9900")
    .setTitle("Permissions Error")
    .setDescription("You scrub, what made you think you'd be able to do that?? :face_palm:")
	.addField("Your Permission Level", "***BOT USER***")
    .addField("Permission Level Required", "***BOT OWNER***")
    .setFooter("© Ninja Gen Beta")
  
  if (!message.author.id === '444609097233465347') return message.channel.send(embed);
  
  if(!args[0]) return;
  if(args[0] === 'game') return message.reply('Please tell me a game to play!');
  if(args[0] === 'default') {
    args = `/help | Protecting ${client.guilds.size} servers!`
    message.reply(`I am now playing \`${args}\`.`);
    client.user.setPresence({ game: { name: args, type: 1 } });
  }else{
   args = args.join(" ");
   message.reply(`I am now playing \`${args}\`.`);
   client.user.setPresence({ game: { name: args, type: 0 } });
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'setgame',
  description: 'Sets the bot\'s playing status.',
  usage: 'setgame <playing status>'
};
