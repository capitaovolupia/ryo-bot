'use strict';

var config = require( "./config.json" ); 

// Import the discord.js module
const Discord = require('discord.js');

// Create an instance of a Discord client
const client = new Discord.Client();


client.on('ready', () => {
  console.log('RYO LIVES!');
});

// Create an event listener for messages
client.on('message', message => {
  
    // se o bot receber uma mensagem de outro bot, ignorar. Isso previne loop infinitos.
    if(message.author.bot) {
        console.log("recebida mensagem de um bot. Ignorando.")
        return;
    }
  
  if (message.content.toLowerCase().includes("daddy help")) {
    message.react(config.bracao);
    message.channel.send("AGUENTE FIRME ESTOU INDO!");
  }
  if (message.content.toLowerCase().includes("daddy")) {
    message.react(config.emoteEnvergonhado);
  }
  if (message.mentions.has(client.user) && !(message.content.toLowerCase().includes("daddy help")))   {
    message.channel.send("Precisa da minha ajuda ajuda?");
    message.react(config.ryo);
  }
});

// Log our bot in using the token from https://discord.com/developers/applications
client.login(config.token);
