const { Characters } = require('../models');

const characterdata = [
  {
    character_name: 'Hunter',
    health: 100,
    damage: 0,
    image: '',
    game_id:1,
    
  },
  {
    character_name: 'Barbarian',
    health: 100,
    damage: 0,
    image: '',
    game_id:2,
    
  },
  {
    character_name: 'Mage',
    health: 100,
    damage: 0,
    image: '',
    game_id:3,
    
  },
];

const seedCharacters = () => Characters.bulkCreate(characterdata);

module.exports = seedCharacters;
