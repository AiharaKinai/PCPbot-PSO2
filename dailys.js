const fetch = require('node-fetch');

const fs = require('mz/fs');

const moment = require('moment');

const request = require('request');



module.exports = async (client) => {

    try {

        const response = await fetch('http://172.105.227.34:5000/daily/');

        if (response.status !== 200) return;

        const data = await (response).json();

        const cache = JSON.parse(await fs.readFile("./cachedaily.json"));

        if (data[0] !== cache['name']) {

            await fs.writeFile("cachedaily.json", `{ "name" : "${data[0]}" }`);

            const guilds = client.guilds.filter(guild => { return client.provider.get(guild, "alertsdaily") });

            for (let guild of guilds) {

                let settings = await client.provider.get(guild[1], "alertsdaily");
				let panjang = data;
                //let eqs = data[0]["eqs"].filter(item => { return settings["ships"].includes(item["ship"]) });
				//let time = moment(data[0]["when"]).add(7, 'hours');
                //let format = [];
				let embed = { embed: {
                            color: 16105082,
                            title: "",
                            url: "",
							description: "",
							footer: {
								icon_url: "https://cdn.discordapp.com/attachments/315890823621246976/349707514247512065/14021743_1265949943439339_8245104055272688311_n.jpg",
								text: "ー・完全犯罪党・ー Team Bot | PSO2 Daily Order"
							},
                            fields: []
                        }}

                

                if (!client.channels.get(settings['channel'])) continue;

                let channel = client.channels.get(settings['channel']);

                if (panjang.length < 0) continue;

                if (panjang.length > 0) {

					embed['embed']['fields'].push({name: "== Daily Order ==", value: data.join('\n'), inline: true})  
				}
				else 
				{
					 embed['embed']['fields'].push({name: "== Daily Order ==", value: data.join('\n'), inline: true})  
				}

                //let string = `\`\`\`http\n                Emergency Quest Desu!\`\`\`\n:watch: **${time.format("HH:mm")} GMT+7** :small_blue_diamond: **On The Hour**\n${format.join('\n')}`;
				if (channel.type == "text" && channel.permissionsFor(client.user).has("SEND_MESSAGES") && channel.permissionsFor(client.user).has("READ_MESSAGES") && guild[1].available) {
                    try {
                        await client.channels.get(settings['channel']).send("@everyone", embed);
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