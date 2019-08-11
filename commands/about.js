//Required Node Modules go here!
const Discord = require('discord.js');
const snekfetch = require('snekfetch');
const Regex = require('regex');
const Reg = require('regex');
const owners = require ('../Data/config.json');

//This tells the bot to execute these async functions
exports.run = async (client, message, args) => {

//These lines are used to define The "Owners", "Devs" and the "Bot" Itself
//Helps when wanting to @Mention in embeds or messages.	
   let owner = client.users.get('444609097233465347'); //Tyler. H#9393
   let dev = client.users.get('391376464064282627'); //Cpt.Calcium#7586
   let bot = client.users.get('544049582959755264'); //Ninja Gen#1378 
   
   client.on('message', message => {
    const prefixRegex = new RegExp(`^(<@!?${client.user.id}>|${escapeRegex(prefix)})\\s*`);
    if (!prefixRegex.test(message.content)) return;

    const [, matchedPrefix] = message.content.match(prefixRegex);
    const args = message.content.slice(matchedPrefix.length).trim().split(/ +/);
    const command = args.shift();
      
//This is the message embed (What the bot sends in discord) When the command is executed
message.delete().catch();
   let aEmbed = new Discord.RichEmbed()
   .setTitle("About Ninja Gen") //This is the embed title
   .setColor("0x0ffff") //The color of the embed (Currently: Light Blue)
   .addField("Current Version", "**BETA** v1.00") //The bots current version
   .addField("Owner/Author", `Created By: ${owner}`) //Bot Owner is defined here as a @Mention
   .addField("Coders/Developers", `${owner}`) //Bot Owner is defined here as a @Mention
   .addField("Ninja Gen Support", "[Support Server](https://discord.gg/CRhNHBs)") //Embed (add) Field with server link
     .setFooter(`© Ninja Gen Beta`, `https://i.imgur.com/xerUkNI.png`) //This is the embeds footer
    .setThumbnail(`https://i.imgur.com/xerUkNI.png`) //This is the embed Thumbnail (Usually the bots Picture)
   message.channel.send(aEmbed) //This executes the embed and tells the bot to send it
 } //This is the end of our command :(
