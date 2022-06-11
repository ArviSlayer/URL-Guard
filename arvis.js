const request = require('request');
const { Client } = require('discord.js');
const client = new Client();
const config = require("./config.json")



client.on("ready", async  => {

      let restart = client.channels.cache.get(config.urllog)

        let botVoiceChannel = client.channels.cache.get(config.voicekanal);
            if (botVoiceChannel) botVoiceChannel.join().catch(err => console.error("❌・Bot, Ses Kanalına Bağlanamadı"));
            
                    restart.send(`\`\`\`🔋・${client.user.username} Yeniden Başlatıldı \n\n 🛡️・Korunan URL: ${config.vanity}\`\`\``)
                        });

client.on('guildUpdate', async (oldGuild, newGuild) => {

    if (oldGuild.vanityURLCode === newGuild.vanityURLCode) return;
        let suclupic = await newGuild.fetchAuditLogs({
            type: 'GUILD_UPDATE'
                }).then(audit => audit.entries.first());
                    if (!suclupic.executor || suclupic.executor.id === client.user.id || !newGuild.members.cache.get(suclupic.executor.id).bannable) return;
                            let channel = client.channels.cache.get(config.urllog);
                                if (channel) channel.send(`@everyone \n ⛔・${suclupic.executor} Adlı Kişi URL'yi Değiştirmeye Çalıştığı İçin Uzaklaştırıldı \n ✅・URL \`${oldGuild.vanityURLCode}\` Haline Geri Getirildi`)

                                    if (!channel) return
                                        newGuild.members.ban(suclupic.executor.id, {
                                            reason: `😀・${suclupic.executor.tag} URL'yi Değiştirdi Ama ArviS'i Unuttu :D `
                                                });



const settings = {
    url: `https://discord.com/api/v6/guilds/${newGuild.id}/vanity-url`,
        body: { code: config.vanity },
            json: true,
                method: 'PATCH',
                    headers: { "Authorization": `Bot ${config.token}` }
                        };


request(settings, (err, res, body) => {
    if (err) {
        return console.log(err);
            }
                });
                    });


client.login(config.token)

//     vvv GLITCH İÇİN vvv     //
//client.login(process.env.TOKEN)










//Discord: ArviS#0011
//Discord Sunucum: https://discord.gg/strangerthingstr

//İnstagram: @arvis_here
