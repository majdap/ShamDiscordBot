module.exports = {
    name: 'github',
    description: "add github link to database or display link",
    execute(message, args, Discord){
        const fs = require('fs');
        const user_id = message.author.id;
        if(args.length == 1){
            let link = args[0];
            if(!link.startsWith("https://github")){
                message.channel.send("Invalid link.");
                return;
            }
            else(
                fs.readFile('github.json', 'utf8', function readFileCallback(err, data){
                    if(err){
                        console.log(err);
                    }
                    else{
                        obj = JSON.parse(data);
                        obj[user_id] = link;
                        json = JSON.stringify(obj);
                        fs.writeFile('github.json', json, 'utf8', callback = () => {});
                    }
                })
            )
        }
        else if(args.length == 0){
            fs.readFile('github.json', 'utf8', function readFileCallback(err, data){
                if(err){
                    console.log(err);
                }
                else{
                    obj = JSON.parse(data);
                    console.log(obj);
                    console.log(user_id)
                    console.log(typeof(user_id));
                    let user_link = obj[user_id];
                    console.log(user_link);
                    let name = message.author.username;
                    if(!user_link){
                        message.channel.send("No github link found for "+name+". You can add one like this `!github <link>`")
                    }
                    else{
                        const newEmbed = new Discord.MessageEmbed()
                        .setColor('#d4ac0d')
                        .setDescription("This code looks delicious")
                        .setTitle(name+"'s Github")
                        .setURL(user_link)
                        .setImage('https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png')
                        // message.channel.send(message.author.username + "'s github: "+user_link);
                        message.channel.send({embeds: [newEmbed]});
                    }
                }
            });
    }
}
}