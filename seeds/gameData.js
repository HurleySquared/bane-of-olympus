const { Game } = require("../models");

const gamedata = [
  {
    level: 1,
    score: "",
    character_id: "",
    user_id: 1,
  },
  {
    level: 2,
    score: "",
    character_id: "",
    user_id: 2,
  },
  {
    level: 1,
    score: "",
    character_id: "",
    user_id: 3,
  },
];

const seedGame = () => Game.bulkCreate(gamedata);

module.exports = seedGame;
