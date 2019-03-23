const Commando = require('discord.js-commando');
const request = require('request');

module.exports = class PSO2Commands extends Commando.Command {
    constructor(client) {
        super(client, {
            name: "fbkampus",
            group: "pso2",
            memberName: "fbkampus",
            description: "Uji Coba New Post dari Grup Facebook Atma Luhur",
            examples: ["!fbkampus"],
			guildOnly: true,
        })
    }
	hasPermission(msg) {
        return msg.member.hasPermission('MANAGE_GUILD');
    }
      async run(msg, args, client){
        request(`https://graph.facebook.com/v2.11/1894812024082234/feed?access_token=1981659328783943%7CzBC_6tUrooT6x8gM5bX82uXXf-Q&limit=5&fields=id,message,updated_time,from`, function (error, response, body) {
             if (!error && response.statusCode == 200) {
                const response = JSON.parse(body);

                let embed = { embed: {
                    color: 8945644,
                    title: "New Post by Facebook STMIK Atma Luhur Pangkalpinang",
                    url: "http://atmaluhur.ac.id",
					footer: {
								icon_url: "https://cdn.discordapp.com/attachments/315890823621246976/349707514247512065/14021743_1265949943439339_8245104055272688311_n.jpg",
								text: "ー・完全犯罪党・ー Team Bot | PCP Network"
							},
                    fields: []
                }}

                for (const data in response) {
					if (data == "data"){
					var linkid = response['data'][0].id;
					var dariid = response['data'][0]['from'].id;
					var darinama = response['data'][0]['from'].name;
					
						embed.embed.fields.push({name: "Dari", value: "["+darinama+"](http://facebook.com"+dariid+")"})
						embed.embed.fields.push({name: "Status", value: response['data'][0].message})
						embed.embed.fields.push({name: "Link Status", value: "[Tap disini](http://facebook.com/"+linkid+"/)"})
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