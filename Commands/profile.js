exports.run = (client, msg, args) => {
    msg.channel.send({embed: {
        color: 194596,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        description: `Information for **${msg.author.username}**`,
          fields: [{
            name: ":hash: Discord Tag",
            value: `${msg.author.tag}`
          },
          {
            name: ":calendar_spiral: Account created",
            value: `${msg.author.createdAt}`
          },
        ],
        footer: {
          icon_url: msg.author.avatarURL,
          text: `User's avatar`
            }
        }
    });
    console.log(`[info] Treating ${msg.content} by ${msg.author.tag} from ${msg.guild} as a command.`);
    };
      config: {}
    