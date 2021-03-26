const sequelize = require("../config/connections");
const seedCharacters = require("./characterData");
const seedGame = require("./gameData");
const seedUser = require("./userData");
const seedEnemies = require("./enemiesData");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedCharacters();

  await seedGame();

  await seedUser();

  await seedEnemies();

  process.exit(0);
};

seedAll();
