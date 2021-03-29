const { Characters } = require('../models');

const characterdata = [
  {
    character_name: 'Hunter',
    health: 100,
    damage: 10,
<<<<<<< HEAD
    image: '/images/hunter.jpg',
=======
    image: '../images/hunter.jpg',
>>>>>>> main
    game_id:1,
    
  },
  {
    character_name: 'Barbarian',
    health: 100,
    damage: 10,
<<<<<<< HEAD
    image: '/images/beast.jpeg',
=======
    image: '../images/beast.jpeg',
>>>>>>> main
    game_id:2,
    
  },
  {
    character_name: 'Mage',
    health: 100,
    damage: 10,
<<<<<<< HEAD
    image: '/images/mage.jpg',
=======
    image: '../images/mage.jpg',
>>>>>>> main
    game_id:3,
    
  },
];

const seedCharacters = () => Characters.bulkCreate(characterdata);

module.exports = seedCharacters;
