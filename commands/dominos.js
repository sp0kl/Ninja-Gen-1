const Discord = require('discord.js');
const snekfetch = require('snekfetch');
const talkedRecently = new Set();
const owners = require ('../Data/config.json');
const Accounts = require ('../Accounts/dominosaccounts.json');

exports.run = async (client, message, args) => {
	
	let Cembed = new Discord.RichEmbed() 
      .setTitle("Hmm :thinking: To Fast!!")
      .setDescription(`<@${message.author.id}>` + " Please wait ``1 Minute`` before retyping this command. :shrug:")
      .setColor("0xff0000")
    message.delete().catch();
	
	 if (talkedRecently.has(message.author.id)) {
            message.channel.send(Cembed);
    } else {

    let result = Math.floor((Math.random() * Accounts.length));

    let dEmbed = new Discord.RichEmbed()
    .setColor(53380)
    .setTitle("User has generated a account")
    .setDescription(`<@${message.author.id}>` + ` has generated a Dominos account the account info is ${Accounts[result]}`);




    let Gembed = new Discord.RichEmbed()
    .setColor(53380)
    .setTitle("Your Dominos account")
    .setDescription(Accounts[result]);
    .setFooter(`© Ninja Gen Beta`, `https://i.imgur.com/xerUkNI.png`);

    let Membed = new Discord.RichEmbed()
    .setColor(53380)
    .setTitle("Dominos Account generated")
    .setDescription(`<@${message.author.id}>` + "Your Dominos account has been sent to your dms, Please check them if the account is a duplicate or doesn't work use the command again until it does")
    .addField("Last Restock Date", "July/30/2019")
    .addField("Next Restock Date", "August/30/2019")
    .setFooter(`© Ninja Gen Beta`, `https://i.imgur.com/xerUkNI.png`)



    message.channel.send(Membed)
    message.author.send(Gembed)

    client.fetchUser('444609097233465347').then((user) => {
      user.send(dEmbed)
    });

    client.fetchUser('391376464064282627').then((user) => {
      user.send(dEmbed)
    });

        // Adds the user to the set so that they can't talk for a minute
talkedRecently.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecently.delete(message.author.id);
        }, 60000);
    }
   
   
    }
