const Commando = require('discord.js-commando');
const request = require('request');

module.exports = class PSO2Commands extends Commando.Command {
    constructor(client) {
        super(client, {
            name: "item",
            group: "pso2",
            memberName: "item",
            description: "Looks up Japanese name of items.",
            examples: ["item monomate"],
			guildOnly: true,

            args: [
                {
                    key: 'item',
                    label: 'item',
                    prompt: 'what item do you want to look up?',
                    type: 'string'
                }
            ]
        })
    }
    async run(msg, args, client){
        let item = args.item;

        request(`http://db.kakia.org/item/search?name=${encodeURIComponent(item)}`, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                let js = JSON.parse(body);

                try{
                    if (js.length > 0){
						let format = [];
                        //let embed = { embed: {
                          //  color: 3447003,
                         //   title: "",
                         //   url: "",
						//	description: "[**Here are your search results**](http://pcp-network.ml)",
						//	footer: {
								icon_url: "https://cdn.discordapp.com/attachments/315890823621246976/349707514247512065/14021743_1265949943439339_8245104055272688311_n.jpg",
						//		text: "ー・完全犯罪党・ー Team Bot | Powered by Kakia"
						//	},
                        //    fields: []
                       // }}
						
                        js.slice(0, 40).forEach(function (item) {
                            if (item['PriceInfo'].length > 0){
                                //embed['embed']['fields'].push({name: item['EnName'], value: `JP Name: \`\`${item['JpName']}\`\``, inline: true})
								format.push(`\`\`${item['EnName']}\`\` || **${item['JpName']}**`);
                            }
                        })
						
                        msg.reply(`\n${format.join('\n')}`)
                    }
                    else{
                        msg.reply("Look's like you put wrong item name, please wash your eyes first~")
                    }
                }
                catch(err){
                    console.log(err);
                }
            }
        });
    }
}