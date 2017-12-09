exports.run = (client, msg, args) => {
    msg.channel.send({embed: {
      color: 194596,
      author: {
        name: client.user.username + " stats",
        icon_url: client.user.avatarURL
      },
      fields: [{
        name: "Guilds",
        value: `${client.guilds.size}`
      },
      {
        name: "Users",
        value: `${client.users.size}`
      },
      {
        name: "Channels",
        value: `${client.channels.size}`
      },
      {
        name: "Shards",
        value: `1`
      },
      {
        name: "Bot Version",
        value: `v1.2`
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