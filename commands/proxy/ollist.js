const Commando = require('discord.js-commando');
const request = require('request');

module.exports = class PSO2Commands extends Commando.Command {
    constructor(client) {
        super(client, {
            name: "ollist",
            group: "proxy",
            memberName: "ollist",
            description: "List Connected Users PCP Network.",
            examples: ["!ollist"],
			guildOnly: true,
        })
    }
      async run(msg, args, client){
        request(`http://172.105.227.34:9999/rcon?key=dudekeparat123&command=ollist`, function (error, response, body) {
             if (!error && response.statusCode == 200) {
                const response = JSON.parse(body);
				var str = response['output'];
				var res = str.substr(0, 31);
				var res1 = str.substr(32);
				var res2 = str.substr(26, 1);

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
					if (data == "output" && res == "=== Players yang online: 0 === "){
						embed.embed.fields.push({name: ""+res+"", value: "Tidak ada player yang online"})
					}
                    else if (data == "output" && res2 == "1"){
                        embed.embed.fields.push({name: ""+res+"", value: "Someone Online as none"}) 
                    }
					else if (data == "output" && res != "=== Players yang online: 0 === "){
                        embed.embed.fields.push({name: ""+res+"", value: ""+res1+""})
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