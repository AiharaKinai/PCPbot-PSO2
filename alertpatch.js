const fetch = require('node-fetch');

const fs = require('mz/fs');

const moment = require('moment');

const request = require('request');



module.exports = async (client) => {

    try {

        const response = await fetch('https://www.googleapis.com/drive/v2/files?q=%271Rld9HzuwujGRQcoBRCzeUwr4boAOv0kr%27+in+parents&key=AIzaSyDRULdU_eQN14LUPusWOfO8-9eAx9ex4bo');

        if (response.status !== 200) return;



        const data = await response.json();

        const cache = JSON.parse(await fs.readFile("./cachepatch.json"));



        if (data["items"][0]["createdDate"] !== cache["time"]) {

            await fs.writeFile("cachepatch.json", `{ "time" : "${data["items"][0]["createdDate"]}" }`);

            const guilds = client.guilds.filter(guild => { return client.provider.get(guild, "alertspatch") });

            

            for (let guild of guilds) {

                let settings = await client.provider.get(guild[1], "alertspatch");
				let cache1 = JSON.parse(await fs.readFile("./cachepatch.json"));
				let panjang = data["items"];
				let embed = { embed: {
                            color: 16105082,
                            title: "Latest Patch PSO2",
                            url: "http://pso2.jp/",
							description: "",
							footer: {
								icon_url: "https://cdn.discordapp.com/attachments/315890823621246976/349707514247512065/14021743_1265949943439339_8245104055272688311_n.jpg",
								text: "ー・完全犯罪党・ー Team Bot | PCP Reminder"
							},
                            fields: []
                        }}

                

                if (!client.channels.get(settings['channel'])) continue;

                let channel = client.channels.get(settings['channel']);

                if (panjang.length <= 0) continue;

                if (panjang.length >= 0) 
				{
					var linkdl = data['items'][0]['webContentLink'];
					var nama = data['items'][0]['title'];
					var waktu = data['items'][0]['createdDate'];
					var tanggal = waktu.substr(8,2);
					var bulan = waktu.substr(5,2);
					var tahun = waktu.substr(0,4);
					var y = data['items'][0]['fileSize'];
					var x = 1000000;
					var u = 1000;
					var size = y / x;
					var sizegb = size / u;
					
						embed['embed']['fields'].push({name: "Update Date", value: ""+tanggal+"-"+bulan+"-"+tahun+"", inline: true})
						embed['embed']['fields'].push({name: "File Name", value: "["+nama+"]"+"("+linkdl+")", inline: true})
						if (size < 1000)
						{
							embed['embed']['fields'].push({name: "File Size", value: ""+Math.round(size)+" MB", inline: true})
						}
						else
						{
							embed['embed']['fields'].push({name: "File Size", value: ""+sizegb.toFixed(1)+" GB", inline: true})
						}
						embed['embed']['fields'].push({name: "How to Use Mpatch", value: "1). Extract the file to ``PSO2_BIN``.\n2). Replace all files.\n3). Open The Tweaker, ``if theres is request update`` **SELECT** ``NO``.\n4). Click Button ``Tweaker Setting`` on tweaker, then click button ``PSO2 Version``.\n5). Click Button ``return`` and ``START GAME``."})
					}
					else 
					{
					 embed['embed']['fields'].push({name: "== Reminder ==", value:"ERROR!", inline: true})
					}

                //let string = `\`\`\`http\n                Emergency Quest Desu!\`\`\`\n:watch: **${time.format("HH:mm")} GMT+7** :small_blue_diamond: **On The Hour**\n${format.join('\n')}`;
				if (channel.type == "text" && channel.permissionsFor(client.user).has("SEND_MESSAGES") && channel.permissionsFor(client.user).has("READ_MESSAGES") && guild[1].available) {
                    try {
                        await client.channels.get(settings['channel']).send("@everyone, The Latest Manual patch is ``available``", embed);
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