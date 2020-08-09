const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});
client.on('message', message => {
	if (message.content === '!faces') {
        // send back "Pong." to the channel the message was sent in
        message.channel.send('https://cdn.discordapp.com/attachments/741735493875662899/742044543490457630/unknown.png');
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
    
    ;
});
client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
