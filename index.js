
//requiring discord library 
const Discord = require("discord.js"); 
//creating the client 
const client = new Discord.Client({intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES", "GUILD_EMOJIS_AND_STICKERS", "GUILD_INTEGRATIONS", "GUILD_MESSAGE_REACTIONS", "GUILD_PRESENCES"], partials: ['MESSAGE', 'CHANNEL', 'REACTION']});





//starting ready event
client.on("ready", async () => { 

//print stats in terminal
console.log('bot online com sucesso!');

//declaring the status and avatar swap file
const random = require('./status.js');

//starting status swap
random.stats(client, ["status one", "status two"], 20000)
})



//Bot logging in to the api
client.login('TOKEN').resolve