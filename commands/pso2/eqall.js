const Commando = require('discord.js-commando');
const request = require('request');

module.exports = class PSO2Commands extends Commando.Command {
    constructor(client) {
        super(client, {
            name: "eqall",
            group: "pso2",
            memberName: "eqall",
            description: "UpComing Emergency Quest.",
            examples: ["!eqall"],
			guildOnly: true,
        })
    }
   async run(msg){
        request('http://pso2emq.flyergo.eu/api/v2/', (error, response, body) => {
            if (!error && response.statusCode == 200) {
                let js = JSON.parse(body);

                try{
                    if (js.length > 0){
                        let embed = { embed: {
                            color: 2740346,
                            title: "",
                            url: "",
							footer: {
								icon_url: "https://cdn.discordapp.com/attachments/315890823621246976/349707514247512065/14021743_1265949943439339_8245104055272688311_n.jpg",
								text: "ー・完全犯罪党・ー Team Bot | Powered by PSO2 EQ Viewer"
							},
                            fields: []
                        }}

                        js.slice(0, 1).forEach(function (item) {
							//
                            if (item['jst'] != 25)
							{	
								var x = 2;
								var wib = item['jst'] - 2;
								var str = item['text'];
								var res = str.substr(33);
								
								embed['embed']['fields'].push({name: "Upcoming Emergency Quest [ JST Timezone ]", value: res})
							}
							else
							{
								var x = 2;
								var wib = item['jst'] - 2;
								var str = item.text[0];
								//var res = str.substr(15);
								if (wib === -2)
								{
									
									embed['embed']['fields'].push({name: "Upcoming Emergency Quest [ 22 GMT+7 ]", value: `${item['text']}`})
								}
								else if (wib === -1)
								{
									
									embed['embed']['fields'].push({name: "Upcoming Emergency Quest [ 23 GMT+7 ]", value: `${item['text']}`})
								}
								else
								{
									embed['embed']['fields'].push({name: "Upcoming Emergency Quest [ "+wib+" GMT+7 ]", value: `${item['text']}`})
								}
                                //embed['embed']['fields'].push({name: "[ "+wib+" GMT+7 Emergency Quest ]", value: `${item['text']}`})
                            }
								
                        })
                        msg.reply("", embed)
                    }
                    else{
                        msg.reply("ERROR!!!")
                    }
                }
                catch(err){
                    console.log(err);
                }
            }
        });
    }
}