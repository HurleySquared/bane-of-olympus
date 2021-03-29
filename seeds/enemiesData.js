const { Enemies } = require("../models");

const enemiesdata = [
  {
    character_name: "Hades",
    health: 100,
    damage: 20,
    image: "/images/Hades.jpg",
  },
  {
    character_name: "Poseidon",
    health: 200,
    damage: 10,
    image: "/images/poseidon.jpg",
  },
  {
    character_name: "Zeus",
    health: 150,
    damage: 15,
    image: "/images/Zeus.jpg",
  },
];

const seedEnemies = () => Enemies.bulkCreate(enemiesdata);

module.exports = seedEnemies;
