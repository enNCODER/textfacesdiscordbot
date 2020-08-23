const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});
client.on('message', message => {
	if (message.content === '!faces') {
        // send back "Pong." to the channel the message was sent in
        message.channel.send('http://stufftohost.000webhostapp.com/397Plump.jpg');
    }
    if (message.content === '!smile') {
        // send back "Pong." to the channel the message was sent in
        message.channel.send('( ͡° ͜ʖ ͡°)');
    }
    if (message.content === '!shrug') {
        // send back "Pong." to the channel the message was sent in
        message.channel.send('```¯╲_(ツ)_/¯```');
    }
    if (message.content === '!tableflip') {
        // send back "Pong." to the channel the message was sent in
        message.channel.send('(⌐▀͡ ̯ʖ▀) ╯︵ ┻─┻');
    }
    if (message.content === '!glasses') {
        // send back "Pong." to the channel the message was sent in
        message.channel.send('(▀̿Ĺ̯▀̿ ̿)');
    }
    if (message.content === '!gun') {
        // send back "Pong." to the channel the message was sent in
        message.channel.send('```(⌐▀͡ ̯ʖ▀)︻̷┻̿═━一-```');
    }
    if (message.content === '!sad') {
        // send back "Pong." to the channel the message was sent in
        message.channel.send('( ͡° ʖ̯ ͡°)');
    }
    if (message.content === '!happy') {
        // send back "Pong." to the channel the message was sent in
        message.channel.send('ヽ(͡◕ ͜ʖ ͡◕)ﾉ');
    }
    if (message.content === '!smile-dm') {
        // send back "Pong." to the channel the message was sent in
        message.author.send('( ͡° ͜ʖ ͡°)');
    }
    if (message.content === '!shrug-dm') {
        // send back "Pong." to the channel the message was sent in
        message.author.send('```¯╲_(ツ)_/¯```');
    }
    if (message.content === '!tableflip-dm') {
        // send back "Pong." to the channel the message was sent in
        message.author.send('(⌐▀͡ ̯ʖ▀) ╯︵ ┻─┻');
    }
    if (message.content === '!glasses-dm') {
        // send back "Pong." to the channel the message was sent in
        message.author.send('(▀̿Ĺ̯▀̿ ̿)');
    }
    if (message.content === '!gun-dm') {
        // send back "Pong." to the channel the message was sent in
        message.author.send('```(⌐▀͡ ̯ʖ▀)︻̷┻̿═━一-```');
    }
    if (message.content === '!sad-dm') {
        // send back "Pong." to the channel the message was sent in
        message.author.send('( ͡° ʖ̯ ͡°)');
    }
    if (message.content === '!happy-dm') {
        // send back "Pong." to the channel the message was sent in
        message.author.send('ヽ(͡◕ ͜ʖ ͡◕)ﾉ');
    }
    if (message.content === '!faces-dm') {
        // send back "Pong." to the channel the message was sent in
        message.author.send('http://stufftohost.000webhostapp.com/397Plump.jpg');
    }
    
    ;
});
client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
