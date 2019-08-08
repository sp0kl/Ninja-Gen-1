const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  let ping = client.ping;

  let Pembed2 = new Discord.RichEmbed()
      .setColor(0xff0000)
      .setTitle("Ninja Gen Ping Check :thumbsup:")
      .setDescription("The bots ping is " + client.ping + "ms!");
      message.delete().catch();


  message.channel.send(Pembed2);
};
