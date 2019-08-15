const Discord = require('discord.js');
const snekfetch = require('snekfetch');
const talkedRecently = new Set();
const owners = require ('../Data/config.json');
const Accounts = require ('../Accounts/crunchyaccounts.json');

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
    .setDescription(`<@${message.author.id}> has generated a  CrunchyRoll account the account info is ${Accounts[result]}`)
    .setFooter(`© Ninja Gen Beta`, `https://cdn.discordapp.com/avatars/544049582959755264/b5f7f7b81321f647ff62c991871bae43.png?size=2048?size=1024`);	    




    let Gembed = new Discord.RichEmbed()
    .setColor(53380)
    .setTitle("Your CrunchyRoll account")
    .setDescription(Accounts[result])
    .setFooter(`© Ninja Gen Beta`, `https://cdn.discordapp.com/avatars/544049582959755264/b5f7f7b81321f647ff62c991871bae43.png?size=2048?size=1024`);	    

    let Membed = new Discord.RichEmbed()
    .setColor(53380)
    .setTitle("CrunchyRoll Account generated")
    .setDescription(`<@${message.author.id}>` + " Your CrunchyRoll account has been sent to your dms, Please check them if the account is a duplicate or doesn't work use the command again until it does")
    .addField("Last Restock Date", "August/05/2019")
    .addField("Next Restock Date", "August/30/2019")
    .setFooter(`© Ninja Gen Beta`, `https://cdn.discordapp.com/avatars/544049582959755264/b5f7f7b81321f647ff62c991871bae43.png?size=2048?size=1024`);



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
