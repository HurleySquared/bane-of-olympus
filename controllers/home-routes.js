const withAuth = require('../utils/auth');
const { User, Game, Enemies, Characters } = require('../models');
const router = require('express').Router();

router.get('/', async (req, res) => {
  try {
    const loggedIn = req.session.loggedIn
    res.render('homepage', { loggedIn })
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

// must be logged in withAuth, will show character select handlebars
router.get('/characterselect', withAuth, async (req, res) => {
  const loggedIn = req.session.loggedIn;
  const getGame = await Game.findOne({
    where: {
      user_id: req.session.user_id
    }
  });
  const userGame = JSON.parse(JSON.stringify(getGame));
  if (userGame.character_id) {
    res.render('character-select', {
      loggedIn,
      userGame
    })
  } else {
    res.render('character-create', {
      loggedIn,
      userGame
    })
  }

})

module.exports = router;
