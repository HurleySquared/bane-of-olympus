const { Game } = require('../models');

const gamedata = [
  {
    level: 1,
    score: '',
    character_id: '',
    
  },
];

const seedGame = () => Game.bulkCreate(characterdata);

module.exports = seedGame;
