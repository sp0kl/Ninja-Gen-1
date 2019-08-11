//Everything below this line is the required node modules
//Without these the bot will not respond properly and probably throw errors
const Discord = require('discord.js'); //Defines "Discord" Example: "Discord.RichEmbed"
const snekfetch = require('snekfetch'); //Used To Lock Commands To Owner Only
const owners = require ('../Data/config.json'); //Tells the bot where to read the Config file from
const Regex = require('regex');
const Reg = require('regex');
const ms = require('ms');

//Everything below this line is your command code, arguements and embeds!
exports.run = (client, message, args) => { //Tells the bot to execute and respond to these functions.

message.delete().catch(); //Auto deletes messages that execute commands
   let tlEmbed = new Discord.RichEmbed()
   .setTitle("Timed Lockdown Help")
   .setColor("0x0ffff")
   .setDescription("You must set a duration for the lockdown in either ``Minutes`` ``Seconds`` or ``Hours``")
   .addField("LockDown Help", "``gen lockdown {time}`` Example: ``gen lockdown 1h``")
   .addField("How To Unlock", "``gen release`` OR ``gen unlock``")
   .setFooter(`© Ninja Gen Beta`, `https://i.imgur.com/xerUkNI.png`)
   .setThumbnail(`https://i.imgur.com/xerUkNI.png`)

message.delete().catch();
   let tlEmbed2 = new Discord.RichEmbed()
   .setTitle("Timed Lockdown ❌Error")
   .setColor("0x0ffff")
   .setDescription("Sorry but you don't have permission to do that :shrug:")
   .addField("Permission Level", "5 Or Higher")
   .addField("Permission Needed", "Manage Channels")
   .setFooter(`© Ninja Gen Beta`, `https://i.imgur.com/xerUkNI.png`)
   .setThumbnail(`https://i.imgur.com/xerUkNI.png`)

  if (!client.lockit) client.lockit = [];
  let time = args.join(' ');
  let validUnlocks = ['release', 'unlock'];
  if (!message.member.hasPermission("MANAGE_CHANNELS")) return meassage.channel.send(tlEmbed2);
  if (!time) return message.channel.send(tlEmbed);
   
message.delete().catch()
let tlEmbed3 = new Discord.RichEmbed()
.setTitle("LockDown Successful :ballot_box_with_check:")
.setColor("0x0ffff")
.setDescription(`Damn! <@${message.author.id}> Just locked the channel down for ${ms(ms(time), { long:true })}`)
.setFooter(`© Ninja Gen Beta`, `https://i.imgur.com/xerUkNI.png`)
.setThumbnail(`https://i.imgur.com/xerUkNI.png`);

  if (validUnlocks.includes(time)) {
    message.channel.overwritePermissions(message.guild.id, {
      SEND_MESSAGES: null
    }).then(() => {
      message.channel.send('Lockdown lifted.');
      clearTimeout(client.lockit[message.channel.id]);
      delete client.lockit[message.channel.id];
    }).catch(error => {
      console.log(error);
    });
  } else {
    message.channel.overwritePermissions(message.guild.id, {
      SEND_MESSAGES: false
    }).then(() => {
      message.channel.send(tlEmbed3).then(() => {

        client.lockit[message.channel.id] = setTimeout(() => {
          message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: null
          }).then(message.channel.send('Lockdown lifted. WEEEEEEEEEEEEEEEEEEEEEE, enjoy talking while you still can:wink:')).catch(console.error);
          delete client.lockit[message.channel.id];
        }, ms(time));
message.delete().catch()

      }).catch(error => {
        console.log(error);
      });
    });
  }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['tld'],
  permLevel: 0
};

exports.help = {
  name: 'timedlockdown',
  description: 'This will lock a channel down for the set duration, be it in hours, minutes or seconds.',
  usage: 'timedlockdown <duration>'
};
