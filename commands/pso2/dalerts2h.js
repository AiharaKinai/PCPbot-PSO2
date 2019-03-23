const Commando = require('discord.js-commando');

module.exports = class PSO2Commands extends Commando.Command {
    constructor(client) {
        super(client, {
            name: "dalerts2h",
            group: "pso2",
            memberName: "disablealerts2h",
            description: "Disables EQ alerts 2 hours on the current server.",
            examples: ["dalerts2h"],
            guildOnly: true
        })
    }

    hasPermission(msg) {
        return msg.member.hasPermission('MANAGE_GUILD');
    }

    async run(msg, args, client){
        this.client.provider.set(msg.guild, "alerts2h");
        return msg.reply(`${msg.author} Alerts 2 hours successfully disabled on this server.`);
    }
}