const Commando = require('discord.js-commando');

module.exports = class PSO2Commands extends Commando.Command {
    constructor(client) {
        super(client, {
            name: "dalerts15min",
            group: "pso2",
            memberName: "disablealerts15min",
            description: "Disables EQ alerts 15 Minutes on the current server.",
            examples: ["dalerts15min"],
            guildOnly: true
        })
    }

    hasPermission(msg) {
        return msg.member.hasPermission('MANAGE_GUILD');
    }

    async run(msg, args, client){
        this.client.provider.set(msg.guild, "alerts15min");
        return msg.reply(`${msg.author} Alerts 15 Minutes successfully disabled on this server.`);
    }
}