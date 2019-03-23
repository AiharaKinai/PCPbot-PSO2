const Commando = require('discord.js-commando');
const request = require('request');

module.exports = class PSO2Commands extends Commando.Command {
    constructor(client) {
        super(client, {
            name: "oldata",
            group: "proxy",
            memberName: "oldata",
            description: "[Admin Only] Detail Ollist",
            examples: ["!clients"],
			guildOnly: true,
        })
    }
	 hasPermission(msg) {
        return msg.member.hasPermission('MANAGE_GUILD');
    }
      async run(msg, args, client){
        request(`http://172.105.227.34:9999/rcon?key=dudekeparat123&command=oldata`, function (error, response, body) {
             if (!error && response.statusCode == 200) {
                const response = JSON.parse(body);
				let format = [];
                for (const data in response) {
                    if (data == "output") {
                        format.push(response['output']);
                    }
                }

                return msg.reply(`\n${format.join()}`)
            }
            else{
                console.log('idk');
            }
        })
    }
}