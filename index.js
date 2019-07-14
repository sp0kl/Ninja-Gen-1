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
  client.user.setGame(`gen help in ${client.guilds.size} Servers`, `https://www.twitch.tv/monstercat`);
});

client.on("guildCreate", guild => {
  // This event triggers when the bot joins a guild.
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  client.user.setGame(`gen help in ${client.guilds.size} Servers`, `https://www.twitch.tv/monstercat`);
});

client.on("guildDelete", guild => {
  // this event triggers when the bot is removed from a guild.
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  client.user.setGame(`gen help in ${client.guilds.size} Servers`, `https://www.twitch.tv/monstercat`);
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
   .setTitle("Ninja Gen Help :page_with_curl:")
   .setColor("53380")
   .addField("Ninja Gen Prefix", "My Prefix Is: ``gen``")
   .addField("gen categories", "Shows all account categories and stock")
   .addField("gen invite", "Generates a invite link")
   .setFooter(`Ninja Gen Beta`, `https://i.imgur.com/xerUkNI.png`)
   .setThumbnail(`https://i.imgur.com/xerUkNI.png`)
   message.channel.send(hEmbed)
 }
  
   if(command === "categories") {
  message.delete().catch();
   let hEmbed = new Discord.RichEmbed()
   .setTitle("Account Categories")
   .setDescription(message.author.tag + " Here you can see a list of accounts i offer and how many are currently in stock")
   .setColor("53380")
   .addField("Minecraft", "**0** Accounts available")
   .addField("Spotify", "**19** Accounts available")
   .addField("Dominos", "**20** Accounts available")
   .addField("Netflix", "**0** Accounts available")
   .addField("CrunchyRoll", "**0** Accounts available")
   .addField("Uplay", "**0** Accounts available")
   .addField("Origin", "**0** Accounts available")
   .addField("Fortnite", "**0** Accounts available")
   .addField("NordVPN", "**0** Accounts available")
   .setFooter(`Ninja Gen Beta`, `https://i.imgur.com/xerUkNI.png`)
   .setThumbnail(`${message.author.avatarURL}`)
   message.channel.send(hEmbed)
 }
  
  if(command === "invite") {
  message.delete().catch();	 
   let hEmbed = new Discord.RichEmbed()
   .setTitle("Ninja Gen Invite")
   .setDescription(message.author.tag + " Interested in inviting me to your server? Use the link below")
   .setColor("53380")
   .addField("You Can Invite Me Here", "[Ninja Gen Invite Link](https://discordapp.com/api/oauth2/authorize?client_id=544049582959755264&permissions=2146958839&scope=bot)")
    .setFooter(`Ninja Gen Beta`, `https://i.imgur.com/xerUkNI.png`)
   .setThumbnail(`https://i.imgur.com/xerUkNI.png`)
   message.channel.send(hEmbed)
 }
  
  if(command === "minecraft") {
    message.delete().catch();
    let Accounts = ["COMING SOON"];

    let result = Math.floor((Math.random() * Accounts.length));

    let dEmbed = new Discord.RichEmbed()
    .setColor(53380)
    .setTitle("User has generated a account")
    .setDescription(`${message.author.tag} has generated a Minecraft account the account info is ${Accounts[result]}`);




    let Gembed = new Discord.RichEmbed()
    .setColor(53380)
    .setTitle("Your Minecraft account")
    .setDescription(Accounts[result]);

    let Membed = new Discord.RichEmbed()
    .setColor(53380)
    .setTitle("Minecraft Account generated")
    .setDescription(message.author.tag + " Your Minecraft account has been sent to your dms, Please check them if the account is a duplicate or doesn't work use the command again until it does")
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
      });




  }
  
  if(command === "spotify") {
    message.delete().catch();
    let Accounts = ["amiamam@hotmail.com:bronzetable", "oliviameloni@hotmail.com:billabong1", "kwgeipel@gmail.com:baseball1", "stoutman777@live.com:7jesus77", "ribeiro_kk@hotmail.com:admini10", "burcudurmusoglu@gmail.com:0121kj21", "skater_alex@gmx.de:hesoyam1494", "pea_maxsimumcannon@hotmail.com:daebak19", "mathias.delannoye@live.be:Delannoye1992", "magnus_landgren@hotmail.com:oasis2", "surfboards411@gmail.com:livingeasy411", "kathleen.travers@yahoo.co.uk:Fl3tch01", "edouard@debutler.fr:doud3364", "nikes90@hotmail.it:fenice", "k3nny455wood@gmail.com:8Maggots", "candybarsugars@yahoo.com:coolcat45", "tcjewell@gmail.com:atom33", "zoebless@icloud.com:mathilda2003", "me@drmoradi.com:sarah1guity"];

    let result = Math.floor((Math.random() * Accounts.length));

    let dEmbed = new Discord.RichEmbed()
    .setColor(53380)
    .setTitle("User has generated a account")
    .setDescription(`${message.author.tag} has generated a Spotify account the account info is ${Accounts[result]}`);



    let Gembed = new Discord.RichEmbed()
    .setColor(53380)
    .setTitle("Your Spotify account")
    .setDescription(Accounts[result]);

    let Membed = new Discord.RichEmbed()
    .setColor(53380)
    .setTitle("Spotify Account generated")
    .setDescription(message.author.tag + " Your Spotify account has been sent to your dms, Please check them if the account is a duplicate or doesn't work use the command again until it does")


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
    });




  }
  
    if(command === "dominos") {
    message.delete().catch();
    let Accounts = ["monkeysarsweet@aol.com:monkeys777", "carter4design@gmail.com:free2bme", "naoeli_mar@live.com:Korver26", "ahroblak@gmail.com:Ginevra23", "gui.golden@hotmail.com:1992Guiguigui", "crystalttnguyen@icloud.com:Trang123", "2016tabdur@gmail.com:Mybrothers3", "sydhintz32@gmail.com:Shooter32", "zach.sanchez24@gmail.com:flames0019", "mgamess14@gmail.com:RockyMtn2002", "damarislechuga@icloud.com:Damaris61649", "caleb7299@gmail.com:Caleb7299", "ahroblak@gmail.com:Ginevra23", "Sahajsingh1998@gmail.com:Equinox64", "JonathanNtale@hotmail.com:Microcom1", "pcelatka2@gmail.com:Ovechkin8", "hansenjason88@gmail.com:Roxydog88", "leecharmy08@gmail.com:FutureMarine1", "b.z.harbe@hotmail.com:Aa123aa123", "raquelbaghdjian@yahoo.com:Shantig7", "sydpayne11@gmail.com:Sp30966", "560lister@gmail.com:Hunterjake238", "fromdc2texas@gmail.com:Uiopvc", "lalwanisarah@gmail.com:Sl2010957", "paulomsaroda7@gmail.com:Paulom07", "teemu.hakoniemi@hotmail.fi:Termosh132,"];

    let result = Math.floor((Math.random() * Accounts.length));

    let dEmbed = new Discord.RichEmbed()
    .setColor(53380)
    .setTitle("User has generated a account")
    .setDescription(`${message.author.tag} has generated a Dominos account the account info is ${Accounts[result]}`);




    let Gembed = new Discord.RichEmbed()
    .setColor(53380)
    .setTitle("Your Dominos account")
    .setDescription(Accounts[result]);

    let Membed = new Discord.RichEmbed()
    .setColor(53380)
    .setTitle("Dominos Account generated")
    .setDescription(message.author.tag + "Your Dominos account has been sent to your dms, Please check them if the account is a duplicate or doesn't work use the command again until it does")


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
    });




  }
  
   if(command === "netflix") {
    message.delete().catch();
    let Accounts = ["COMING SOON"];

    let result = Math.floor((Math.random() * Accounts.length));

    let dEmbed = new Discord.RichEmbed()
    .setColor(53380)
    .setTitle("User has generated a account")
    .setDescription(`${message.author.tag} has generated a Netflix account the account info is ${Accounts[result]}`);




    let Gembed = new Discord.RichEmbed()
    .setColor(53380)
    .setTitle("Your Netflix account")
    .setDescription(Accounts[result]);

    let Membed = new Discord.RichEmbed()
    .setColor(53380)
    .setTitle("Netflix Account generated")
    .setDescription("<@${message.author.id}> Your Netflix account has been sent to your dms, Please check them if the account is a duplicate or doesn't work use the command again until it does")


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
    });




  }
  
   if(command === "serverinfo") {
      message.delete().catch();
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setAuthor(`${message.guild.name} - Informations`, message.guild.iconURL)
    .setDescription("Server Information")
    .setColor("53380")
    .setThumbnail(sicon)
    .addField("Server Owner", message.guild.owner, true)
    .addField("Server Name", message.guild.name, true)
    .addField('Server region', message.guild.region, true)
    .addField("Created On", message.guild.createdAt, true)
    .addField("You Joined", message.member.joinedAt, true)
    .addField('Channel count', message.guild.channels.size, true)
    .addField('Total member count', message.guild.memberCount)
    .addField('Verification level', message.guild.verificationLevel, true)
    .setFooter('Guild created at:')
    .setTimestamp(message.guild.createdAt);

    message.channel.send(serverembed);
    }
  
    if(command === "suggest") {
    const sayMessage = args.join(" ");
    message.delete().catch();
if(!args[0] || args[0 == "help"]) return message.reply("Usage: ``gen suggest {What you want to suggest}``, Example: ``gen suggest Add fortniote accounts`` ");


    let sEmbed = new Discord.RichEmbed()
    .setTitle("Suggestion")
    .setColor("53380")
    .addField("User", message.author)
    .addField("UserID", `${message.author.id}`)
    .addField("Server", `${message.channel.guild}`)
    .addField("Suggested", `${sayMessage}`)
    .setFooter(`Ninja Gen Beta`, `https://i.imgur.com/xerUkNI.png`)
    .setThumbnail(`https://i.imgur.com/xerUkNI.png`)



client.guilds.find("id","586817026522218507").channels.find("name","suggestions").send(sEmbed);
message.reply("Suggestion has been sent");
console.log(`<@${message.author.id}> has used the suggest command in ${message.channel.guild} channel ${message.channel}`)
  }
  
  if(command === "bugreport") {
  message.delete().catch();
  if(!args[0] || args[0 == "help"]) return message.reply("Usage: ``gen bugreport @Ninja Gen#1378 {What you want to report}``, Example: ``gen bugreport @Ninja Gen#1378 Spotify accounts not working`` **MAKE SURE YOU MENTION THE BOT**");
      let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
     if(!rUser) return message.channel.send(":shrug: You forgot to mention me, please make sure you @mention me");
    let reason = args.join(" ").slice(22);

     let bugEmbed = new Discord.RichEmbed()
     .setDescription("Reports")
     .setColor("53380")
     .addField("Reported by", `${message.author} with ID ${message.author.id}`)
     .addField("Channel", message.channel)
     .addField("Time", message.createdAt)
     .addField("Reason", reason)
     .setFooter(`Ninja Gen Beta`, `https://i.imgur.com/xerUkNI.png`)
    .setThumbnail(`https://i.imgur.com/xerUkNI.png`)

     let reportChannel = client.guilds.find("id","586817026522218507").channels.find("name","bug-reports").send(bugEmbed);
     if(!reportChannel) return message.channel.send(`<@${message.author.id}> Couldn't find the reports channel`);

     message.delete().catch(O_o=>{});
     reportChannel.send(bugEmbed);
  } 
  
  if(command === "about") {
   let owner = client.users.get('444609097233465347');
   message.delete().catch();
   let aEmbed = new Discord.RichEmbed()
   .setTitle("About Ninja Gen")
   .setColor("53380")
   .addField("Version", "Beta v1.00")
   .addField("Author", owner.tag)
   .addField("Ninja Gen Support", "[Support Server](https://discord.gg/RBSm9zK)")
     .setFooter(`Ninja Gen Beta`, `https://i.imgur.com/xerUkNI.png`)
    .setThumbnail(`https://i.imgur.com/xerUkNI.png`)
   message.channel.send(aEmbed)
 }
 
if(command === "serverlist") {
  message.delete().catch();
  var list = client.guilds.array().sort();
  let botembed = new Discord.RichEmbed()
  .setTitle("Server's i am in")
  .setDescription(list)
  .setColor("53380")
  message.channel.send(botembed);

}

  
    });


client.login(config.token);
