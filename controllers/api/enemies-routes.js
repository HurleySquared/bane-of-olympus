const router = require("express").Router();
const { Enemies } = require("../../models");
const withAuth = require("../../utils/auth");

router.get('/random', withAuth, async (req, res) => {
    try {
        const enemyData = await Enemies.findAll();
        const randEnemy = enemyData[Math.floor(Math.random() * enemyData.length)];
        res.status(200).json(randEnemy);
    } catch (err) {
        res.status(400).json(err);
    }
});

// router.post('/', withAuth, async (req, res) => {
//     try {

//     }
// })


module.exports = router;