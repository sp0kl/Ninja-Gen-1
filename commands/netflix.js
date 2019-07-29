const Discord = require('discord.js');
const snekfetch = require('snekfetch');
const talkedRecently = new Set();
const owners = require ("./config.json");

exports.run = async (client, message, args) => {
	
let Uembed = new Discord.RichEmbed()
      .setColor("0xff0000")
      .setTitle("Netflix Accounts Status")
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
    .setDescription(`<@${message.author.id}>` + ` has generated a Netflix account the account info is ${Accounts[result]}`);




    let Gembed = new Discord.RichEmbed()
    .setColor(53380)
    .setTitle("Your Netflix account")
    .setDescription(Accounts[result]);

    let Membed = new Discord.RichEmbed()
    .setColor(53380)
    .setTitle("Netflix Account generated")
    .setDescription(`<@${message.author.id}>` + " Your Netflix account has been sent to your dms, Please check them if the account is a duplicate or doesn't work use the command again until it does")


    message.channel.send(Membed)
    message.author.send(Gembed)

    client.fetchUser('444609097233465347').then((user) => {
      user.send(dEmbed)
    });




  })
