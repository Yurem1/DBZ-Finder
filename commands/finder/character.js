const {
  SlashCommandBuilder,
  EmbedBuilder,
  AttachmentBuilder
} = require('discord.js');

const { fetchCharacter } = require('../../data/api/fetch.js');
const { displayError } = require('../../data/attachments/embeds.js');
const { DRAGON_BALL, KRILLIN } = require('../../data/attachments/attachments.js');

function displayPlanetEmbed(_obj) {
  return new EmbedBuilder()
    .setColor(0xFFFF00)
    .setTitle(_obj.name)
    .setThumbnail('attachment://dragon_ball.png')
    .setImage(_obj.image)
    .addFields(
      { name: 'Race', value: _obj.race, inline: true },
      { name: 'Gender', value: _obj.gender, inline: true },
      { name: '\t', value: '\t' },
      { name: 'Ki', value: _obj.ki, inline: true },
      { name: 'Max Ki', value: _obj.maxKi, inline: true },
      { name: '\t', value: '\t' },
      { name: 'Affiliation', value: _obj.affiliation, inline: false },
    )
    .setTimestamp()
    .setFooter({
      text: `ID: ${_obj.id}`
    });
}

module.exports = {
  data: new SlashCommandBuilder()
    .setName('character')
    .setDescription('Learn more about your favorite\'s dragon ball character')
    .addStringOption((option) => {
      return option
        .setName('name')
        .setDescription('Character you wanna search for')
        .setRequired(true);
    }),
  async execute(interaction) {
    const value = interaction.options.getString('name');
    const request = await fetchCharacter(value);

    console.log(JSON.stringify(request))
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
      embeds: [embed],
      files: [DRAGON_BALL]
    });
  }
}