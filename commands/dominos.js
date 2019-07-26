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

let Accounts = ["monkeysarsweet@aol.com:monkeys777", "carter4design@gmail.com:free2bme", "naoeli_mar@live.com:Korver26", "ahroblak@gmail.com:Ginevra23", "gui.golden@hotmail.com:1992Guiguigui", "crystalttnguyen@icloud.com:Trang123", "2016tabdur@gmail.com:Mybrothers3", "sydhintz32@gmail.com:Shooter32", "zach.sanchez24@gmail.com:flames0019", "mgamess14@gmail.com:RockyMtn2002", "damarislechuga@icloud.com:Damaris61649", "caleb7299@gmail.com:Caleb7299", "ahroblak@gmail.com:Ginevra23", "Sahajsingh1998@gmail.com:Equinox64", "JonathanNtale@hotmail.com:Microcom1", "pcelatka2@gmail.com:Ovechkin8", "hansenjason88@gmail.com:Roxydog88", "leecharmy08@gmail.com:FutureMarine1", "b.z.harbe@hotmail.com:Aa123aa123", "raquelbaghdjian@yahoo.com:Shantig7", "sydpayne11@gmail.com:Sp30966", "560lister@gmail.com:Hunterjake238", "fromdc2texas@gmail.com:Uiopvc", "lalwanisarah@gmail.com:Sl2010957", "paulomsaroda7@gmail.com:Paulom07", "teemu.hakoniemi@hotmail.fi:Termosh132,"];

    let result = Math.floor((Math.random() * Accounts.length));

    let dEmbed = new Discord.RichEmbed()
    .setColor(53380)
    .setTitle("User has generated a account")
    .setDescription(`<@${message.author.id}>` + ` has generated a Dominos account the account info is ${Accounts[result]}`);




    let Gembed = new Discord.RichEmbed()
    .setColor(53380)
    .setTitle("Your Dominos account")
    .setDescription(Accounts[result]);

    let Membed = new Discord.RichEmbed()
    .setColor(53380)
    .setTitle("Dominos Account generated")
    .setDescription(`<@${message.author.id}>` + "Your Dominos account has been sent to your dms, Please check them if the account is a duplicate or doesn't work use the command again until it does")


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