const { Game } = require("../models");

const gamedata = [
  {
    level: 1,
    score: "",
    character_id: "",
    user_id: 1,
  },
];

const seedGame = () => Game.bulkCreate(gamedata);

module.exports = seedGame;
