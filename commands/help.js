module.exports = {
    name: 'help',
    description: "display command list",
    execute(message, args){
        message.channel.send('Right now the only proper command is !github :)');
    }
}