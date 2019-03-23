const Commando = require('discord.js-commando');

module.exports = class PSO2Commands extends Commando.Command {
    constructor(client) {
        super(client, {
            name: "dalerts30min",
            group: "pso2",
            memberName: "disablealerts30min",
            description: "Disables EQ alerts 30 Minutes on the current server.",
            examples: ["dalerts30min"],
            guildOnly: true
        })
    }

    hasPermission(msg) {
        return msg.member.hasPermission('MANAGE_GUILD');
    }

    async run(msg, args, client){
        this.client.provider.set(msg.guild, "alerts30min");
        return msg.reply(`${msg.author} Alerts 30min successfully disabled on this server.`);
    }
}