const Commando = require('discord.js-commando');
const request = require('request');

module.exports = class PSO2Commands extends Commando.Command {
    constructor(client) {
        super(client, {
            name: "wl",
            group: "proxy",
            memberName: "wl",
            description: "[Admin Only] Whitelist Users.",
            examples: ["!wl <add/del> <SEGA_ID>"],
			guildOnly: true,
			
			 args: [
                {
                    key: 'param',
                    label: 'param',
                    prompt: 'Type Parameter <ADD/DEL>',
                    type: 'string'
                },
				
				{
                    key: 'segaid',
                    label: 'segaid',
                    prompt: 'Type Parameter <ADD/DEL> <SEGA ID>',
                    type: 'string'
                }
            ]
        })
    }
		hasPermission(msg) {
       return msg.member.roles.has('385614315270438924');
    }
      async run(msg, args, client){
			let param = args.param;
			let segaid = args.segaid;
		
			request(`http://172.105.227.34:9999/rcon?key=dudekeparat123&command=wl&params=${encodeURIComponent(param)} ${encodeURIComponent(segaid)}`, function (error, response, body) {
             if (!error && response.statusCode == 200) {
                const response = JSON.parse(body);

                let embed = { embed: {
                    color: 8945644,
                    title: "",
                    url: "",
					footer: {
								icon_url: "https://cdn.discordapp.com/attachments/315890823621246976/349707514247512065/14021743_1265949943439339_8245104055272688311_n.jpg",
								text: "ー・完全犯罪党・ー Team Bot | PCP Network"
							},
                    fields: []
                }}

                for (const data in response) {
                    if (data == "output") {
                        embed.embed.fields.push({name: "PCP Network", value: response['output']})
                    }
                }

                return msg.reply("", embed)
            }
            else{
                console.log('idk');
            }
        })
    }
}