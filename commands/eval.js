const Discord = require("discord.js");
const customization = require ('../Data/config.json');
function clean(text) {
    if (typeof(text) === "string")
        return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else
        return text;
}
exports.run = (client, message, args) => {
    	let embed = new Discord.RichEmbed()
    .setColor("#ff9900")
    .setTitle("Permissions Error")
    .setDescription("You scrub, what made you think you\'d be able to do that??' :face_palm:")
	.addField("Your Permission Level", "***BOT USER***")
    .addField("Permission Level Required", "***BOT OWNER***")
    .setFooter("© Ninja Bot v1.00")
        
    if (message.author.id !== '444609097233465347') return message.channel.send('You scrub, what made you think you\'d be able to do that??');
    args = args.join(" ");
    try {
        var evaled = eval(args);
        if (typeof evaled !== 'string')
            evaled = require('util').inspect(evaled);
        message.channel.send(`\`\`\`xl\n${clean(evaled)}\n\`\`\``);
    } catch (err) {
        message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
        message.delete().catch()
    }
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'eval',
  description: 'Evaluates a JS string.',
  usage: 'eval'
};
