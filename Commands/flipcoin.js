exports.run = (client, msg, args) => {
    msg.channel.send(`:white_check_mark: You flipped **${coin}**.`);
    console.log(`[info] Treating ${msg.content} by ${msg.author.tag} from ${msg.guild} as a command.`);
};
  config: {}
