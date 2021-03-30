const { User } = require("../models");
const userdata = [
  {
    username: "Tom & Jerry",
    email: "tomandjerry@gmail.com",
    password: "tomandjerry123",
  },
  {
    username: "Will Smith",
    email: "willsmith@gmail.com",
    password: "willsmith123",
  },
  {
    username: "dwayne johnson",
    email: "dwaynejohnson@gmail.com",
    password: "therock123",
  },
  {
    username: "Alexander the Great",
    email: "alexander@gmail.com",
    password: "great123",
  },
  {
    username: "Helen of Troy",
    email: "helen@gmail.com",
    password: "oftroy123",
  },
  {
    username: "King Hyperion",
    email: "king@gmail.com",
    password: "hyperion",
  }
];
const seedUser = () => User.bulkCreate(userdata, {
  individualHooks: true,
  returning: true,
});
module.exports = seedUser;
