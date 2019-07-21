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
   .setTitle("Ninja Gen Help")
   .setColor("53380")
   .setDescription(`<@${message.author.id}>` + " My general command usage can be found below")
   .addField("About The Bot", "``gen about`` - Shows you some info about me and my team")
   .addField("Generator Commands", "``gen commands`` - Shows a list of Account Generator commands")
   .addField("Generator Categories", "``gen catergories`` - Shows all account categories and stock")
   .addField("Invite The Bot", "``gen invite`` - Generates a invite link")
   .addField("Report A Bug", "``gen bugreport {Reason}`` - Sends a message to the support server so the devs know about the bug you reported")
   .addField("Account/Stock Request", "``gen request {YourRequest}`` - Sends a message to the support server so the devs know what you requested")
   .addField("Developer Reminder", "``gen reminder`` - Sends a reminder to the support server **DEVELOPERS & BOT OWNER ONLY**")
   .addField("List Of Servers", "``gen serverlist`` - Shows a list of servers i am in")
   .addField("Current Server Info", "``gen serverinfo`` - Shows information for the current server")
   .setFooter(`Ninja Gen Beta`, `https://i.imgur.com/xerUkNI.png`)
   .setThumbnail(`https://i.imgur.com/xerUkNI.png`)
   message.channel.send(hEmbed)
 }
  
   if(command === "commands") {
  message.delete().catch();	 
   let hEmbed = new Discord.RichEmbed()
   .setTitle("Ninja Gen Help")
   .setColor("53380")
   .setDescription(`<@${message.author.id}>` + " Here is a list of my Generator commands and usage")
   .addField("Generator Categories", "``gen catergories`` - Shows all account categories and stock")
   .addField("Minecraft Accounts", "``gen minecraft`` - Generates a Minecraft account and sends it to your DMs [**currently out of stock**]")
   .addField("Spotify Accounts", "``gen spotify`` - Generates a Spotify account and sends it to your DMs")
   .addField("Dominos Accounts", "``gen dominos`` - Generates a Dominos account and sends it to your DMs")
   .addField("NordVPN Accounts", "``gen nordvpn`` - Generates a NordVPN account and sends it to your DMs")
   .addField("Netflix Accounts", "``gen netflix`` - Generates a Netflix account and sends it to your DMs [**currently out of stock**]")
   .addField("CrunchyRoll Accounts", "``gen crunchyroll`` - Generates a CrunchyRoll account and sends it to your DMs")
   .addField("Uplay Accounts", "``gen uplay`` - Generates a Uplay account and sends it to your DMs [**currently out of stock**]")
   .addField("Origin Accounts", "``gen origin`` - Generates a Origin account and sends it to your DMs [**currently out of stock**]")
   .addField("Fortnite Accounts", "``gen fortnite`` - Generates a Fortnite account and sends it to your DMs [**currently out of stock**]")
   .setFooter(`Ninja Gen Beta`, `https://i.imgur.com/xerUkNI.png`)
   .setThumbnail(`https://i.imgur.com/xerUkNI.png`)
   message.channel.send(hEmbed)
 }
  
   if(command === "categories") {
  message.delete().catch();
   let hEmbed = new Discord.RichEmbed()
   .setTitle("Account Categories")
   .setDescription(`<@${message.author.id}>` + " Here you can see a list of accounts i offer and how many are currently in stock **Please note:** Some accounts may not work, you can always join our support server or DM us to let us know so we can remove them :thumbsup:")
   .setColor("53380")
   .addField("Minecraft", "**0** Accounts available")
   .addField("Spotify", "**19** Accounts available")
   .addField("Dominos", "**20** Accounts available")
   .addField("Netflix", "**0** Accounts available")
   .addField("CrunchyRoll", "**13** Accounts available")
   .addField("Uplay", "**0** Accounts available")
   .addField("Origin", "**0** Accounts available")
   .addField("Fortnite", "**0** Accounts available")
   .addField("NordVPN", "**28** Accounts available")
   .setFooter(`Ninja Gen Beta`, `https://i.imgur.com/xerUkNI.png`)
   .setThumbnail(`${message.author.avatarURL}`)
   message.channel.send(hEmbed)
 }
  
  if(command === "invite") {
  message.delete().catch();	 
   let hEmbed = new Discord.RichEmbed()
   .setTitle("Ninja Gen Invite")
   .setDescription(`<@${message.author.id}>` + " Interested in inviting me to your server? Use the link below")
   .setColor("53380")
   .addField("You Can Invite Me Here", "[Ninja Gen Invite Link](https://discordapp.com/api/oauth2/authorize?client_id=544049582959755264&permissions=2146958839&scope=bot)")
    .setFooter(`Ninja Gen Beta`, `https://i.imgur.com/xerUkNI.png`)
   .setThumbnail(`https://i.imgur.com/xerUkNI.png`)
   message.channel.send(hEmbed)
 }
  
  if(command === "minecraft") {
 
    let Uembed = new Discord.RichEmbed()
      .setColor(53380)
      .setTitle("Minecraft Accounts Status")
      .setDescription(`<@${message.author.id}>` + " Sorry this category is currently unavailable :frowning: Join our [Support Server](https://discord.gg/CRhNHBs) for updates when this category becomes available");
      message.delete().catch();
   
   
   
    if(message.author.id !== config.ownerID) return message.channel.send(Uembed)
        snekfetch.get(`http://ip-api.com/json/${args}`).then (r => {
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
      .setDescription(`<@${message.author.id}>` + " Your Minecraft account has been sent to your dms, Please check them if the account is a duplicate or doesn't work use the command again until it does")
     
      message.channel.send(Membed)
      message.author.send(Gembed)
   
      client.fetchUser('444609097233465347').then((user) => {
        user.send(dEmbed)
        });
   
   
   
   
    })
  }

  
  if(command === "spotify") {
    message.delete().catch();
    let Accounts = ["amiamam@hotmail.com:bronzetable", "oliviameloni@hotmail.com:billabong1", "kwgeipel@gmail.com:baseball1", "stoutman777@live.com:7jesus77", "ribeiro_kk@hotmail.com:admini10", "burcudurmusoglu@gmail.com:0121kj21", "skater_alex@gmx.de:hesoyam1494", "pea_maxsimumcannon@hotmail.com:daebak19", "mathias.delannoye@live.be:Delannoye1992", "magnus_landgren@hotmail.com:oasis2", "surfboards411@gmail.com:livingeasy411", "kathleen.travers@yahoo.co.uk:Fl3tch01", "edouard@debutler.fr:doud3364", "nikes90@hotmail.it:fenice", "k3nny455wood@gmail.com:8Maggots", "candybarsugars@yahoo.com:coolcat45", "tcjewell@gmail.com:atom33", "me@drmoradi.com:sarah1guity"];

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
    .setDescription(`<@${message.author.id}>` + " Your Spotify account has been sent to your dms, Please check them if the account is a duplicate or doesn't work use the command again until it does")


    message.channel.send(Membed)
    message.author.send(Gembed)
    

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
    .setDescription(`<@${message.author.id}>` + "Your Dominos account has been sent to your dms, Please check them if the account is a duplicate or doesn't work use the command again until it does")


    message.channel.send(Membed)
    message.author.send(Gembed)

    client.fetchUser('444609097233465347', `391376464064282627`).then((user) => {
      user.send(dEmbed)
    });

    client.fetchUser('391376464064282627').then((user) => {
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
    .setDescription(`<@${message.author.id}>` + " Your Netflix account has been sent to your dms, Please check them if the account is a duplicate or doesn't work use the command again until it does")


    message.channel.send(Membed)
    message.author.send(Gembed)

    client.fetchUser('444609097233465347').then((user) => {
      user.send(dEmbed)
    });




  }
  
   if(command === "nordvpn") {
    message.delete().catch();
    let Accounts = ["fish9001@bigpond.com:9001fish", "mattznoj@gmail.com:happyDays16", "s.gianni@gmail.com:7intelsat", "damsbooster@hotmail.com:Wxcvbn789", "sawel.williams@yahoo.co.uk:Fudge2004", "ameliahayson@hotmail.com:sumomo123", "ellissafincken@hotmail.com:Liliana1", "said.karim@live.se:9001104273sk", "robkennedy3@gmail.com:Rob100500", "maximilian.humer@businesscard.at:starbucks1", "klausmj@gmail.com:Qn75njnc", "kearnskeagan@gmail.com:Minecraftpe1", "mark.v.irwin@gmail.com:maggie7181", "mediumgamemaster@gmail.com:ibrahim2003", "auzgray@gmail.com:jimmy120", "georgehiser@gmail.com:Niknak909", "moealawie@hotmail.com:123lol1793", "elijah_perez@yahoo.com:Onegai173", "taake1807@gmail.com:taker33950", "dylan.zeppa@gmail.com:blacksheep3", "hunter_commando@hotmail.com:evaunit1", "kiddykatkill42@gmail.com:Asuka002", "rubolvera@hotmail.com:za101880", "missmoneypenny66@hotmail.com:0508rabbit88", "fady.farouk.rasmy@gmail.com:fady3607", "m.olsson@hotmail.se:mikjlk243", "jakniunas.d@gmail.com:qwer1234", "neilwhite58@gmail.com:lutonmajor",];

    let result = Math.floor((Math.random() * Accounts.length));

    let dEmbed = new Discord.RichEmbed()
    .setColor(53380)
    .setTitle("User has generated a account")
    .setDescription(`${message.author.tag} has generated a NordVPN account the account info is ${Accounts[result]}`);




    let Gembed = new Discord.RichEmbed()
    .setColor(53380)
    .setTitle("Your NordVPN account")
    .setDescription(Accounts[result]);

    let Membed = new Discord.RichEmbed()
    .setColor(53380)
    .setTitle("NordVPN Account generated")
    .setDescription(`<@${message.author.id}>` + "Your NordVPN account has been sent to your dms, Please check them if the account is a duplicate or doesn't work use the command again until it does")


    message.channel.send(Membed)
    message.author.send(Gembed)

    client.fetchUser('444609097233465347').then((user) => {
      user.send(dEmbed)
    });




  }
  
   if(command === "crunchyroll") {
    message.delete().catch();
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




  }
  
   if(command === "uplay") {
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

    client.fetchUser('444609097233465347').then((user) => {
      user.send(dEmbed)
    });




  }
  
   if(command === "origin") {
    message.delete().catch();
    let Accounts = ["COMING SOON"];

    let result = Math.floor((Math.random() * Accounts.length));

    let dEmbed = new Discord.RichEmbed()
    .setColor(53380)
    .setTitle("User has generated a account")
    .setDescription(`${message.author.tag} has generated a Origin account the account info is ${Accounts[result]}`);




    let Gembed = new Discord.RichEmbed()
    .setColor(53380)
    .setTitle("Your Origin account")
    .setDescription(Accounts[result]);

    let Membed = new Discord.RichEmbed()
    .setColor(53380)
    .setTitle("Origin Account generated")
    .setDescription(`<@${message.author.id}>` + " Your Origin account has been sent to your dms, Please check them if the account is a duplicate or doesn't work use the command again until it does")


    message.channel.send(Membed)
    message.author.send(Gembed)

    client.fetchUser('444609097233465347').then((user) => {
      user.send(dEmbed)
    });




  }
  
   if(command === "fortnite") {
    message.delete().catch();
    let Accounts = ["COMING SOON"];

    let result = Math.floor((Math.random() * Accounts.length));

    let dEmbed = new Discord.RichEmbed()
    .setColor(53380)
    .setTitle("User has generated a account")
    .setDescription(`${message.author.tag} has generated a Fortnite account the account info is ${Accounts[result]}`);




    let Gembed = new Discord.RichEmbed()
    .setColor(53380)
    .setTitle("Your Fortnite account")
    .setDescription(Accounts[result]);

    let Membed = new Discord.RichEmbed()
    .setColor(53380)
    .setTitle("Fortnite Account generated")
    .setDescription(`<@${message.author.id}>` + " Your Fortnite account has been sent to your dms, Please check them if the account is a duplicate or doesn't work use the command again until it does")


    message.channel.send(Membed)
    message.author.send(Gembed)

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
  
    if(command === "request") {

    let Pembed = new Discord.RichEmbed()
      .setColor(0xff0000)
      .setTitle("Ninja Gen Change Requests")
      .setDescription(`<@${message.author.id}>` + " Ninja Gen Request help :point_down:")
      .addField("Usage", "``gen request {what you want to request}``")
      .addField("Usage Example", "``gen request remove dead Origin account {account info here}``")
      .addField("Usage Example 2", "gen request restock Origin accounts");
      message.delete().catch();

    const sayMessage = args.join(" ");
    message.delete().catch();
if(!args[0] || args[0 == "help"]) return message.channel.send(Pembed);


    let sEmbed = new Discord.RichEmbed()
    .setTitle("Ninja Gen Account/Stock Requests")
    .setColor("53380")
    .addField("User", message.author)
    .addField("UserID", `${message.author.id}`)
    .addField("Server", `${message.channel.guild}`)
    .addField("Request", `${sayMessage}`)
    .setFooter(`Ninja Gen Beta`, `https://i.imgur.com/xerUkNI.png`)
    .setThumbnail(`https://i.imgur.com/xerUkNI.png`)

let Pembed2 = new Discord.RichEmbed()
      .setColor(0x0ff00)
      .setTitle("Ninja Gen Change Requests")
      .setDescription(`<@${message.author.id}>` + " Your request has been sent :white_check_mark:")
      message.delete().catch();

let requestChannel = client.guilds.find("id", "586817026522218507").channels.find("name","account-requests").send(sEmbed);
  message.reply(Pembed2);
     if(!requestChannel) return message.channel.send(`<@${message.author.id}> Couldn't find the required channel, please message the devs ASAP as this may be a mistake or error`);
      
console.log(`<@${message.author.id}> has used the suggest command in ${message.channel.guild} channel ${message.channel}`)
  }
          
if(command === "bugreport") {
    const sayMessage = args.join(" ");
    message.delete().catch();
if(!args[0] || args[0 == "help"]) return message.reply("Usage: ``gen bugreport {What you want to report}``, Example: ``gen bugreport Netflix accounts not working`` ");
  

  let bugEmbed = new Discord.RichEmbed()
     .setDescription("Ninja Gen Bug Reports")
     .setColor("53380")
     .addField("Reported by", `${message.author} with ID ${message.author.id}`)
     .addField("Server Name", message.guild.name)
     .addField("Channel Name", message.channel)
     .addField("Time Of Report", message.createdAt)
     .addField("Report Reason", `${sayMessage}`)
     .setFooter(`Ninja Gen Beta`, `https://i.imgur.com/xerUkNI.png`)
    .setThumbnail(`https://i.imgur.com/xerUkNI.png`)



 let reportChannel = client.guilds.find("id", "586817026522218507").channels.find("name","bug-reports").send(bugEmbed);
  message.reply(`Your bug report has been sent`);
     if(!reportChannel) return message.channel.send(`<@${message.author.id}> Couldn't find the reports channel`);
  
console.log(`<@${message.author.id}> has used the bug reports command in the server ${message.channel.guild} channel ${message.channel}`)
  }
  
  if(command === "reminder") {
    const sayMessage = args.join(" ");
    message.delete().catch();
if(!args[0] || args[0 == "help"]) return message.reply("Usage: ``gen reminder {What you want to remember}``, Example: ``gen reminder Update bot config`` ");
   
    if(message.author.id !== config.ownerID) return message.channel.send("You cannot use this command it is **BOT OWNER AND DEVELOPER** only!")
      snekfetch.get(`http://ip-api.com/json/${args}`).then (r => {

  let devEmbed = new Discord.RichEmbed()
     .setDescription("Ninja Gen Reminders")
     .setColor("53380")
     .addField("Requested by", `${message.author} with ID ${message.author.id}`)
     .addField("Server Name", message.guild.name)
     .addField("Channel Name", message.channel)
     .addField("Time Of Report", message.createdAt)
     .addField("Reminder Message", `${sayMessage}`)
     .setFooter(`Ninja Gen Beta`, `https://i.imgur.com/xerUkNI.png`)
    .setThumbnail(`https://i.imgur.com/xerUkNI.png`)



 let reminderChannel = client.guilds.find("id", "586817026522218507").channels.find("name","dev-reminders").send(devEmbed);
  message.reply(`Your reminder has been sent`);
     if(!reminderChannel) return message.channel.send(`<@${message.author.id}> Couldn't find the required channel`);
  
console.log(`<@${message.author.id}> has used the bug reports command in the server ${message.channel.guild} channel ${message.channel}`)
  
      })
 }  
  
  if(command === "about") {
   let owner = client.users.get('444609097233465347');
   let dev = client.users.get('391376464064282627'); 
   let bot = client.users.get('544049582959755264');  
   message.delete().catch();
   let aEmbed = new Discord.RichEmbed()
   .setTitle("About Ninja Gen")
   .setColor("53380")
   .addField("Current Version", "**BETA** v1.00")
   .addField("Owner/Author", `Created By: <@${owner.id}>`)
   .addField("Coders/Developers", `<@${owner.id}> **&** <@${dev.id}>`)
   .addField("Ninja Gen Support", "[Support Server](https://discord.gg/CRhNHBs)")
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
