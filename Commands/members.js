exports.run = (client, msg, args) => {
    msg.channel.send({embed: {
      color: 194596,
      author: {
        name: client.user.username,
        icon_url: client.user.avatarURL
      },
      title: `${msg.guild.name} member count`,
      description: `This server currently has ${msg.guild.memberCount} members!`,
      footer: {
          icon_url: msg.author.avatarURL,
          text: `Sent by ${msg.author.tag} at ${msg.createdAt}`
            }
        }
  });
  console.log(`[info] Treating ${msg.content} by ${msg.author.tag} from ${msg.guild} as a command.`);
};
config: {}