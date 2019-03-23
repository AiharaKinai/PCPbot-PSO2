const Commando = require('discord.js-commando');
const request = require('request');

module.exports = class GeneralCommands extends Commando.Command {
    constructor(client) {
        super(client, {
            name: "define",
            group: "general",
            memberName: "define",
            description: "Definition",
            examples: ["Define LOVE"],
			guildOnly: true,

            args: [
                {
                    key: 'kata',
                    label: 'kata',
                    prompt: 'Type ur Text to Definition?',
                    type: 'string'
                }
            ]
        })
    }
    async run(msg, args, client){
        let kata = args.kata;

        request(`http://api.urbandictionary.com/v0/define?term=${encodeURIComponent(kata)}`, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                 const response = JSON.parse(body);

				 let embed = { embed: {
                    color: 12345678,
                    title: "",
                    url: "",
					footer: {
								icon_url: "https://cdn.discordapp.com/attachments/315890823621246976/349707514247512065/14021743_1265949943439339_8245104055272688311_n.jpg",
								text: "ー・完全犯罪党・ー Team Bot | Powered by Urban Dictionary"
							},
                    fields: []
                }}

                for (const data in response) {
					if (data == "result_type" && response['result_type'] == "exact") {
                        embed.embed.fields.push({name: "Definition", value: response['list'][0].definition})
						embed.embed.fields.push({name: "Example", value: response['list'][0].example})
					}
					else if (data == "result_type" && response['result_type'] == "no_results") {
                        embed.embed.fields.push({name: "Definition", value: "Search yielded no results"})
						embed.embed.fields.push({name: "Example", value: "Search yielded no results"})
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