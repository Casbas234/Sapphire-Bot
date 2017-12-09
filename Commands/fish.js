exports.run = (client, msg, args) => {
    msg.channel.send(`Flipping a fish...`).then(function(m) {
        m.edit(`:fish: **You flipped**: Raw Salmon
Enjoy!`);
    console.log(`[info] Treating ${msg.content} by ${msg.author.tag} from ${msg.guild} as a command.`);
    })
};
  config: {}
