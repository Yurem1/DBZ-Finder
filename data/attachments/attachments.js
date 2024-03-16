const { AttachmentBuilder } = require('discord.js');

const DRAGON_BALL = new AttachmentBuilder('public/dragon_ball.png');
const KRILLIN = new AttachmentBuilder('public/krillin.png');

module.exports = {
  DRAGON_BALL: DRAGON_BALL,
  KRILLIN: KRILLIN  
}