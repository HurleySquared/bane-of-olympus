const { Characters } = require('../models');

const characterdata = [
  {
    character_name: 'Hunter',
    health: 100,
    damage: 0,
    image: ''
    
  },
  {
    character_name: 'Barbarian',
    health: 100,
    damage: 0,
    image: ''
    
  },
  {
    character_name: 'Mage',
    health: 100,
    damage: 0,
    image: ''
    
  },
];

const seedCharacters = () => Characters.bulkCreate(characterdata);

module.exports = seedCharacters;
