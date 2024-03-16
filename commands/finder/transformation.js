const {
  SlashCommandBuilder,
  AttachmentBuilder,
  EmbedBuilder
} = require('discord.js');

const { DRAGON_BALL, KRILLIN } = require('../../data/attachments/attachments.js');
const { fetchTransformation } = require('../../data/api/fetch.js');
const { displayError } = require('../../data/attachments/embeds.js');

function displayTransformationEmbed(_obj) {
  return new EmbedBuilder()
    .setColor(0x0000FF)
    .setTitle(_obj.name)
    .setThumbnail('attachment://dragon_ball.png')
    .setImage(_obj.image)
    .setFields(
      { name: 'Ki: ', value: _obj.ki }
    )
    .setFooter({
      text: `ID: ${_obj.id}`
    })
    .setTimestamp()
}

module.exports = {
  data: new SlashCommandBuilder()
    .setName('transformation')
    .setDescription('Learn more about the transformation from your favorite character!')
    .addStringOption((option) => {
      return option
        .setName('name')
        .setDescription('The transformation you\'re searching for')
        .setRequired(true);
    }),
  async execute(interaction) {
    const value = interaction.options.getString('name');
    const request = await fetchTransformation(value);

    if (!!request[0] === false) {
      const embed = displayError('Character not found, maybe you spelled it wrong?')

      await interaction.reply({
        embeds: [embed],
        files: [KRILLIN]
      });

      return;
    }

    const embed = displayTransformationEmbed(request[0]);

    await interaction.reply({
      embeds: [embed],
      files: [DRAGON_BALL]
    });
  }
}