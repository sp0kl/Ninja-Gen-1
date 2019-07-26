const Discord = require('discord.js');
const snekfetch = require('snekfetch');
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
	
	 let Accounts = ["carla@dalbiancoadvocacia.com.br:dudu1206", "codyjkent@gmail.com:rocklee", "ryanoconnell9000@gmail.com:1236457R", "knutsonzach@yahoo.com:knut2000", "eldelmaty7@hotmail.com:fandesonic13", "andrewpapp2000@gmail.com:miska321", "mrmanofawesome1@gmail.com:caboose121", "jason0001cool@yahoo.com:california", "benasmorkunas@gmail.com:benukas123", "danmrrs2@gmail.com:I2d0nt67", "thajoker77@YmAiL.com:Pandemic77", "Danilo.Lazzari94@gmail.com:Tatiana05", "ineedwelfare420@yahoo.com:zigzag2008",];

    let result = Math.floor((Math.random() * Accounts.length));

    let dEmbed = new Discord.RichEmbed()
    .setColor(53380)
    .setTitle("User has generated a account")
    .setDescription(`${message.author.tag} has generated a  CrunchyRoll account the account info is ${Accounts[result]}`);




    let Gembed = new Discord.RichEmbed()
    .setColor(53380)
    .setTitle("Your CrunchyRoll account")
    .setDescription(Accounts[result]);

    let Membed = new Discord.RichEmbed()
    .setColor(53380)
    .setTitle("CrunchyRoll Account generated")
    .setDescription(`<@${message.author.id}>` + " Your CrunchyRoll account has been sent to your dms, Please check them if the account is a duplicate or doesn't work use the command again until it does")


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