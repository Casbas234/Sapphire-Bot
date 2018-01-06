exports.run = (client, msg, args) => {
    let text = args.join(" ");
    msg.channel.send({embed: {
            color: 0x194596,
            author: {
                name: msg.author.username + ` says...`,
                icon_url: msg.author.avatarURL
            },
            description: `${text}`,
        }
    });
    console.log(`[info] Treating ${msg.content} by ${msg.author.tag} from ${msg.guild} as a command.`);
};
config: {}