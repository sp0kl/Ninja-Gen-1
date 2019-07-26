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

let Accounts = ["amiamam@hotmail.com:bronzetable", "oliviameloni@hotmail.com:billabong1", "kwgeipel@gmail.com:baseball1", "stoutman777@live.com:7jesus77", "ribeiro_kk@hotmail.com:admini10", "burcudurmusoglu@gmail.com:0121kj21", "skater_alex@gmx.de:hesoyam1494", "pea_maxsimumcannon@hotmail.com:daebak19", "mathias.delannoye@live.be:Delannoye1992", "magnus_landgren@hotmail.com:oasis2", "surfboards411@gmail.com:livingeasy411", "kathleen.travers@yahoo.co.uk:Fl3tch01", "edouard@debutler.fr:doud3364", "nikes90@hotmail.it:fenice", "k3nny455wood@gmail.com:8Maggots", "candybarsugars@yahoo.com:coolcat45", "tcjewell@gmail.com:atom33", "me@drmoradi.com:sarah1guity"];

    let result = Math.floor((Math.random() * Accounts.length));

    let dEmbed = new Discord.RichEmbed()
    .setColor(53380)
    .setTitle("User has generated a account")
    .setDescription(`<@${message.author.id}>` + ` has generated a Spotify account the account info is ${Accounts[result]}`);



    let Gembed = new Discord.RichEmbed()
    .setColor(53380)
    .setTitle("Your Spotify account")
    .setDescription(Accounts[result]);

    let Membed = new Discord.RichEmbed()
    .setColor(53380)
    .setTitle("Spotify Account generated")
    .setDescription(`<@${message.author.id}>` + " Your Spotify account has been sent to your dms, Please check them if the account is a duplicate or doesn't work use the command again until it does")


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