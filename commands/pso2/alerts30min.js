const Commando = require('discord.js-commando');

module.exports = class PSO2Commands extends Commando.Command {
    constructor(client) {
        super(client, {
            name: "alerts30min",
            group: "pso2",
            memberName: "alerts30min",
            description: "Enables EQ alerts 30 mins ",
            examples: ["alerts30min #general 5, 7, 9"],
            guildOnly: true,

            args: [
                {
                    key: 'channel',
                    label: 'channel',
                    prompt: 'on what channel do you want the alerts to be displayed on?',
                    type: 'channel'
                },
                {
                    key: 'ships',
                    label: 'ship',
                    prompt: 'for what ship(s)? Each following message will be treated as a different ship.',
                    validate: (args) => {
                        if (args >= 1 && args <= 10){
                            return true;
                        }
                    },
                    type: 'integer',
                    infinite: true
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
        dict["ships"] = args.ships;
        dict["channel"] = channel.id;

        this.client.provider.set(msg.guild, "alerts30min", dict);
        return msg.reply(`${msg.author} Alerts 30 minutes successfully enabled for ships ${args.ships.join(', ')} on channel #${args.channel.name}`);
    }
}