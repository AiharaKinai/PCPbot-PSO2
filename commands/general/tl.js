const Commando = require('discord.js-commando');
const request = require('request');

module.exports = class GeneralCommands extends Commando.Command {
    constructor(client) {
        super(client, {
            name: "tl",
            group: "general",
            memberName: "tl",
            description: "Translator",
            examples: ["tl id en aku cinta kamu"],
			guildOnly: true,

            args: [
                {
                    key: 'dari',
                    label: 'dari',
                    prompt: 'From?(ex: id)',
                    type: 'string'
                },
				{
                    key: 'ke',
                    label: 'ke',
                    prompt: 'To?(ex: en)',
                    type: 'string'
                },
				{
                    key: 'kata',
                    label: 'kata',
                    prompt: 'Type ur Text',
                    type: 'string'
                }
            ]
        })
    }
    async run(msg, args, client){
        let dari = args.dari;
		let ke = args.ke;
		let kata = args.kata;

        request(`https://translate.yandex.net/api/v1.5/tr.json/translate?lang=${encodeURIComponent(dari)}-${encodeURIComponent(ke)}&key=trnsl.1.1.20170908T211240Z.6b663c5d9cb929cf.ae0d1ce7a0c1e0ba704b79eec80d75e6858f41b6&Content-Type=application/x-www-form-urlencoded&text=${encodeURIComponent(kata)}`, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                 const response = JSON.parse(body);

                let embed = { embed: {
                    color: 12345678,
                    title: "",
                    url: "",
					footer: {
								icon_url: "https://cdn.discordapp.com/attachments/315890823621246976/349707514247512065/14021743_1265949943439339_8245104055272688311_n.jpg",
								text: "ー・完全犯罪党・ー Team Bot | Powered by Yandex.Translate"
							},
                    fields: []
                }}

                for (const data in response) {
                    if (data == "text") {
                        embed.embed.fields.push({name: "Translate Result", value: response['text'][0]})
                    }
					else if (data == "message") {
						embed.embed.fields.push({name: "ERROR", value: "The specified translation direction is not supported"})
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