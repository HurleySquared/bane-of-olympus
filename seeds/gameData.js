const { Game } = require("../models");

const gamedata = [
  {
    level: 1,
    score: 0,
    character_id: 1,
    user_id: 1,
  },
];

const seedGame = () => Game.bulkCreate(gamedata);

module.exports = seedGame;
