const Commando = require('discord.js-commando');

const fetch = require('node-fetch');



module.exports = class PSO2Commands extends Commando.Command {

    constructor(client) {

        super(client, {

            name: "daily",

            group: "pso2",

            memberName: "daily",

            description: "Looks up Current Daily Order",

            examples: ["daily"],
			
			guildOnly: true,

        })

    }



    async run(msg, args, client) {

        try {

            const data = await (await fetch('http://172.105.227.34:5000/daily/')).json();
			
            return msg.reply("", {

                embed: {

                    color: 15566666,

                    title: "",

                    url: "",
					description: "",
					footer: {
								icon_url: "https://cdn.discordapp.com/attachments/315890823621246976/349707514247512065/14021743_1265949943439339_8245104055272688311_n.jpg",
								text: "ー・完全犯罪党・ー Team Bot | PSO2 Daily Orders"
							},

                    fields: [{

                        name: "__Today's Daily Orders:__",

                        value: data.join('\n')

                    }]

                }

            })

        } catch (err) {

            console.log(err);

        }

    }

}