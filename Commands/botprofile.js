exports.run = (client, msg, args) => {
    msg.channel.send({embed: {
        color: 194596,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        description: `Bot account information`,
          fields: [{
            name: ":hash: Discord Tag",
            value: `${client.user.tag}`
          },
          {
            name: ":gear: Active development started",
            value: `${client.user.createdAt}`
          },
        ],
        footer: {
          icon_url: client.user.avatarURL,
          text: `Bot avatar`
            }
        }
    });
    console.log(`[info] Treating ${msg.content} by ${msg.author.tag} from ${msg.guild} as a command.`);
    };
      config: {}
    