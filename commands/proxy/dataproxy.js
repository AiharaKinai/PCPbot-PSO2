const Commando = require('discord.js-commando');
const Discord = require('discord.js')

module.exports = class PSO2Commands extends Commando.Command {
    constructor(client) {
        super(client, {
            name: "dataproxy",
            group: "proxy",
            memberName: "dataproxy",
            description: "Data Private Proxy PCP.",
			guildOnly: true,
        })
    }
	
	hasPermission(msg) {
        return msg.member.roles.has('385614315270438924');
    }

    async run(msg){
        return msg.reply("", {embed: {
            color: 56578,
            title: "=== Data Proxy ===",
            url: "http://pso2.jp",
            footer: {
				icon_url: "https://cdn.discordapp.com/attachments/315890823621246976/349707514247512065/14021743_1265949943439339_8245104055272688311_n.jpg",
				text: "ー・完全犯罪党・ー Team Bot | PCP Private Proxy"
			},
            fields: [{
                name: "Nama",
                value: "1. NoviarRS\n2. Mas Ewa\n3. Vex\n4. Dira\n5. Nanda\n6. Hydeki\n7. Yoga\n8. John\n9. Yuzuki\n10. SolidCopy\n11. Emerada\n12. HellStein\n13. CuteHime\n14. Orca\n15. BebekRush",
				inline: true
            },
			{
                name: "Expired",
                value: "20 - 02 - 2018\n20 - 02 - 2018\n20 - 02 - 2018\n20 - 02 - 2018\n20 - 02 - 2018\n20 - 02 - 2018\n20 - 02 - 2018\n31 - 12 - 2017\n20 - 02 - 2018\n20 - 02 - 2018\n20 - 02 - 2018\n31 - 01 - 2018\n02 - 10 - 2017\n20 - 02 - 2018\n20 - 02 - 2018",
				inline: true
            },
			{
				name: "NB",
				value: "``[x]`` = **Belum ada bukti Transfer**",
			},
			{
				name: "Note",
				value: "```Masa aktif server nya itu sampai akhir bulan 2, dibuat expired tgl 20 itu buat waktu extends umur server nanti, dan bagi yang belum transfer dana proxy, transfer sesuai akhir masa hidup server aja yaitu sampai bulan februari 2018. --Terimakasih.```",
			}]
        }});
    }
}