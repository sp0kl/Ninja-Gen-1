const Discord = require('discord.js');
const snekfetch = require('snekfetch');
const talkedRecently = new Set();
const fs = require("fs");
const owners = require ('../Data/config.json');

exports.run = async (client, message, args) => {
	
	let Cembed = new Discord.RichEmbed() 
      .setTitle("Hmm :thinking: To Fast!!")
      .setDescription(`<@${message.author.id}>` + " Please wait ``1 Minute`` before retyping this command. :shrug:")
      .setColor("0xff0000")
    message.delete().catch();
	
	 if (talkedRecently.has(message.author.id)) {
            message.channel.send(Cembed);
    } else {
	
    let Accounts = ["fish9001@bigpond.com:9001fish", "mattznoj@gmail.com:happyDays16", "s.gianni@gmail.com:7intelsat", "damsbooster@hotmail.com:Wxcvbn789", "sawel.williams@yahoo.co.uk:Fudge2004", "ameliahayson@hotmail.com:sumomo123", "ellissafincken@hotmail.com:Liliana1", "said.karim@live.se:9001104273sk", "robkennedy3@gmail.com:Rob100500", "maximilian.humer@businesscard.at:starbucks1", "klausmj@gmail.com:Qn75njnc", "kearnskeagan@gmail.com:Minecraftpe1", "mark.v.irwin@gmail.com:maggie7181", "mediumgamemaster@gmail.com:ibrahim2003", "auzgray@gmail.com:jimmy120", "georgehiser@gmail.com:Niknak909", "moealawie@hotmail.com:123lol1793", "elijah_perez@yahoo.com:Onegai173", "taake1807@gmail.com:taker33950", "dylan.zeppa@gmail.com:blacksheep3", "hunter_commando@hotmail.com:evaunit1", "kiddykatkill42@gmail.com:Asuka002", "rubolvera@hotmail.com:za101880", "missmoneypenny66@hotmail.com:0508rabbit88", "fady.farouk.rasmy@gmail.com:fady3607", "m.olsson@hotmail.se:mikjlk243", "jakniunas.d@gmail.com:qwer1234", "neilwhite58@gmail.com:lutonmajor", "anizae@gmail.com:Dead3198", "anizae@gmail.com:Dead3198", "diarra123@gmail.com:peewee123", "dancarlot@gmail.com:dc181097", "robkennedy3@gmail.com:Rob100500", "am14201981@gmail.com:14201981Am", "JimoPhee@hotmail.com:jamesbirch27", "p_chuachiaco@hotmail.com:Masaya101", "georgehiser@gmail.com:Niknak909", "laboutka.tomas@iCloud.com:Legue3004", "djwolfi@gmx.de:Mw270980", "slickwidnick@gmail.com:Thebest1", "jyx1@hotmail.com:V2ws2211", "marksoren@me.com:deadpool1", "joeykataya@gmail.com:Riheaven05", "moealawie@hotmail.com:123lol1793", "kenneth.mankinen@gmail.com:Lover2412", "henrymadera95@gmail.com:santulip88", "tayeb.barodawala@gmail.com:kon23por", "bigjdg@gmail.com:joseph0110", "hadi3399@hotmail.com:hadi1234", "jakub.jankowski33@gmail.com:Mimesis12343", "rocknryan55@gmail.com:Rypick55", "snorre_16@hotmail.com:Kukkelure1502", "seth888halliwell@yahoo.ca:POPsalt8"];

    let result = Math.floor((Math.random() * Accounts.length));

    let dEmbed = new Discord.RichEmbed()
    .setColor(53380)
    .setTitle("User has generated a account")
    .setDescription(`<@${message.author.id}>` + ` has generated a NordVPN account the account info is ${Accounts[result]}`);




    let Gembed = new Discord.RichEmbed()
    .setColor(53380)
    .setTitle("Your NordVPN account")
    .setDescription(Accounts[result]);

    let Membed = new Discord.RichEmbed()
    .setColor(53380)
    .setTitle("NordVPN Account generated")
    .setDescription(`<@${message.author.id}>` + "Your NordVPN account has been sent to your dms, Please check them if the account is a duplicate or doesn't work use the command again until it does")
    .addField("Last Restock Date", "July/29/2019")
    .addField("Next Restock Date", "August/29/2019")
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
