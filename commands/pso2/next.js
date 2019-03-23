const Commando = require('discord.js-commando');
const request = require('request');

module.exports = class PSO2Commands extends Commando.Command {
    constructor(client) {
        super(client, {
            name: "next",
            group: "pso2",
            memberName: "next",
            description: "Looks up More Japanese name of items.",
            examples: ["!next <page number> <item name>"],
			guildOnly: true,

            args: [
                {
                    key: 'page',
                    label: 'page',
                    prompt: 'Type the page number? [The Page Limit is ``10``]',
                    type: 'integer'
                },
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
		let page = args.page;

        request(`http://db.kakia.org/item/search?name=${encodeURIComponent(item)}`, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                let js = JSON.parse(body);

                try{
                    if (page == 1){
						let format = [];
                        js.slice(41, 80).forEach(function (item) {
                            if (item['PriceInfo'].length > 0){
								format.push(`\`\`${item['EnName']}\`\` || **${item['JpName']}**`);
                            }
                        })
						
                        msg.reply(`\n${format.join('\n')}`)
                    }
					else if (page == 2){
						let format = [];
                        js.slice(81, 120).forEach(function (item) {
                            if (item['PriceInfo'].length > 0){
								format.push(`\`\`${item['EnName']}\`\` || **${item['JpName']}**`);
                            }
                        })
						
                        msg.reply(`\n${format.join('\n')}`)
                    }
					else if (page == 3){
						let format = [];
                        js.slice(121, 160).forEach(function (item) {
                            if (item['PriceInfo'].length > 0){
								format.push(`\`\`${item['EnName']}\`\` || **${item['JpName']}**`);
                            }
                        })
						
                        msg.reply(`\n${format.join('\n')}`)
                    }
					else if (page == 4){
						let format = [];
                        js.slice(161, 200).forEach(function (item) {
                            if (item['PriceInfo'].length > 0){
								format.push(`\`\`${item['EnName']}\`\` || **${item['JpName']}**`);
                            }
                        })
						
                        msg.reply(`\n${format.join('\n')}`)
                    }
					else if (page == 5){
						let format = [];
                        js.slice(201, 240).forEach(function (item) {
                            if (item['PriceInfo'].length > 0){
								format.push(`\`\`${item['EnName']}\`\` || **${item['JpName']}**`);
                            }
                        })
						
                        msg.reply(`\n${format.join('\n')}`)
                    }
					else if (page == 6){
						let format = [];
                        js.slice(241, 280).forEach(function (item) {
                            if (item['PriceInfo'].length > 0){
								format.push(`\`\`${item['EnName']}\`\` || **${item['JpName']}**`);
                            }
                        })
						
                        msg.reply(`\n${format.join('\n')}`)
                    }
					else if (page == 7){
						let format = [];
                        js.slice(281, 320).forEach(function (item) {
                            if (item['PriceInfo'].length > 0){
								format.push(`\`\`${item['EnName']}\`\` || **${item['JpName']}**`);
                            }
                        })
						
                        msg.reply(`\n${format.join('\n')}`)
                    }
					else if (page == 8){
						let format = [];
                        js.slice(321, 360).forEach(function (item) {
                            if (item['PriceInfo'].length > 0){
								format.push(`\`\`${item['EnName']}\`\` || **${item['JpName']}**`);
                            }
                        })
						
                        msg.reply(`\n${format.join('\n')}`)
                    }
					else if (page == 9){
						let format = [];
                        js.slice(361, 400).forEach(function (item) {
                            if (item['PriceInfo'].length > 0){
								format.push(`\`\`${item['EnName']}\`\` || **${item['JpName']}**`);
                            }
                        })
						
                        msg.reply(`\n${format.join('\n')}`)
                    }
					else if (page == 10){
						let format = [];
                        js.slice(401, 440).forEach(function (item) {
                            if (item['PriceInfo'].length > 0){
								format.push(`\`\`${item['EnName']}\`\` || **${item['JpName']}**`);
                            }
                        })
						
                        msg.reply(`\n${format.join('\n')}`)
                    }
                    else{
                        msg.reply("Sorry, The page limit is ``10``")
                    }
                }
                catch(err){
                    console.log(err);
                }
            }
        });
    }
}