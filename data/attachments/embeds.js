const { EmbedBuilder } = require('discord.js');

function displayError(_msg) {
  return new EmbedBuilder()
    .setColor(0xFF0000)
    .setTitle('An error has occured :(')
    .setDescription(_msg)
    .setThumbnail('attachment://krillin.png')
}

module.exports = {
  displayError: displayError
}