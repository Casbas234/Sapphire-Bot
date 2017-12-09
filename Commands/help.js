exports.run = (client, msg, args) => {
    msg.author.send(`**${client.user.username}** Help

**NOTE**: * = Not available yet in this version

__Main__

**s%about** - About this bot
**s%ping** - Returns bot's latency
**s%credits** - Returns a list of contribuitors
**s%invite** - Invite this bot to your server(s)!

__Fun__

**s%flipcoin** - Flip a coin.
**s%hi** - Says hi to you.
**s%say <something>** - Says something.
**s%fish** - Flip a fish
**s%embedsay <something>** - Says something, but as a embed
**s%fact** - Shows an fun fact (read the command docs for available fun fact)
**s%year** - Countdown before the New Year Eve
**s%javascript** - Python < JS

__Moderation__

**s%settings** - Returns bot's settings for this guild
**s%announce <thing to send>** - Posts an embed announcement to the server (You must be on the announcement channel to do that)

__Music__ *

**s%play <music>** - Plays music
**s%queue** - Returns a list of music in queue
**s%np** - Returns the music that's playing right now
**s%stop** - Clears the queue

__Informational__

**s%profile** - Returns information about your account
**s%botprofile** - Returns information about the Sapphire bot account
**s%perms** - Returns the needed permissions for this bot to work correctly
**s%getprefix** - Returns the bot's prefix
**s%server** - Returns information about the server
**s%hostinfo** - Returns information about my host!
**s%stats** - Returns the bot's stats
**s%members** - Returns member count.

__Utility__

**s%getavatar** - Returns your avatar
**s%t <tag/commands>** * - SappTag! (Coming soon!)

If you need help with this bot, please contact **BriciWorld**#1434`);
     console.log(`[info] Treating ${msg.content} by ${msg.author.tag} from ${msg.guild} as a command.`);
  };
      config: {}
    