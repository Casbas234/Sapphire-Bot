exports.run = (client, msg, args) => {
    if(!msg.member.roles.some(r=>["Sapphire Mod"].includes(r.name)) )
    return msg.channel.send(":x: You need **Sapphire Mod** role in order to use this command!");
    let thing = args.join(" ");
    msg.delete();
    msg.channel.send({embed: {
        color: 889999,
        author: {
          name: `Announcement from ${msg.author.tag}`,
          icon_url: msg.author.avatarURL
        },
        description: `${thing}`,
    }
    });
    console.log(`[info] Treating ${msg.content} by ${msg.author.tag} from ${msg.guild} as a command.`);
      };
  config: {}