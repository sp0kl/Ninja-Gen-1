const Discord = require('discord.js');
const snekfetch = require('snekfetch');
const owners = require ('../Data/config.json');

exports.run = async (client, message, args) => {

client.on('message', message => {
	const prefixRegex = new RegExp(`^(<@!?${client.user.id}>|${escapeRegex(prefix)})\\s*`);
	if (!prefixRegex.test(message.content)) return;

	const [, matchedPrefix] = message.content.match(prefixRegex);
	const args = message.content.slice(matchedPrefix.length).trim().split(/ +/);
	const command = args.shift();

	
	  let owner = client.users.get('444609097233465347');
   let dev = client.users.get('391376464064282627'); 
   let bot = client.users.get('544049582959755264');  
   message.delete().catch();
   let aEmbed = new Discord.RichEmbed()
   .setTitle("About Ninja Gen")
   .setColor("0x0ffff")
   .addField("Current Version", "**BETA** v1.00")
   .addField("Owner/Author", `Created By: ${owner}`)
   .addField("Coders/Developers", `${owner}`)
   .addField("Ninja Gen Support", "[Support Server](https://discord.gg/CRhNHBs)")
     .setFooter(`© Ninja Gen Beta`, `https://i.imgur.com/xerUkNI.png`)
    .setThumbnail(`https://i.imgur.com/xerUkNI.png`)
   message.channel.send(aEmbed)
 }
