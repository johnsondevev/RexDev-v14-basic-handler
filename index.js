require('dotenv').config();
const { Client } = require('discord.js');

const client = new Client({ intents: 32767,});

client.on('ready', () => {
    console.log(`Client logged in as ${client.user.username}`)
});


client.login(process.env.TOKEN);
