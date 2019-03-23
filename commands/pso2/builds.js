const Commando = require('discord.js-commando');
const Discord = require('discord.js')

module.exports = class PSO2Commands extends Commando.Command {
    constructor(client) {
        super(client, {
            name: "builds",
            group: "pso2",
            memberName: "builds",
            description: "PSO2 meta builds.",
			guildOnly: true,
			})
		}
    async run(msg){
        return msg.reply("", {embed: {
            color: 3447003,
            title: "Phantasy Star Online 2",
            url: "http://pso2.jp",
            footer: {
				icon_url: "https://cdn.discordapp.com/attachments/315890823621246976/349707514247512065/14021743_1265949943439339_8245104055272688311_n.jpg",
                text: "PCP Network"
            },
            fields: [{
                name: "Striking",
                value: "[Hu/Fi](https://goo.gl/hPUQmb)\n[Fi/Hu](https://goo.gl/fcJZpV)\n[Br/Hu](https://goo.gl/MEaMaI)\n[Bo/Hu](https://goo.gl/YVABvW)",
                inline: true
            },
            {
                name: "Ranged",
                value: "[Ra/Hu](https://goo.gl/dVZhs6)\n[Br/Ra](https://goo.gl/SAaSA6)\n[Gu/Ra](https://goo.gl/mdNFR2)\n[Gu/Hu](https://goo.gl/9P0Wfx)",
                inline: true
            },
            {
                name: "Tech",
                value: "[Fo/Te](https://goo.gl/hQthMq)\n[Te/Br](https://goo.gl/bqpYJN)\n[Su/XX](https://goo.gl/AEIBzm)",
                inline: true
            }]
        }});
    }
}