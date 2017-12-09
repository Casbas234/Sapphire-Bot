exports.run = (client, msg, args) => {
    msg.channel.send({embed: {
        color: 194596,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        description: `Information for **${msg.guild.name}**`,
          fields: [{
            name: ":desktop: Server Name",
            value: `${msg.guild.name}`
          },
          {
            name: ":calendar_spiral: Server created",
            value: `${msg.guild.createdAt}`
          },
          {
            name: ":busts_in_silhouette: Members",
            value: `${msg.guild.memberCount}`
          },
          {
            name: ":bust_in_silhouette: Server Owner",
            value: `${msg.guild.owner}`
          },
          {
            name: ":earth_africa: Server Region",
            value: `${msg.guild.region}`
          },
        ],
        footer: {
          icon_url: msg.guild.iconURL,
          text: `Guild's icon`
            }
        }
    });
    console.log(`[info] Treating ${msg.content} by ${msg.author.tag} from ${msg.guild} as a command.`);
    };
      config: {}
    