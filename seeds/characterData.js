const { Characters } = require('../models');

const characterdata = [
  {
    character_name: 'Hunter',
    health: 100,
    damage: 10,
    image: '/images/hunter.jpg',
    game_id:1,
    
  },
  {
    character_name: 'Barbarian',
    health: 100,
    damage: 10,
    image: '/images/beast.jpeg',
    game_id:2,
    
  },
  {
    character_name: 'Mage',
    health: 100,
    damage: 10,
    image: '/images/mage.jpg',
    game_id:3,
    
  },
];

const seedCharacters = () => Characters.bulkCreate(characterdata);

module.exports = seedCharacters;
