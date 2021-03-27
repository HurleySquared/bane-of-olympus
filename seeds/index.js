const sequelize = require("../config/connection");
const seedCharacters = require("./characterData");
const seedGame = require("./gameData");
const seedUser = require("./userData");
const seedEnemies = require("./enemiesData");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();
  
  await seedGame();
  
  await seedCharacters();

  await seedEnemies();

  process.exit(0);
};

seedAll();
