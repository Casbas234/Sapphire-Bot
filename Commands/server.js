exports.run = (client, msg, args) => {
    msg.channel.send({embed: {
        color: 0x194596,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        description: `Information for **${msg.guild.name}**`,
        thumbnail: {
          url: msg.guild.iconURL
           },
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
            value: `${msg.guild.memberCount}`,
            inline: true
          },
          {
            name: ":bust_in_silhouette: Server Owner",
            value: `${msg.guild.owner}`,
            inline: true
          },
          {
            name: ":earth_africa: Server Region",
            value: `${msg.guild.region}`,
            inline: true
          },
        ],
        timestamp: new Date(),
        footer: {
          icon_url: msg.author.avatarURL,
          text: `Requested by ${msg.author.tag}`
            }
        }
    
