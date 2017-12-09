exports.run = (client, msg, args) => {
    msg.channel.send(`:information_source: Here's the avatar for **${msg.author.tag}**!
${msg.author.avatarURL}`);
    console.log(`[info] Treating ${msg.content} by ${msg.author.tag} from ${msg.guild} as a command.`);
};
  config: {}
