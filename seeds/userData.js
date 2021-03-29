const { User } = require("../models");
const userdata = [
  {
    username: "TomandJerry",
    email: "tomandjerry@gmail.com",
    password: "tomandjerry123",
  },
  {
    username: "WillSmith",
    email: "willsmith@gmail.com",
    password: "willsmith123",
  },
  {
    username: "dwayne johnson",
    email: "dwaynejohnson@gmail.com",
    password: "therock123",
  },
];
const seedUser = () => User.bulkCreate(userdata, {
  individualHooks: true,
  returning: true,
});
module.exports = seedUser;
