
const Discord = require("discord.js");
const client = new Discord.Client({
  disableEveryone : true,
  fetchAllMembers : true
});
 
const config = require("./config.json");
const fs = require("fs");
const snekfetch = require('snekfetch');


client.on("ready",  async () => {
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
  client.user.setActivity(`Cracking Your Shit`);
});

client.on("guildCreate", guild => {
  // This event triggers when the bot joins a guild.
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  client.user.setActivity(`Cracking Your Shit`);
});

client.on("guildDelete", guild => {
  // this event triggers when the bot is removed from a guild.
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  client.user.setActivity(`Cracking Your Shit`);
});


client.on("message", async message => {
  // This event will run on every single message received, from any channel or DM.
  
  // It's good practice to ignore other bots. This also makes your bot ignore itself
  // and not get into a spam loop (we call that "botception").
  if(message.author.bot) return;
  
  // Also good practice to ignore any message that does not start with our prefix, 
  // which is set in the configuration file.
  if(message.content.indexOf(config.prefix) !== 0) return;
  
  // Here we separate our "command" name, and our "arguments" for the command. 
  // e.g. if we have the message "+say Is this the real life?" , we'll get the following:
  // command = say
  // args = ["Is", "this", "the", "real", "life?"]
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
   if(command === "help") {
  message.delete().catch();	 
   let hEmbed = new Discord.RichEmbed()
   .setTitle("Ninja Gen Commands")
   .setColor("0xff80ff")
   .addField("gen spotify", "Generates a Spotify account")
   .addField("gen dominos", "Generates a Dominos Account")
   message.channel.send(hEmbed)
 }
  
  if(command === "minecraft") {
    message.delete().catch();
    let Accounts = ["bellahartje@gmail.com:hartje77", "cabi2oo7@gmx.de:Decortin100", "sadraamirabadi@gmail.com:Nimasadra123", "meghanletendre98@gmail.com:Soccer101"];

    let result = Math.floor((Math.random() * Accounts.length));

    let dEmbed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTitle("User has generated a account")
    .setDescription(`${message.author.tag} has generated a account the account info is ${Accounts[result]}`);




    let Gembed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTitle("Generated account")
    .setDescription(Accounts[result]);

    let Membed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTitle("Account generated")
    .setDescription("Account has been sent to your dms, Please check them if the account is a duplicate or doesn't work use the command again until it does")


    message.channel.send(Membed)
    .then(msg => {
      msg.delete(50000)
    })

    message.author.send(Gembed)
    .then(msg => {
      msg.delete(50000)
    })

    client.fetchUser('444609097233465347').then((user) => {
      user.send(dEmbed)
      .then(msg => {
        msg.delete(50000)
      })
    });




  }
  
  if(command === "spotify") {
    message.delete().catch();
    let Accounts = ["amiamam@hotmail.com:bronzetable", "oliviameloni@hotmail.com:billabong1", "kwgeipel@gmail.com:baseball1", "stoutman777@live.com:7jesus77"];

    let result = Math.floor((Math.random() * Accounts.length));

    let dEmbed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTitle("User has generated a account")
    .setDescription(`${message.author.tag} has generated a account the account info is ${Accounts[result]}`);




    let Gembed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTitle("Generated account")
    .setDescription(Accounts[result]);

    let Membed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTitle("Account generated")
    .setDescription("Account has been sent to your dms, Please check them if the account is a duplicate or doesn't work use the command again until it does")


    message.channel.send(Membed)
    .then(msg => {
      msg.delete(50000)
    })

    message.author.send(Gembed)
    .then(msg => {
      msg.delete(50000)
    })

    client.fetchUser('444609097233465347').then((user) => {
      user.send(dEmbed)
      .then(msg => {
        msg.delete(50000)
      })
    });




  }
  
    if(command === "dominos") {
    message.delete().catch();
    let Accounts = ["monkeysarsweet@aol.com:monkeys777", "carter4design@gmail.com:free2bme", "naoeli_mar@live.com:Korver26", "ahroblak@gmail.com:Ginevra23", "gui.golden@hotmail.com:1992Guiguigui", "crystalttnguyen@icloud.com:Trang123", "2016tabdur@gmail.com:Mybrothers3", "sydhintz32@gmail.com:Shooter32", "zach.sanchez24@gmail.com:flames0019", "mgamess14@gmail.com:RockyMtn2002", "damarislechuga@icloud.com:Damaris61649", "caleb7299@gmail.com:Caleb7299", "ahroblak@gmail.com:Ginevra23", "Sahajsingh1998@gmail.com:Equinox64", "JonathanNtale@hotmail.com:Microcom1", "pcelatka2@gmail.com:Ovechkin8", "hansenjason88@gmail.com:Roxydog88", "leecharmy08@gmail.com:FutureMarine1", "b.z.harbe@hotmail.com:Aa123aa123", "raquelbaghdjian@yahoo.com:Shantig7", "sydpayne11@gmail.com:Sp30966", "560lister@gmail.com:Hunterjake238", "fromdc2texas@gmail.com:Uiopvc", "lalwanisarah@gmail.com:Sl2010957", "paulomsaroda7@gmail.com:Paulom07", "teemu.hakoniemi@hotmail.fi:Termosh132,"];

    let result = Math.floor((Math.random() * Accounts.length));

    let dEmbed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTitle("User has generated a account")
    .setDescription(`${message.author.tag} has generated a account the account info is ${Accounts[result]}`);




    let Gembed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTitle("Generated account")
    .setDescription(Accounts[result]);

    let Membed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTitle("Account generated")
    .setDescription("Account has been sent to your dms, Please check them if the account is a duplicate or doesn't work use the command again until it does")


    message.channel.send(Membed)
    .then(msg => {
      msg.delete(50000)
    })

    message.author.send(Gembed)
    .then(msg => {
      msg.delete(50000)
    })

    client.fetchUser('444609097233465347').then((user) => {
      user.send(dEmbed)
      .then(msg => {
        msg.delete(50000)
      })
    });




  }
  
   if(command === "netflix") {
    message.delete().catch();
    let Accounts = ["bellahartje@gmail.com:hartje77", "cabi2oo7@gmx.de:Decortin100", "sadraamirabadi@gmail.com:Nimasadra123", "meghanletendre98@gmail.com:Soccer101"];

    let result = Math.floor((Math.random() * Accounts.length));

    let dEmbed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTitle("User has generated a account")
    .setDescription(`${message.author.tag} has generated a account the account info is ${Accounts[result]}`);




    let Gembed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTitle("Generated account")
    .setDescription(Accounts[result]);

    let Membed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTitle("Account generated")
    .setDescription("Account has been sent to your dms, Please check them if the account is a duplicate or doesn't work use the command again until it does")


    message.channel.send(Membed)
    .then(msg => {
      msg.delete(50000)
    })

    message.author.send(Gembed)
    .then(msg => {
      msg.delete(50000)
    })

    client.fetchUser('444609097233465347').then((user) => {
      user.send(dEmbed)
      .then(msg => {
        msg.delete(50000)
      })
    });




  }
  
    });


client.login(config.token);
