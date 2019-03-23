const Commando = require('discord.js-commando');

module.exports = class PSO2Commands extends Commando.Command {
    constructor(client) {
        super(client, {
            name: "alertsdaily",
            group: "pso2",
            memberName: "alertsdaily",
            description: "PSO2 Daily Order",
            examples: ["!alertsdaily"],
            guildOnly: true,

            args: [
                {
                    key: 'channel',
                    label: 'channel',
                    prompt: 'on what channel do you want the server status to be displayed on?',
                    type: 'channel'
                },
            ]
        })
    }

    hasPermission(msg) {
        return msg.member.hasPermission('MANAGE_GUILD');
    }

    async run(msg, args, client){
        let channel = args.channel;
        let dict = {}
        //dict["ships"] = args.ships;
        dict["channel"] = channel.id;

        this.client.provider.set(msg.guild, "alertsdaily", dict);
        return msg.reply(`${msg.author} Alerts PSO2 Daily Order successfuly enable on channel #${args.channel.name}`);
    }
}