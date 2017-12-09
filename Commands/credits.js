exports.run = (client, msg, args) => {
msg.channel.send({embed: {
    color: 194596,
    author: {
      name: client.user.username + " Credits",
      icon_url: client.user.avatarURL
    },
    description: "Author of the bot: **BriciWorld#1434**",
      fields: [{
        name: ":tools: Contribuitors",
        value: "There are no contribuitors for this bot. If you want to be on this list just contribute to this bot."
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
