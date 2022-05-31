module.exports = {
    name: 'addgit',
    description: "add github link to database",
    execute(message, args){
        const fs = require('fs');
        const user_id = message.author.id;
        if(args.length == 1){
            let link = args[0];
            if(!link.startsWith("https")){
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
                    let user_link = obj[user_id];
                    if(!user_link){
                        message.channel.send("No github link found for "+message.author.username+". You can add like this '!github <link>'")
                    }
                    else{
                        message.channel.send(message.author.username + "'s github: "+user);
                    }
                }
            });
    }
}
}