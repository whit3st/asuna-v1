const { Player } = require('discord-player');
const { Client, GatewayIntentBits } = require('discord.js');

global.client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.MessageContent
  ],
  disableMentions: 'everyone',
});

client.config = require('./config');

global.player = new Player(client, client.config.opt.discordPlayer);

require('./src/loader');
require('./src/events');


client.login(client.config.app.token);

client.on("messageCreate", async (msg) => {
  // You can view the msg object here with console.log(msg)
  if (msg.content === "/bagis") {
    msg.reply(`${msg.author.username}, https://ahbap.org/bagisci-ol adresinden bagis yapabilirsin.`);
    // for (i = 0; i < 3;) {
    //   msg.reply(`${msg.author.username}, https://ahbap.org/bagisci-ol adresinden bagis yapabilirsin.`);
    //   await wait(3600000)
    //   i++;
    // } 
  }
});