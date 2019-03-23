const Commando = require('discord.js-commando');
const request = require('request');

module.exports = class PSO2Commands extends Commando.Command {
    constructor(client) {
        super(client, {
            name: "mpatch",
            group: "pso2",
            memberName: "mpatch",
            description: "List the last 3 manual patch PSO2",
            examples: ["!mpatch"],
			guildOnly: true,
        })
    }

    async run(msg){

        request(`https://www.googleapis.com/drive/v2/files?q=%271Rld9HzuwujGRQcoBRCzeUwr4boAOv0kr%27+in+parents&key=AIzaSyDRULdU_eQN14LUPusWOfO8-9eAx9ex4bo`, function (error, response, body) {
             if (!error && response.statusCode == 200) {
                const response = JSON.parse(body);
				
                let embed = { embed: {
                    color: 15530513,
                    title: "Manual Patch PSO2",
					description: "",
                    url: "",
					footer: {
								icon_url: "https://cdn.discordapp.com/attachments/315890823621246976/349707514247512065/14021743_1265949943439339_8245104055272688311_n.jpg",
								text: "ー・完全犯罪党・ー Team Bot | PCP Network"
							},
                    fields: []
                }}
                for (const items in response) {
					if (items == "items"){
						var x = 1000000;
						var u = 1000;
						//patch 1
						var linkdl = response['items'][0]['webContentLink'];
						var nama = response['items'][0]['title'];
						var waktu = response['items'][0]['createdDate'];
						var tanggal = waktu.substr(8,2);
						var bulan = waktu.substr(5,2);
						var tahun = waktu.substr(0,4);
						var y = response['items'][0]['fileSize'];
						var size = y / x;
						var sizegb = size / u;
						//patch 2
						var linkdl1 = response['items'][1]['webContentLink'];
						var nama1 = response['items'][1]['title'];
						var waktu1 = response['items'][1]['createdDate'];
						var tanggal1 = waktu1.substr(8,2);
						var bulan1 = waktu1.substr(5,2);
						var tahun1 = waktu1.substr(0,4);
						var y1 = response['items'][1]['fileSize'];
						var size1 = y1 / x;
						var sizegb1 = size1 / u;
						//patch 3
						var linkdl2 = response['items'][2]['webContentLink'];
						var nama2 = response['items'][2]['title'];
						var waktu2 = response['items'][2]['createdDate'];
						var tanggal2 = waktu2.substr(8,2);
						var bulan2 = waktu2.substr(5,2);
						var tahun2 = waktu2.substr(0,4);
						var y2 = response['items'][2]['fileSize'];
						var size2 = y2 / x;
						var sizegb2 = size2 / u;
						
						embed.embed.fields.push({name: "Update Date", value: ""+tanggal+"-"+bulan+"-"+tahun+"", inline: true})
						embed.embed.fields.push({name: "File Name", value: "["+nama+"]"+"("+linkdl+")", inline: true})
						if (size < 1000)
							{
							embed.embed.fields.push({name: "File Size", value: ""+Math.round(size)+" MB", inline: true})
							}
							else
							{
							embed.embed.fields.push({name: "File Size", value: ""+sizegb.toFixed(1)+" GB", inline: true})	
							}
						embed.embed.fields.push({name: "Update Date", value: ""+tanggal1+"-"+bulan1+"-"+tahun1+"", inline: true})
						embed.embed.fields.push({name: "File Name", value: "["+nama1+"]"+"("+linkdl1+")", inline: true})
						if (size1 < 1000)
							{
							embed.embed.fields.push({name: "File Size", value: ""+Math.round(size1)+" MB", inline: true})
							}
							else
							{
							embed.embed.fields.push({name: "File Size", value: ""+sizegb1.toFixed(1)+" GB", inline: true})	
							}
						embed.embed.fields.push({name: "Update Date", value: ""+tanggal2+"-"+bulan2+"-"+tahun2+"", inline: true})
						embed.embed.fields.push({name: "File Name", value: "["+nama2+"]"+"("+linkdl2+")", inline: true})
						if (size2 < 1000)
							{
							embed.embed.fields.push({name: "File Size", value: ""+Math.round(size2)+" MB", inline: true})
							}
							else
							{
							embed.embed.fields.push({name: "File Size", value: ""+sizegb2.toFixed(1)+" GB", inline: true})	
							}
						embed.embed.fields.push({name: "How to Use Mpatch", value: "1). Extract the file to ``PSO2_BIN``.\n2). Replace all files.\n3). Open The Tweaker, ``if theres is request update`` **SELECT** ``NO``.\n4). Click Button ``Tweaker Setting`` on tweaker, then click button ``PSO2 Version``.\n5). Click Button ``return`` and ``START GAME``."})
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