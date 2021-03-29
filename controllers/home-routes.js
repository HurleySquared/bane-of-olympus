const withAuth = require('../utils/auth');
const { User, Game, Enemies, Characters } = require('../models');
const { findOne } = require('../models/Characters');
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

router.get('/battle', async (req, res) => {
  try {
    const getChar = await Characters.findOne({ where: { game_id: req.session.game_id } });
    const loggedIn = req.session.loggedIn;
    const ranEnemy = await Enemies.findOne({ where: { id: Math.floor(Math.random() * 3 + 1) } });
    const character = JSON.parse(JSON.stringify(getChar));

    console.log(Math.floor(Math.random() * 3 + 1));
    console.log(ranEnemy);
    const enemy = JSON.parse(JSON.stringify(ranEnemy));
    console.log(enemy);
    const battleSave = JSON.stringify({
      id: character.id,
      name: character.character_name,
      characterHP: character.health,
      characterMaxHP: character.health,
      characterDam: character.damage,
      charImage: character.image,
      enemyName: enemy.character_name,
      enemyImage: enemy.image,
      enemyHP: enemy.health,
      enemyMaxHP: enemy.health,
      enemyDam: enemy.damage,
    });

    res.render('battle', {
      loggedIn,
      character,
      enemy,
      battleSave
    })


  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/battle2', async (req, res) => {
  try {
    const loggedIn = req.session.loggedIn;
    res.render('battle2', {
      loggedIn,
    })
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
    },
    include: [
      {
        model: Characters,
        attributes: ['id'],
      }
    ]
  });
  const userGame = await JSON.parse(JSON.stringify(getGame));
  const userData = await User.findOne({
    where: {
      id: req.session.user_id
    },
    include: [
      { model: Game },
    ]
  })
  const sendUser = await JSON.parse(JSON.stringify(userData));

  console.log(sendUser);
  if (userGame.character !== null) {
    const gameData = await Characters.findOne({
      where: {
        game_id: req.session.game_id
      },
    });
    const sendChar = await JSON.parse(JSON.stringify(gameData));
    res.render('character-select', {
      loggedIn,
      sendUser,
      sendChar
    })
  } else {
    res.render('character-create', {
      loggedIn,
      userGame
    })
  }
})

router.get('/leaderboards', async (req, res) => {
  try {
    const loggedIn = req.session.loggedIn;
    const leaderboardData = await User.findAll({
      include: [
        {
          model: Game,
        },
      ],
    });
    const leaderboard = await JSON.parse(JSON.stringify(leaderboardData));
    const leaderArray = [];
    for (const eachUser of leaderboard) {
      const usersGame = await Game.findOne({
        where: { user_id: eachUser.id }
      })
      leaderArray.push([eachUser.username, usersGame.score]);
    };
    await leaderArray.sort((a, b) => {
      return b[1] - a[1];
    });
    console.log(leaderArray);
    res.render("leaderboard", {
      loggedIn,
      leaderArray,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/defeat', async (req, res) => {
  try {
    res.render("defeat")
  } catch (err) {
    console.log(err);
    res.status(500).json(err)
  }
});

router.get('/victory', async (req, res) => {
  try {
    const characterData = await Characters.findOne({ where: { game_id: req.session.game_id } });
    const userData = await User.findOne({ where: { id: req.session.id } });
    const gameData = await Game.findOne({ where: { id: req.session.game_id } });
    const character = await JSON.parse(JSON.stringify(characterData));
    const user = await JSON.parse(JSON.stringify(userData));
    const game = await JSON.parse(JSON.stringify(gameData));
    res.render("victory",
      {
        character,
        user,
        game
      }
    )
  } catch (err) {
    console.log(err);
    res.status(500).json(err)
  }
});

module.exports = router;
