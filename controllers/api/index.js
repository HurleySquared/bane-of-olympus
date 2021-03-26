const router = require('express').Router();

const userRoutes = require('./user-routes');
const gameRoutes = require('./game-routes');
const characterRoutes = require('./character-routes');


router.use('/users', userRoutes);
router.use('/game', gameRoutes);
router.use('/characters', characterRoutes);

module.exports = router;