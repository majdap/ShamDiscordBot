const Discord = require('discord.js');
const prefix = '!';
const fs = require('fs');
const client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES
    ]
});

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Cheeky is now online B-)');
});


client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    console.log(message.author);

    if(command === 'ping'){
        client.commands.get('ping').execute(message, args)
    }
    else if(command === 'github'){
        client.commands.get('github').execute(message, args, Discord)
    }
    else if(command === 'help'){
        client.commands.get('help').execute(message, args)
    }
    
})

client.login('### PRIVATE KEY REMOVED ###');
