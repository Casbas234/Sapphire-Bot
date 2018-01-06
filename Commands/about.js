exports.run = (client, msg, args) => {
    msg.channel.send({embed: {
        color: 0x194596,
        author: {
          name: `All about ` + client.user.username,
          icon_url: client.user.avatarURL
        },
        description: `Hello! I'm **${client.user.username}**, a bot that does everything!
Stuffs below.`,
          fields: [{
            name: ":globe_with_meridians: Links",
            value: `[Website](http://sapphirebot.cf)
[Support](https://discord.gg/DqGgueq)
[Twitter Page](https://twitter.com/SapphireDiscord)
[GitHub repository](https://github.com/bw-tech/Sapphire-Bot)`,
            inline: true
          },
          {
            name: ":bar_chart: Stats",
            value: `${client.guilds.size} servers
${client.users.size} users
${client.channels.size} channels`,
            inline: true
          },
          {
            name: ":repeat: Versions, and author",
            value: `<@327864603788967948> (BriciWorld#1434)
Sapphire: v1.3
Discord.js: v11.2.1
Node.js: v9.2.0`,
            inline: true
          },
          {
            name: ":radio_button: Last restart",
            value: `${client.readyAt}`
          },
        ],
        timestamp: new Date(),
        footer: {
          icon_url: msg.author.avatarURL,
          text: `Requested by ${msg.author.tag}`
            }
        }
    });
    console.log(`[info] Treating ${msg.content} by ${msg.author.tag} from ${msg.guild} as a command.`);
    };
      config: {}
    