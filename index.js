const Discord = require("discord.js");
const Music = require('discord.js-musicbot-addon');
const Enmap = require("enmap");
const fs = require("fs");
const snekfetch = require('snekfetch');
const talkedRecently = new Set();
const token = process.env.BOT_TOKEN;
const client = new Discord.Client();
const Regex = require('regex');
const config = require('./Data/config.json');
client.config = config;


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

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});

client.commands = new Enmap();

client.on('message', message => {
  const prefixMention = new RegExp(`^<@!?${client.user.id}> `);
    const prefix = message.content.match(prefixMention) ? message.content.match(prefixMention)[0] : '!';

});

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Attempting to load command ${commandName}`);
    client.commands.set(commandName, props);
  });
});

Music.start(client, {
  youtubeKey: "AIzaSyDu_YZn7ivq66a3baryXztxK8rFrERAKvA",
  prefix: config.prefix, // Prefix for the commands.
  global: true,            // Non-server-specific queues.
  maxQueueSize: 60,        // Maximum queue size of 25.
  clearInvoker: true,      // If permissions applicable, allow the bot to delete the messages that invoke it.
  helpCmd: 'musichelp',        // Sets the name for the help command.
  playCmd: 'play',        // Sets the name for the 'play' command.
  volumeCmd: 'volume',     // Sets the name for the 'volume' command.
  leaveCmd: 'begone',      // Sets the name for the 'leave' command.
  disableLoop: false        // Disable the loop command.
  });

client.login(process.env.BOT_TOKEN);
