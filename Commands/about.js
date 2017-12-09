exports.run = (client, msg, args) => {
    msg.channel.send({embed: {
        color: 194596,
        author: {
          name: `All about ` + client.user.username,
          icon_url: client.user.avatarURL
        },
        description: `Hello! I'm **${client.user.username}**, and I'm here to make your server fun, safe and much more!
I was made by **owner** and the BSDev Team using **Discord.js** v11.2!
I'm currently at the version **1.2**!
Type **s%help** for my list of commands!
Please [invite](https://discordapp.com/oauth2/authorize?&client_id=377087253517697024&scope=bot&permissions=-1) me to your server!`,
          fields: [{
            name: ":globe_with_meridians: Links",
            value: `[Website](http://sapphirebot.cf)
[Support](https://discord.gg/DqGgueq)
[Twitter Page](https://twitter.com/SapphireDiscord)`
          },
              {
            name: ":bar_chart: Stats",
            value: `${client.guilds.size} servers
${client.users.size} users
${client.channels.size} channels`
          },
          {
            name: ":radio_button: Last restart",
            value: `${client.readyAt}`
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
    
