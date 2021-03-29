const router = require("express").Router();
const { Game, Characters } = require("../../models");
const withAuth = require("../../utils/auth");
const Sequelize = require("sequelize");

// changed to just / and we'll get the id from the req.body
router.post('/', withAuth, async (req, res) => {
    try {
        const gameData = await Game.create({
            score: req.body.score,
            level: req.body.level,
            user_id: req.session.user_id
        });
        const gameID = await Game.findOne({
            where: {
                user_id: req.session.user_id
            }
        });
        req.session.save(() => {
            req.session.game_id = gameID.id;
            res.status(200).json(gameData);
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

//altered to get it by user_id Maybe not needed
router.get('/id', withAuth, async (req, res) => {
    try {
        const gameData = await Game.findOne({
            where: {
                id: req.session.game_id
            },
            include: [
                {
                    model: Characters,
                }
            ]
        })
        const findGame = await JSON.parse(JSON.stringify(gameData))
        console.log(findGame);
        res.status(200).json(gameData);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/:id', withAuth, async (req, res) => {
    try {
        const gameData = await Game.destroy({
            where: {
                id: req.params.id
            }
        })
        if (!gameData) {
            res.status(404).json({ message: 'No Game Found with this id!' });
            return;

        }
        res.status(200).json(gameData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.put('/id', withAuth, async (req, res) => {
    try {
        const gameData = await Game.update(
            { score: Sequelize.literal(`score + ${req.body.score}`) },
            {
                where: {
                    id: req.session.game_id
                }
            }
        )
        if (!gameData) {
            res.status(404).json({ message: 'No game found with this id!' });
            return;
        }
        res.status(200).json(gameData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/", withAuth, async (req, res) => {
    try {
        //This is just a placeholder
        res.render('homepage')



    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;