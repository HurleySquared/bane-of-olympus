const Characters = require("./Characters");
const Enemies = require("./Enemies");
const Game = require("./Game");
const User = require("./Users");

User.hasMany(Game, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});
Game.belongsTo(User, {
  foreignKey: "user_id",
});
Characters.belongsTo(Game, {
  foreignKey: "game_id",
});
Game.hasOne(Characters, {
  foreignKey: "game_id",
});
