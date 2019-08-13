const Discord = require('discord.js');
const snekfetch = require('snekfetch');
const talkedRecently = new Set();
const owners = require ('../Data/config.json');

exports.run = async (client, message, args) => {

let Uembed = new Discord.RichEmbed()
      .setColor("0xff0000")
      .setTitle("Fortnite Command Lockdown")
      .setDescription(`<@${message.author.id}>` + " Uh-Oh this command is on Lockdown, Find out why below")
      .addField("Lockdown Reason", "***Empty Account Category*** Fortnite accounts are ***Coming Soon***")
      .addField("Lockdown Initiated", "By: ***Bot Owner***")
      .addField("Lockdown Release Date", "**TO BE ANNOUNCED JOIN MY SUPPORT SERVER FOR INFO***")
      message.delete().catch();
   
     if (message.author.id !== '444609097233465347') return message.channel.send(Uembed);
		  
	let Cembed = new Discord.RichEmbed() 
      .setTitle("Hmm :thinking: To Fast!!")
      .setDescription(`<@${message.author.id}>` + " Please wait ``1 Minute`` before retyping this command. :shrug:")
      .setColor("0xff0000")
    message.delete().catch();

    if (talkedRecently.has(message.author.id)) {
            message.channel.send(Cembed);
    } else {
     
    let Accounts = ["COMING SOON"];

    let result = Math.floor((Math.random() * Accounts.length));

    let dEmbed = new Discord.RichEmbed()
    .setColor(53380)
    .setTitle("User has generated a account")
    .setDescription(`${message.author.tag} has generated a Fortnite account the account info is ${Accounts[result]}`);




    let Gembed = new Discord.RichEmbed()
    .setColor(53380)
    .setTitle("Your Fortnite account")
    .setDescription(Accounts[result]);

    let Membed = new Discord.RichEmbed()
    .setColor(53380)
    .setTitle("Fortnite Account generated")
    .setDescription(`<@${message.author.id}>` + " Your Fortnite account has been sent to your dms, Please check them if the account is a duplicate or doesn't work use the command again until it does")


    message.channel.send(Membed)
    message.author.send(Gembed)

    client.fetchUser('444609097233465347', `391376464064282627`).then((user) => {
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
  }
