exports.run = (client, msg, args) => {
    msg.channel.send(`Hi there!
Type s>help for commands!`);
    console.log(`[info] Treating ${msg.content} by ${msg.author.tag} from ${msg.guild} as a command.`);
};
  config: {}
