const router = require("express").Router();
const { User, Game } = require("../../models");

const withAuth = require("../../utils/auth");

// CREATE new user
router.post("/", async (req, res) => {
  try {
    const dbUserData = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    const dbUserId = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    req.session.save(() => {
      req.session.user_id = dbUserId.id
      req.session.loggedIn = true;

      res.status(200).json(dbUserData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!dbUserData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password. Please try again!" });
      return;
    }

    const validPassword = await dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password. Please try again!" });
      return;
    }

    const gameDataID = await Game.findOne({
      where: {
        user_id: dbUserData.id,
      },
    });


    req.session.save(() => {
      req.session.user_id = dbUserData.id;
      req.session.loggedIn = true;
      req.session.game_id = gameDataID.id;
      res
        .status(200)
        .json({ user: dbUserData, message: "You are now logged in!" });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/char', withAuth, async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      where: { id: req.session.user_id },
      include: [
        {
          model: Game,
          attributes: ['id']
        },
      ],
    })
    const userGame = JSON.parse(JSON.stringify(dbUserData));
    return userGame;
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
})

router.get("/login:id", withAuth, async (req, res) => {
  try {
    const dbUserData = await User.findByPk({
      where: { id: req.params.id },
      include: [
        {
          model: User,
          attributes: "username",
        },
      ],
    });
    const user = dbUserData.get({ plain: true });
    res.render("user", { user, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Logout
router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
