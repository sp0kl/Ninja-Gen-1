//Required Node Modules go here!
const Discord = require('discord.js');
const snekfetch = require('snekfetch');
const guildConf = require ('../Data/config.json');
const config = require ('../Data/config.json');
const bot = new Discord.Client(); // Our Discord Client defined as bot
exports.run = async (client, message, args) => {

	//Allows a user to set a prefix for the server.
guildConf[message.guild.id].prefix = args[0];
	if (!guildConf[message.guild.id].prefix) {
		guildConf[message.guild.id].prefix = config.prefix; // If you didn't specify a Prefix, set the Prefix to the Default Prefix
	}
	
};
