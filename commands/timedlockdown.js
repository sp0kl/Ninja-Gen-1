const ms = require('ms');
exports.run = (client, message, args) => {
  if (!client.lockit) client.lockit = [];
  let time = args.join(' ');
  let validUnlocks = ['release', 'unlock'];
  if (!message.member.hasPermission("MANAGE_CHANNELS")) return msg.reply("❌**Error:** You don't have the permission to do that!");
  if (!time) return message.channel.send(tlEmbed);

message.delete().catch();
   let tlEmbed = new Discord.RichEmbed()
   .setTitle("About Ninja Gen")
   .setColor("0x0ffff")
   .setDescription("You must set a duration for the lockdown in either ``Minutes`` ``Seconds`` or ``Hours``")
   .addField("LockDown Help", "``gen lockdown {time}`` Example: ``gen lockdown 1h``")
   .addField("How To Unlock", "``gen release`` OR ``gen unlock``")
   .setFooter(`© Ninja Gen Beta`, `https://i.imgur.com/xerUkNI.png`)
   .setThumbnail(`https://i.imgur.com/xerUkNI.png`)
 }

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
      message.channel.send(`Damnn, **${message.author.username}** just locked the channel down for ${ms(ms(time), { long:true })}`).then(() => {

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
