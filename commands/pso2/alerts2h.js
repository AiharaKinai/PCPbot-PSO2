const Commando = require('discord.js-commando');

module.exports = class PSO2Commands extends Commando.Command {
    constructor(client) {
        super(client, {
            name: "alerts2h",
            group: "pso2",
            memberName: "alerts2h",
            description: "Enables EQ alerts 2 hours ",
            examples: ["alerts2h #general 5, 7, 9"],
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

        this.client.provider.set(msg.guild, "alerts2h", dict);
        return msg.reply(`${msg.author} Alerts 2 hours successfully enabled for ships ${args.ships.join(', ')} on channel #${args.channel.name}`);
    }
}