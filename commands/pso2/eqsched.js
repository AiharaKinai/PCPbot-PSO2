const Commando = require('discord.js-commando');
const request = require('request');

module.exports = class PSO2Commands extends Commando.Command {
    constructor(client) {
        super(client, {
            name: "eqsched",
            group: "pso2",
            memberName: "eqsched",
            description: "Display Emergency Quest By Date ",
            examples: ["!eqsched <tanggal> <bulan> <tahun>"],
			guildOnly: true,

            args: [
                {
                    key: 'tgl',
                    label: 'tanggal',
                    prompt: 'Want to see the EQ schedule on what date?`` Format : A two-digit number, example : 02``',
                    type: 'integer'
                },
				{
                    key: 'bln',
                    label: 'bulan',
                    prompt: 'Want to see the EQ schedule on what month?`` Format : A two-digit number, example : 05``',
                    type: 'integer'
                },
				{
                    key: 'thn',
                    label: 'tahun',
                    prompt: 'Want to see the EQ schedule on what year?? ``Format : A Four-digit number, example : 2018``',
                    type: 'integer'
                }
            ]
        })
    }

    async run(msg, args, client){
        let tgl = args.tgl;
		let bln = args.bln;
		let thn = args.thn;

        request(`https://www.googleapis.com/calendar/v3/calendars/pso2emgquest@gmail.com/events?orderBy=updated&timeMin=${encodeURIComponent(thn)}-${encodeURIComponent(bln)}-${encodeURIComponent(tgl)}T01:00:00.000Z&maxResults=2500&showDeleted=false&timeZone=Asia/Bangkok&pageToken=CigKGjFubTVuYm5ia3ZxdHFuMmttanI2N2phMXNvGAEggIDAwduJ0c4V&key=AIzaSyDRULdU_eQN14LUPusWOfO8-9eAx9ex4bo`, function (error, response, body) {
             if (!error && response.statusCode == 200) {
				 let js = JSON.parse(body);
				 var response = js['items'];
				 
                try{
                    if (response.length > 0){
						let embed = { embed: {
						color: 11771402,
						title: "PSO2 Emergency Quest Schedule",
						url: "",
						footer: {
								icon_url: "https://cdn.discordapp.com/attachments/315890823621246976/349707514247512065/14021743_1265949943439339_8245104055272688311_n.jpg",
								text: "ー・完全犯罪党・ー Team Bot | PCP Network"
								},
						fields: []
					}}
				 response.slice(0, 8).forEach(function (item) {
					 if (item['status'] == "confirmed")
					 {
						var waktu = item['start']['dateTime'];
						var tanggal = waktu.substr(8,2);
						var bulan = waktu.substr(5,2);
						var tahun = waktu.substr(0,4);
						var ywaktu = waktu.substr(11,5);
						
						embed.embed.fields.push({name: "Date", value: ""+tanggal+"-"+bulan+"-"+tahun+"", inline: true})
						embed.embed.fields.push({name: "EQ Name", value: `${item['summary']}`, inline: true})
						embed.embed.fields.push({name: "Start Time", value: ""+ywaktu+" GMT+7", inline: true})
						}
						else
						{
							embed.embed.fields.push({name: "WARNING", value: "Emergency Quest Schedule is not yet available for this date", inline: true})
						}
					})
						msg.reply("", embed)
                    }
                    else{
                        msg.reply("Emergency Quest Schedule is not yet available for this date")
                    }
                }
                catch(err){
                    console.log(err);
                }
            }
        });
    }
}