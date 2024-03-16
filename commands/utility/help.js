const { EmbedBuilder, SlashCommandBuilder } = require('discord.js');
const { DRAGON_BALL } = require('../../data/attachments/attachments.js');

function displayHelpEmbed() {
  return new EmbedBuilder()
    .setColor(0xFFA500)
    .setTitle('Information about our bot')
    .setDescription('Welcome to our bot! Here, you can find all the information you need. Stay updated with the latest features and updates. We are constantly improving this bot to provide you with the best experience!')
    .setThumbnail('attachment://dragon_ball.png')
    .setFields(
      {
        name: 'Stats',
        value: '```/character``` ```/planet``` ```/transformation```'
      },
      {
        name: 'Utility',
        value: '```/ping``` ```/server``` ```/user``` ```/help```'
      }
    )
    .setFooter({
      text: 'Thank you for using our bot!'
    })
    .setTimestamp()
}

module.exports = {
  data: new SlashCommandBuilder()
    .setName('help')
    .setDescription('Learn information regarding this bot'),
  async execute(interaction) {
    const embed = displayHelpEmbed();

    interaction.reply({
      embeds: [embed],
      files: [DRAGON_BALL]
    });
  }
}