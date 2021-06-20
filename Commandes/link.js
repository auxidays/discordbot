const Discord = require('discord.js');
const config = require('./config.json');
module.exports.run = async(client, message, args) => {
message.delete()

const cmdEmbed = new Discord.MessageEmbed()
	.setColor(config.color)
	.setTitle('🔗・Voici les liens me concernant.')
	.setURL('https://www.youtube.com/channel/UCoNjnD5b_1V5lyDhtNblEAg')
	.setAuthor(config.Speudo, config.Image, 'https://www.youtube.com/channel/UCoNjnD5b_1V5lyDhtNblEAg')
	.setThumbnail(config.Image)
	.addFields(
    { name: 'Youtube', value: config.Youtube },
    { name: 'Twitch', value: config.Twitch },
    { name: 'Twitter', value: config.Twitter },
    { name: 'Tiktok', value: config.Tiktok },
    { name: 'Insta', value: config.Insta },
    )
	
	.setTimestamp()
	.setFooter(config.Speudo, config.Image);

  message.channel.send(cmdEmbed);
}
module.exports.help = {
  name:"liens"
}