const fetch = require('node-fetch');

const fs = require('mz/fs');

const moment = require('moment');

const request = require('request');



module.exports = async (client) => {

    try {

        const response = await fetch('http://172.105.227.34:5000/eq15min/');

        if (response.status !== 200) return;



        const data = await response.json();

        const cache = JSON.parse(await fs.readFile("./cache15min.json"));


        if (data[0]["time"] !== cache["time"]) {

            await fs.writeFile("cache15min.json", `{ "time" : "${data[0]["time"]}" }`);

            const guilds = client.guilds.filter(guild => { return client.provider.get(guild, "alerts15min") });

            

            for (let guild of guilds) {

                let settings = await client.provider.get(guild[1], "alerts15min");

                let eqs = data[0]["eqs"].filter(item => { return settings["ships"].includes(item["ship"]) });
				let time = moment(data[0]["when"]).add(9, 'hours');
                //let format = [];
				let embed = { embed: {
                            color: 16105082,
                            title: `Emergency Quest 【In 15 Minutes】`,
                            url: "http://pso2.jp/",
							description: "",
							footer: {
								icon_url: "https://cdn.discordapp.com/attachments/315890823621246976/349707514247512065/14021743_1265949943439339_8245104055272688311_n.jpg",
								text: "ー・完全犯罪党・ー Team Bot | Emergency Quest"
							},
                            fields: []
                        }}

                

                if (!client.channels.get(settings['channel'])) continue;

                let channel = client.channels.get(settings['channel']);

                if (eqs.length <= 0) continue;

                if (eqs.length > 0 && eqs.length !== 10) {

                    for (let eq of eqs) 
					{
							embed['embed']['fields'].push({name: `Ship ${eq['ship']}`, value:`${eq['name']}`, inline: true})
                    }
				}
				else 
				{
					 embed['embed']['fields'].push({name: "All Ships", value:`${eqs[0]['name']}`, inline: true})
				}

                //let string = `\`\`\`http\n                Emergency Quest Desu!\`\`\`\n:watch: **${time.format("HH:mm")} GMT+7** :small_blue_diamond: **On The Hour**\n${format.join('\n')}`;
				if (channel.type == "text" && channel.permissionsFor(client.user).has("SEND_MESSAGES") && channel.permissionsFor(client.user).has("READ_MESSAGES") && guild[1].available) {
                    try {
                        await client.channels.get(settings['channel']).send(embed);
                    } catch (err) {
                        continue;
                    }
                }
            }
        }
    } catch (err) {
        console.error(err);
    }
}