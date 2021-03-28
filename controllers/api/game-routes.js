
const router = require("express").Router();
const { Game } = require("../../models");

const withAuth = require("../../utils/auth");

router.post('/:id', withAuth, async (req, res) => {
    try {
        const gameData = await Game.findOne({
            where: {
                id: req.params.id
            }
        })
        res.status(200).json(gameData);
    }   catch (err) {
        res.status(400).json(err);
    }
});

router.get('/:id', withAuth, async (req, res) => {
    try {
        const gameData = await Game.findOne({
            where: {
                id: req.params.id
            }
        })
        res.status(200).json(gameData);
    }   catch (err) {
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
            res.status(404).json({message: 'No Game Found with this id!'});
            return;

        }
        res.status(200).json(gameData);
    }   catch (err) {
        res.status(500).json(err);
    }
});

router.put('/', withAuth, async (req, res) => {
    try {
        const gameData = Game.update(req, body, {
            where: {
                id: req.params.id
            }
        })
        if (!gameData) {
            res.status(404).json({message: 'No game found with this id!'});
            return;
        }
        res.status(200).json(gameData);
    }   catch (err) {
        res.status(500).json(err);
    }
});