exports.run = (client, msg, args) => {
    msg.channel.send({embed: {
        color: 194596,
        author: {
          name: `${client.user.username}'s Home!`,
          icon_url: client.user.avatarURL
        },
          fields: [{
            name: ":information_source: System Information",
            value: `win32-ia32 with node version 9.2.0`
          },
              {
            name: ":computer: Hosting in",
            value: `**BriciWorld**'s PC`
          },
          {
            name: ":robot: 24/7/365?",
            value: `No.`
          },
          {
            name: ":bar_chart: Used RAM (by Sapphire)",
            value: `4.4MB of 4GB RAM`
          },
        ],
        footer: {
          icon_url: msg.author.avatarURL,
          text: `Sent by ${msg.author.tag} at ${msg.createdAt}`
            }
        }
    });
    console.log(`[info] Treating ${msg.content} by ${msg.author.tag} from ${msg.guild} as a command.`);
    };
      config: {}
    