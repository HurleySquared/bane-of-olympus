const { Enemies } = require("../models");

const enemiesdata = [
  {
    character_name: "Hades",
    health: 100,
    damage: 0,
    image: "",
  },
  {
    character_name: "Poseidon",
    health: 100,
    damage: 0,
    image: "",
  },
  {
    character_name: "Zeus",
    health: 100,
    damage: 0,
    image: "",
  },
];

const seedEnemies = () => Enemies.bulkCreate(enemiesdata);

module.exports = seedEnemies;
