const { Game } = require("../models");

const gamedata = [
  {
    level: 1,
    score: 0,
    character_id: 1,
    user_id: 1,
  },
  {
    level: 2,
    score: 0,
    character_id: 2,
    user_id: 2,
  },
  {
    level: 1,
    score: 0,
    character_id: 3,
    user_id: 3,
  },
];

const seedGame = () => Game.bulkCreate(gamedata);

module.exports = seedGame;
