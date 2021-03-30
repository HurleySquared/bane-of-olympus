const { Game } = require("../models");

const gamedata = [
  {
    level: 1,
    score: 60,
    character_id: 1,
    user_id: 1,
  },
  {
    level: 2,
    score: 120,
    character_id: 2,
    user_id: 2,
  },
  {
    level: 1,
    score: 200,
    character_id: 3,
    user_id: 3,
  },
  {
    level: 2,
    score: 210,
    character_id: 4,
    user_id: 4,
  },
  {
    level: 1,
    score: 170,
    character_id: 5,
    user_id: 5,
  },
  {
    level: 2,
    score: 50,
    character_id: 6,
    user_id: 6,
  }
];

const seedGame = () => Game.bulkCreate(gamedata);

module.exports = seedGame;
