exports.run = (client, msg, args) => {
    msg.channel.send(`Here is the bot invite link:
    
:link: **<https://discordapp.com/oauth2/authorize?&client_id=339088503977672706&scope=bot&permissions=-1>**`);
    console.log(`[info] Treating ${msg.content} by ${msg.author.tag} from ${msg.guild} as a command.`);
};
  config: {}
