const {
  SlashCommandBuilder,
  AttachmentBuilder,
  EmbedBuilder
} = require('discord.js');

const { KRILLIN } = require('../../data/attachments/attachments.js');
const { fetchPlanet } = require('../../data/api/fetch.js');
const { displayError } = require('../../data/attachments/embeds.js');

function displayPlanetEmbed(_obj) {
  return new EmbedBuilder()
    .setColor(0x00FF00)
    .setTitle(_obj.name)
    .setImage(_obj.image)
    .setFooter({
      text: `ID: ${_obj.id}`
    })
    .setTimestamp()
}

module.exports = {
  data: new SlashCommandBuilder()
    .setName('planet')
    .setDescription('Learn more about a planet from the dragon ball universe!')
    .addStringOption((option) => {
      return option
        .setName('name')
        .setDescription('The planet you\'re searching for')
        .setRequired(true);
    }),
  async execute(interaction) {
    const value = interaction.options.getString('name');
    const request = await fetchPlanet(value);

    if (!!request[0] === false) {
      const embed = displayError('Character not found, maybe you spelled it wrong?')

      await interaction.reply({
        embeds: [embed],
        files: [KRILLIN]
      });

      return;
    }

    const embed = displayPlanetEmbed(request[0]);

    await interaction.reply({
      embeds: [embed]
    });
  }
}