const Discord = require('discord.js');
const snekfetch = require('snekfetch');
const fs = require("fs");
const talkedRecently = new Set();
const owners = require ("./config.json");

exports.run = async (client, message, args) => {
	
 let Cembed = new Discord.RichEmbed() 
      .setTitle("Hmm :thinking: To Fast!!")
      .setDescription(`<@${message.author.id}>` + " Please wait ``1 Minute`` before retyping this command. :shrug:")
      .setColor("0xff0000")
    message.delete().catch();

    if (talkedRecently.has(message.author.id)) {
            message.channel.send(Cembed);
    } else {

     let Uembed = new Discord.RichEmbed()
      .setColor("0xff0000")
      .setTitle("UPlay Accounts Status")
      .setDescription(`<@${message.author.id}>` + " Sorry this category is currently unavailable :frowning: Join our [Support Server](https://discord.gg/CRhNHBs) for updates when this category becomes available");
      message.delete().catch();
   
   
   
    if(message.author.id !== owners) return message.channel.send(Uembed)
        snekfetch.get(`http://ip-api.com/json/${args}`).then (r => {
          message.delete().catch();
     
    let Accounts = ["COMING SOON"];

    let result = Math.floor((Math.random() * Accounts.length));

    let dEmbed = new Discord.RichEmbed()
    .setColor(53380)
    .setTitle("User has generated a account")
    .setDescription(`${message.author.tag} has generated a Uplay account the account info is ${Accounts[result]}`);




    let Gembed = new Discord.RichEmbed()
    .setColor(53380)
    .setTitle("Your Uplay account")
    .setDescription(Accounts[result]);

    let Membed = new Discord.RichEmbed()
    .setColor(53380)
    .setTitle("Uplay Account generated")
    .setDescription(`<@${message.author.id}>` + " Your Uplay account has been sent to your dms, Please check them if the account is a duplicate or doesn't work use the command again until it does")


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
    })
   
   
    }
  }
