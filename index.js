
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
  client.user.setActivity(`NinjaBot Beta`);
});

client.on("guildCreate", guild => {
  // This event triggers when the bot joins a guild.
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  client.user.setActivity(`NinjaBot Beta`);
});

client.on("guildDelete", guild => {
  // this event triggers when the bot is removed from a guild.
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  client.user.setActivity(`NinjaBot Beta`);
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
  
  // First, this must be at the top level of your code, **NOT** in any event!
const talkedRecently = new Set();
  
  if (talkedRecently.has(message.author.id)) {
            message.channel.send("Wait 1 minute before getting typing this again. - " + message.author);
    } else {

           // the user can type the command ... your command code goes here :)
   if(command === "gentest") {
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
    .then(message => {
      message.delete(10000)
    })

    message.author.send(Gembed)
    .then(message => {
      message.delete(10000)
    })

    client.fetchUser('391376464064282627').then((user) => {
      user.send(dEmbed)
      .then(message => {
        message.delete(10000)
      })
    });




  }
        // Adds the user to the set so that they can't talk for a minute
        talkedRecently.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecently.delete(message.author.id);
        }, 60000);
    }
  });


client.login(config.token);
