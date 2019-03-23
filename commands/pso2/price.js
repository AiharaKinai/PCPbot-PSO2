const Commando = require('discord.js-commando');
const request = require('request');

module.exports = class PSO2Commands extends Commando.Command {
    constructor(client) {
        super(client, {
            name: "price",
            group: "pso2",
            memberName: "price",
            description: "Looks up Japanese Price of items.",
            examples: ["item monomate"],
			guildOnly: true,

            args: [
                {
                    key: 'price',
                    label: 'item',
                    prompt: 'what item do you want to look up?',
                    type: 'string'
                }
            ]
        })
    }

    async run(msg, args, client){
        let item = args.price;

        request(`http://db.kakia.org/item/search?name=${encodeURIComponent(item)}`, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                let js = JSON.parse(body);

                try{
                    if (js.length > 0){
                        let embed = { embed: {
                            color: 16665157,
                            title: "",
                            url: "",
							description: "[**Here are your search results**](http://pcp-network.ml)",
							footer: {
								icon_url: "https://cdn.discordapp.com/attachments/315890823621246976/349707514247512065/14021743_1265949943439339_8245104055272688311_n.jpg",
								text: "ー・完全犯罪党・ー Team Bot | Powered by Kakia"
							},
                            fields: []
                        }}

                        js.slice(0, 1).forEach(function (item) {
								if (item['PriceInfo'].find(x => x['Ship'] === 1) && item['PriceInfo'].find(x => x['Ship'] === 2) && item['PriceInfo'].find(x => x['Ship'] === 3) && item['PriceInfo'].find(x => x['Ship'] === 4) && item['PriceInfo'].find(x => x['Ship'] === 5) && item['PriceInfo'].find(x => x['Ship'] === 6) && item['PriceInfo'].find(x => x['Ship'] === 7) && item['PriceInfo'].find(x => x['Ship'] === 8) && item['PriceInfo'].find(x => x['Ship'] === 9) && item['PriceInfo'].find(x => x['Ship'] === 10)){
                                //Success
								//embed['embed']['fields'].push({name: "Success", value: "Here are your search results"})
								//Engname
								embed['embed']['fields'].push({name: "Eng Name", value: `\`\`${item['EnName']}\`\``, inline: true})
								//JpName
								embed['embed']['fields'].push({name: "JP Name", value: `\`\`${item['JpName']}\`\``, inline: true})
								//Last Check
								embed['embed']['fields'].push({name: "Last Check", value: `${item['PriceInfo'].find(x => x['Ship'] === 1)['LastUpdated'].valueOf().replace(/\B(?=(\d{3})+(?!\d))/g, "")}`})
								//Ship01
								embed['embed']['fields'].push({name: "Ship 1", value: `${item['PriceInfo'].find(x => x['Ship'] === 1)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true})
								//Ship02
								embed['embed']['fields'].push({name: "Ship 2", value: `${item['PriceInfo'].find(x => x['Ship'] === 2)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true})
								//ship 03
								embed['embed']['fields'].push({name: "Ship 3", value: `${item['PriceInfo'].find(x => x['Ship'] === 3)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true})
								//ship 04
								embed['embed']['fields'].push({name: "Ship 4", value: `${item['PriceInfo'].find(x => x['Ship'] === 4)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true})
								//ship 05
								embed['embed']['fields'].push({name: "Ship 5", value: `${item['PriceInfo'].find(x => x['Ship'] === 5)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true})
								//ship 06
								embed['embed']['fields'].push({name: "Ship 6", value: `${item['PriceInfo'].find(x => x['Ship'] === 6)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true})
								//ship 07
								embed['embed']['fields'].push({name: "Ship 7", value: `${item['PriceInfo'].find(x => x['Ship'] === 7)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true})
								//ship 08
								embed['embed']['fields'].push({name: "Ship 8", value: `${item['PriceInfo'].find(x => x['Ship'] === 8)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true})
								//ship 09
								embed['embed']['fields'].push({name: "Ship 9", value: `${item['PriceInfo'].find(x => x['Ship'] === 9)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true})
								//ship 10
								embed['embed']['fields'].push({name: "Ship 10", value: `${item['PriceInfo'].find(x => x['Ship'] === 10)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true})
								}
								else if (item['PriceInfo'].find(x => x['Ship'] === 1) && item['PriceInfo'].find(x => x['Ship'] === 3) && item['PriceInfo'].find(x => x['Ship'] === 4) && item['PriceInfo'].find(x => x['Ship'] === 5) && item['PriceInfo'].find(x => x['Ship'] === 7) && item['PriceInfo'].find(x => x['Ship'] === 8) && item['PriceInfo'].find(x => x['Ship'] === 9) && item['PriceInfo'].find(x => x['Ship'] === 10)){
                               //Engname
								embed['embed']['fields'].push({name: "Eng Name", value: `${item['EnName']}`, inline: true})
								//JpName
								embed['embed']['fields'].push({name: "JP Name", value: `${item['JpName']}`, inline: true})
								//Last Check
								embed['embed']['fields'].push({name: "Last Check", value: `${item['PriceInfo'].find(x => x['Ship'] === 1)['LastUpdated'].valueOf().replace(/\B(?=(\d{3})+(?!\d))/g, "")}`})
								//Ship01
								embed['embed']['fields'].push({name: "Ship 1", value: `${item['PriceInfo'].find(x => x['Ship'] === 1)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true})
								//Ship02
								embed['embed']['fields'].push({name: "Ship 2", value: `Search yielded no results`, inline: true})
								//ship 03
								embed['embed']['fields'].push({name: "Ship 3", value: `${item['PriceInfo'].find(x => x['Ship'] === 3)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true})
								//ship 04
								embed['embed']['fields'].push({name: "Ship 4", value: `${item['PriceInfo'].find(x => x['Ship'] === 4)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true})
								//ship 05
								embed['embed']['fields'].push({name: "Ship 5", value: `${item['PriceInfo'].find(x => x['Ship'] === 5)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true})
								//ship 06
								embed['embed']['fields'].push({name: "Ship 6", value: `Search yielded no results`, inline: true})
								//ship 07
								embed['embed']['fields'].push({name: "Ship 7", value: `${item['PriceInfo'].find(x => x['Ship'] === 7)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true})
								//ship 08
								embed['embed']['fields'].push({name: "Ship 8", value: `${item['PriceInfo'].find(x => x['Ship'] === 8)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true})
								//ship 09
								embed['embed']['fields'].push({name: "Ship 9", value: `${item['PriceInfo'].find(x => x['Ship'] === 9)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true})
								//ship 10
								embed['embed']['fields'].push({name: "Ship 10", value: `${item['PriceInfo'].find(x => x['Ship'] === 10)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true})
								}
								else if (item['PriceInfo'].find(x => x['Ship'] === 2) && item['PriceInfo'].find(x => x['Ship'] === 3) && item['PriceInfo'].find(x => x['Ship'] === 4) && item['PriceInfo'].find(x => x['Ship'] === 5) && item['PriceInfo'].find(x => x['Ship'] === 6) && item['PriceInfo'].find(x => x['Ship'] === 7) && item['PriceInfo'].find(x => x['Ship'] === 8) && item['PriceInfo'].find(x => x['Ship'] === 9) && item['PriceInfo'].find(x => x['Ship'] === 10)){
                                //Engname
								embed['embed']['fields'].push({name: "Eng Name", value: `${item['EnName']}`, inline: true})
								//JpName
								embed['embed']['fields'].push({name: "JP Name", value: `${item['JpName']}`, inline: true})
								//Last Check
								embed['embed']['fields'].push({name: "Last Check", value: `${item['PriceInfo'].find(x => x['Ship'] === 2)['LastUpdated'].valueOf().replace(/\B(?=(\d{3})+(?!\d))/g, "")}`})
								//Ship01
								embed['embed']['fields'].push({name: "Ship 1", value: `Search yielded no results`, inline: true})
								//Ship02
								embed['embed']['fields'].push({name: "Ship 2", value: `${item['PriceInfo'].find(x => x['Ship'] === 2)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true})
								//ship 03
								embed['embed']['fields'].push({name: "Ship 3", value: `${item['PriceInfo'].find(x => x['Ship'] === 3)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true})
								//ship 04
								embed['embed']['fields'].push({name: "Ship 4", value: `${item['PriceInfo'].find(x => x['Ship'] === 4)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true})
								//ship 05
								embed['embed']['fields'].push({name: "Ship 5", value: `${item['PriceInfo'].find(x => x['Ship'] === 5)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true})
								//ship 06
								embed['embed']['fields'].push({name: "Ship 6", value: `${item['PriceInfo'].find(x => x['Ship'] === 6)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true})
								//ship 07
								embed['embed']['fields'].push({name: "Ship 7", value: `${item['PriceInfo'].find(x => x['Ship'] === 7)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true})
								//ship 08
								embed['embed']['fields'].push({name: "Ship 8", value: `${item['PriceInfo'].find(x => x['Ship'] === 8)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true})
								//ship 09
								embed['embed']['fields'].push({name: "Ship 9", value: `${item['PriceInfo'].find(x => x['Ship'] === 9)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true})
								//ship 10
								embed['embed']['fields'].push({name: "Ship 10", value: `${item['PriceInfo'].find(x => x['Ship'] === 10)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true})
								}
								else if (item['PriceInfo'].find(x => x['Ship'] === 2) && item['PriceInfo'].find(x => x['Ship'] === 3) && item['PriceInfo'].find(x => x['Ship'] === 5) && item['PriceInfo'].find(x => x['Ship'] === 6) && item['PriceInfo'].find(x => x['Ship'] === 8) && item['PriceInfo'].find(x => x['Ship'] === 9) && item['PriceInfo'].find(x => x['Ship'] === 10)){
                                //Engname
								embed['embed']['fields'].push({name: "Eng Name", value: `${item['EnName']}`, inline: true})
								//JpName
								embed['embed']['fields'].push({name: "JP Name", value: `${item['JpName']}`, inline: true})
								//Last Check
								embed['embed']['fields'].push({name: "Last Check", value: `${item['PriceInfo'].find(x => x['Ship'] === 2)['LastUpdated'].valueOf().replace(/\B(?=(\d{3})+(?!\d))/g, "")}`})
								//Ship01
								embed['embed']['fields'].push({name: "Ship 1", value: `Search yielded no results`, inline: true})
								//Ship02
								embed['embed']['fields'].push({name: "Ship 2", value: `${item['PriceInfo'].find(x => x['Ship'] === 2)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true})
								//ship 03
								embed['embed']['fields'].push({name: "Ship 3", value: `${item['PriceInfo'].find(x => x['Ship'] === 3)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true})
								//ship 04
								embed['embed']['fields'].push({name: "Ship 4", value: `Search yielded no results`, inline: true})
								//ship 05
								embed['embed']['fields'].push({name: "Ship 5", value: `${item['PriceInfo'].find(x => x['Ship'] === 5)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true})
								//ship 06
								embed['embed']['fields'].push({name: "Ship 6", value: `${item['PriceInfo'].find(x => x['Ship'] === 6)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true})
								//ship 07
								embed['embed']['fields'].push({name: "Ship 7", value: `Search yielded no results`, inline: true})
								//ship 08
								embed['embed']['fields'].push({name: "Ship 8", value: `${item['PriceInfo'].find(x => x['Ship'] === 8)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true})
								//ship 09
								embed['embed']['fields'].push({name: "Ship 9", value: `${item['PriceInfo'].find(x => x['Ship'] === 9)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true})
								//ship 10
								embed['embed']['fields'].push({name: "Ship 10", value: `${item['PriceInfo'].find(x => x['Ship'] === 10)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true})
								}
								else if (item['PriceInfo'].find(x => x['Ship'] === 1) && item['PriceInfo'].find(x => x['Ship'] === 2) && item['PriceInfo'].find(x => x['Ship'] === 3) && item['PriceInfo'].find(x => x['Ship'] === 4) && item['PriceInfo'].find(x => x['Ship'] === 6) && item['PriceInfo'].find(x => x['Ship'] === 9) && item['PriceInfo'].find(x => x['Ship'] === 10)){
                                //Engname
								embed['embed']['fields'].push({name: "Eng Name", value: `${item['EnName']}`, inline: true})
								//JpName
								embed['embed']['fields'].push({name: "JP Name", value: `${item['JpName']}`, inline: true})
								//Last Check
								embed['embed']['fields'].push({name: "Last Check", value: `${item['PriceInfo'].find(x => x['Ship'] === 1)['LastUpdated'].valueOf().replace(/\B(?=(\d{3})+(?!\d))/g, "")}`})
								//Ship01
								embed['embed']['fields'].push({name: "Ship 1", value: `${item['PriceInfo'].find(x => x['Ship'] === 1)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true})
								//Ship02
								embed['embed']['fields'].push({name: "Ship 2", value: `${item['PriceInfo'].find(x => x['Ship'] === 2)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true})
								//ship 03
								embed['embed']['fields'].push({name: "Ship 3", value: `${item['PriceInfo'].find(x => x['Ship'] === 3)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true})
								//ship 04
								embed['embed']['fields'].push({name: "Ship 4", value: `${item['PriceInfo'].find(x => x['Ship'] === 4)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true})
								//ship 05
								embed['embed']['fields'].push({name: "Ship 5", value: `Search yielded no results`, inline: true})
								//ship 06
								embed['embed']['fields'].push({name: "Ship 6", value: `${item['PriceInfo'].find(x => x['Ship'] === 6)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true})
								//ship 07
								embed['embed']['fields'].push({name: "Ship 7", value: `Search yielded no results`, inline: true})
								//ship 08
								embed['embed']['fields'].push({name: "Ship 8", value: `Search yielded no results`, inline: true})
								//ship 09
								embed['embed']['fields'].push({name: "Ship 9", value: `${item['PriceInfo'].find(x => x['Ship'] === 9)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true})
								//ship 10
								embed['embed']['fields'].push({name: "Ship 10", value: `${item['PriceInfo'].find(x => x['Ship'] === 10)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true})
								}
								else if (item['PriceInfo'].find(x => x['Ship'] === 1) && item['PriceInfo'].find(x => x['Ship'] === 2) && item['PriceInfo'].find(x => x['Ship'] === 3) && item['PriceInfo'].find(x => x['Ship'] === 4) && item['PriceInfo'].find(x => x['Ship'] === 5) && item['PriceInfo'].find(x => x['Ship'] === 6) && item['PriceInfo'].find(x => x['Ship'] === 7) && item['PriceInfo'].find(x => x['Ship'] === 8) && item['PriceInfo'].find(x => x['Ship'] === 10)){
                                //Engname
								embed['embed']['fields'].push({name: "Eng Name", value: `${item['EnName']}`, inline: true})
								//JpName
								embed['embed']['fields'].push({name: "JP Name", value: `${item['JpName']}`, inline: true})
								//Last Check
								embed['embed']['fields'].push({name: "Last Check", value: `${item['PriceInfo'].find(x => x['Ship'] === 1)['LastUpdated'].valueOf().replace(/\B(?=(\d{3})+(?!\d))/g, "")}`})
								//Ship01
								embed['embed']['fields'].push({name: "Ship 1", value: `${item['PriceInfo'].find(x => x['Ship'] === 1)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true})
								//Ship02
								embed['embed']['fields'].push({name: "Ship 2", value: `${item['PriceInfo'].find(x => x['Ship'] === 2)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true})
								//ship 03
								embed['embed']['fields'].push({name: "Ship 3", value: `${item['PriceInfo'].find(x => x['Ship'] === 3)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true})
								//ship 04
								embed['embed']['fields'].push({name: "Ship 4", value: `${item['PriceInfo'].find(x => x['Ship'] === 4)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true})
								//ship 05
								embed['embed']['fields'].push({name: "Ship 5", value: `${item['PriceInfo'].find(x => x['Ship'] === 5)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true})
								//ship 06
								embed['embed']['fields'].push({name: "Ship 6", value: `${item['PriceInfo'].find(x => x['Ship'] === 6)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true})
								//ship 07
								embed['embed']['fields'].push({name: "Ship 7", value: `${item['PriceInfo'].find(x => x['Ship'] === 7)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true})
								//ship 08
								embed['embed']['fields'].push({name: "Ship 8", value: `${item['PriceInfo'].find(x => x['Ship'] === 8)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true})
								//ship 09
								embed['embed']['fields'].push({name: "Ship 9", value: `Search yielded no results`, inline: true})
								//ship 10
								embed['embed']['fields'].push({name: "Ship 10", value: `${item['PriceInfo'].find(x => x['Ship'] === 10)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true})
								}
								else if (item['PriceInfo'].find(x => x['Ship'] === 1) && item['PriceInfo'].find(x => x['Ship'] === 2) && item['PriceInfo'].find(x => x['Ship'] === 3) && item['PriceInfo'].find(x => x['Ship'] === 4) && item['PriceInfo'].find(x => x['Ship'] === 5) && item['PriceInfo'].find(x => x['Ship'] === 6) && item['PriceInfo'].find(x => x['Ship'] === 7) && item['PriceInfo'].find(x => x['Ship'] === 8) && item['PriceInfo'].find(x => x['Ship'] === 9)){
                                //Engname
								embed['embed']['fields'].push({name: "Eng Name", value: `${item['EnName']}`, inline: true})
								//JpName
								embed['embed']['fields'].push({name: "JP Name", value: `${item['JpName']}`, inline: true})
								//Last Check
								embed['embed']['fields'].push({name: "Last Check", value: `${item['PriceInfo'].find(x => x['Ship'] === 1)['LastUpdated'].valueOf().replace(/\B(?=(\d{3})+(?!\d))/g, "")}`})
								//Ship01
								embed['embed']['fields'].push({name: "Ship 1", value: `${item['PriceInfo'].find(x => x['Ship'] === 1)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true})
								//Ship02
								embed['embed']['fields'].push({name: "Ship 2", value: `${item['PriceInfo'].find(x => x['Ship'] === 2)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true})
								//ship 03
								embed['embed']['fields'].push({name: "Ship 3", value: `${item['PriceInfo'].find(x => x['Ship'] === 3)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true})
								//ship 04
								embed['embed']['fields'].push({name: "Ship 4", value: `${item['PriceInfo'].find(x => x['Ship'] === 4)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true})
								//ship 05
								embed['embed']['fields'].push({name: "Ship 5", value: `${item['PriceInfo'].find(x => x['Ship'] === 5)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true})
								//ship 06
								embed['embed']['fields'].push({name: "Ship 6", value: `${item['PriceInfo'].find(x => x['Ship'] === 6)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true})
								//ship 07
								embed['embed']['fields'].push({name: "Ship 7", value: `${item['PriceInfo'].find(x => x['Ship'] === 7)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true})
								//ship 08
								embed['embed']['fields'].push({name: "Ship 8", value: `${item['PriceInfo'].find(x => x['Ship'] === 8)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true})
								//ship 09
								embed['embed']['fields'].push({name: "Ship 9", value: `${item['PriceInfo'].find(x => x['Ship'] === 9)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true})
								//ship 10
								embed['embed']['fields'].push({name: "Ship 10", value: `Search yielded no results`, inline: true})
								}
								else if (item['PriceInfo'].find(x => x['Ship'] === 1) && item['PriceInfo'].find(x => x['Ship'] === 2) && item['PriceInfo'].find(x => x['Ship'] === 4) && item['PriceInfo'].find(x => x['Ship'] === 5) && item['PriceInfo'].find(x => x['Ship'] === 6) && item['PriceInfo'].find(x => x['Ship'] === 7) && item['PriceInfo'].find(x => x['Ship'] === 8) && item['PriceInfo'].find(x => x['Ship'] === 10)){
                                //Success
								//embed['embed']['fields'].push({name: "Success", value: "Here are your search results"})
								//Engname
								embed['embed']['fields'].push({name: "Eng Name", value: `${item['EnName']}`, inline: true})
								//JpName
								embed['embed']['fields'].push({name: "JP Name", value: `${item['JpName']}`, inline: true})
								//Last Check
								embed['embed']['fields'].push({name: "Last Check", value: `${item['PriceInfo'].find(x => x['Ship'] === 1)['LastUpdated'].valueOf().replace(/\B(?=(\d{3})+(?!\d))/g, "")}`})
								//Ship01
								embed['embed']['fields'].push({name: "Ship 1", value: `${item['PriceInfo'].find(x => x['Ship'] === 1)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true})
								//Ship02
								embed['embed']['fields'].push({name: "Ship 2", value: `${item['PriceInfo'].find(x => x['Ship'] === 2)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true})
								//ship 03
								embed['embed']['fields'].push({name: "Ship 3", value: `Search yielded no results`, inline: true})
								//ship 04
								embed['embed']['fields'].push({name: "Ship 4", value: `${item['PriceInfo'].find(x => x['Ship'] === 4)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true})
								//ship 05
								embed['embed']['fields'].push({name: "Ship 5", value: `${item['PriceInfo'].find(x => x['Ship'] === 5)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true})
								//ship 06
								embed['embed']['fields'].push({name: "Ship 6", value: `${item['PriceInfo'].find(x => x['Ship'] === 6)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true})
								//ship 07
								embed['embed']['fields'].push({name: "Ship 7", value: `${item['PriceInfo'].find(x => x['Ship'] === 7)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true})
								//ship 08
								embed['embed']['fields'].push({name: "Ship 8", value: `${item['PriceInfo'].find(x => x['Ship'] === 8)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true})
								//ship 09
								embed['embed']['fields'].push({name: "Ship 9", value: `Search yielded no results`, inline: true})
								//ship 10
								embed['embed']['fields'].push({name: "Ship 10", value: `${item['PriceInfo'].find(x => x['Ship'] === 10)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true})
								}
								else 
								{
								embed['embed']['fields'].push({name: "ERROR 404", value: `**Sorry, Price not Found!**`})
								}
									
                        })

                        msg.reply("", embed)
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