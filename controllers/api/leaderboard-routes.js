const router = require('express').Router();
const { Game, User } = require('../../models');

const withAuth = require('../../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try {
        const leaderboardData = await User.findAll({
           include: [
               {
                   model: Game,
               }
           ]
        });
        const leaderboard = leaderboardData.map((leaderboard) =>
          leaderboard.get({ plain: true })
        );
        res.render('leaderboard', {
            leaderboard,
        });
    }   catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});