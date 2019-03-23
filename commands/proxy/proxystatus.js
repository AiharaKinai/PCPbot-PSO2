const Commando = require('discord.js-commando');
const Discord = require('discord.js');
const request = require('request');

module.exports = class PSO2Commands extends Commando.Command {
    constructor(client) {
        super(client, {
            name: "proxystatus",
            group: "proxy",
            memberName: "proxystatus",
            description: "Proxy server status.",
			guildOnly: true,
        })
    }

    async run(msg){
        request('http://172.105.227.34:9999/config.json/', (error, response, body) => {
            if (!error && response.statusCode == 200) {
                const response = JSON.parse(body);

                let embed = { embed: {
                    color: 8945644,
                    title: `PCP Network`,
                    url: "http://172.105.227.34:9999/config.json/",
                    thumbnail: {
                        url: "https://cdn.discordapp.com/attachments/315890823621246976/349707514247512065/14021743_1265949943439339_8245104055272688311_n.jpg"
                    },
                    fields: []
                }}

                for (const proxy in response) {
                    if (proxy == "host") {
                        embed.embed.fields.push({name: "Proxy Status", value: "*Online* Bosque", inline: true})
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