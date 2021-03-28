const { Enemies } = require("../models");

const enemiesdata = [
  {
    character_name: "Hades",
    health: 100,
    damage: 20,
    image: "",
  },
  {
    character_name: "Poseidon",
    health: 200,
    damage: 10,
    image: "",
  },
  {
    character_name: "Zeus",
    health: 150,
    damage: 15,
    image: "",
  },
];

const seedEnemies = () => Enemies.bulkCreate(enemiesdata);

module.exports = seedEnemies;
