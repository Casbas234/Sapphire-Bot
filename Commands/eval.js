exports.run = (client, msg, args) => {

    let code = args.join(" ").slice(1);

    if(msg.author.id !== OWNER ID) return;
    try {
        const code = args.join(" ");
        let evaled = eval(code);

        if (typeof evaled !== "string")
            evaled = require("util").inspect(evaled);

        msg.channel.send(clean(evaled), {code:"xl"});
    } catch (err) {
        msg.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    };

    function clean(text) {
        if (typeof(text) === "string")
            return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
        else
            return text;
    }}

config: {}
