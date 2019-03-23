const fetch = require('node-fetch');
const parser = require('rss-parser');
const fs = require('mz/fs');

const getEntry = () => {
    return new Promise((resolve, reject) => {
        parser.parseURL('http://bumped.org/psublog/feed/', (err, res) => {
            if (err) reject(err);
            if (res) {
                resolve(res.feed.entries[0]);
            } else {
                reject();
            }
        })
    })
}

const buildEmbed = (entry) => {
    let embed = {
        embed: {
            color: 14500000,
            title: entry.title,
            url: entry.link,
			footer: {
						icon_url: "https://cdn.discordapp.com/attachments/315890823621246976/349707514247512065/14021743_1265949943439339_8245104055272688311_n.jpg",
						text: "ー・完全犯罪党・ー Team Bot | Powered by Bumped.org"
					},
            fields: [{
                name: "Detail",
                value: entry.contentSnippet
            }]
        }
    }
    return embed;
}

const isAvailable = (channel, guild, client) => {
    return channel.type === "text" &&
        channel.permissionsFor(client.user).has("SEND_MESSAGES") &&
        channel.permissionsFor(client.user).has("READ_MESSAGES") &&
        guild[1].available;
}

module.exports = async (client) => {
    try {
        const entry = await getEntry();
        const cache = JSON.parse(await fs.readFile('./bumped.json'));

        if (entry.isoDate !== cache.isoDate) {
            await fs.writeFile("bumped.json", `{ "isoDate" : "${entry.isoDate}" }`);
            const guilds = client.guilds.filter(guild => { return client.provider.get(guild, "bumped") });

            for (let guild of guilds) {
                let settings = await client.provider.get(guild[1], "bumped");
                let channel = client.channels.get(settings);

                if (isAvailable(channel, guild, client)) {
                    channel.send("@everyone", buildEmbed(entry));
                }
            }
        }
    } catch (err) {
        console.error();
    }
}