msg.author.send({embed: {
  color: 0x194596,
  author: {
    name: `${client.user.username}`,
    icon_url: client.user.avatarURL
  },
  title: `:circus_tent: Fun`,
  description: `\`\`\`flipcoin \nhi \nsay <something> \nembed <something> \nfish \nfact \njavascript \nyear \n8ball <question> \nroll \naembed <something>\`\`\``
}
});
msg.author.send({embed: {
    color: 0x194596,
    author: {
      name: `${client.user.username}`,
      icon_url: client.user.avatarURL
    },
    title: `:tools: Moderation`,
    description: `\`\`\`settings \nannounce <message>\`\`\``
  }
  });
  msg.author.send({embed: {
    color: 0x194596,
    author: {
      name: `${client.user.username}`,
      icon_url: client.user.avatarURL
    },
    title: `:information_source: Info`,
    description: `\`\`\`profile \nperms \ngetprefix \nserver \nhostinfo \ngetavatar \nmembercount\`\`\``
  }
  });
     msg.react("✅")
     console.log(`[info] Treating ${msg.content} by ${msg.author.tag} from ${msg.guild} as a command.`);
  };
      config: {}
    
