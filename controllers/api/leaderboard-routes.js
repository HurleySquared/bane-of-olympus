const router = require("express").Router();
const { User, Characters, Game } = require("../../models");
const withAuth = require("../../utils/auth");

router.get("/", async (req, res) => {
  try {
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
        where: { user_id: eachUser.id },
      });
      leaderArray.push([eachUser.username, usersGame.score]);
    }
    await leaderArray.sort((a, b) => {
      return b[1] - a[1];
    });
    console.log(leaderArray);
    res.render("leaderboard", {
      leaderArray,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
module.exports = router;
