const router = require("express").Router();
const { User, Characters, Game } = require("../../models");

const withAuth = require("../../utils/auth");

// get ALL
// router.get("/", withAuth, async (req, res) => {
//   try {
//     const characterData = await Characters.findAll({
//       include: [
//         {
//           model: User,
//           attributes: [],
//         },
//       ],
//     });
//     const characters = characterData.map((character) =>
//       character.get({ plain: true })
//     );
//     res.render("characters", {
//       characters,
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

router.post("/", withAuth, async (req, res) => {
  try {
    const userGame = await Game.findOne({ where: { user_id: req.session.user_id } })
    const characterData = await Characters.create({
      character_name: req.body.char,
      health: 100,
      damage: 10,
      image: req.body.charImage,
      game_id: userGame.id,
    });
    req.session.save(() => {
      req.session.game_id = userGame.id;
    });
    res.status(200).json(characterData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// router.get("/:id", withAuth, async (req, res) => {
//   try {
//     const characterData = await Characters.findOne({
//       where: {
//         id: req.params.id,
//       },
//     });
//     res.status(200).json(characterData);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });
// router.put("/:id", withAuth, async (req, res) => {
//   try {
//     const characterData = await Characters.update({
//       where: {
//         id: req.params.id,
//       },
//     });
//     if (!characterData) {
//       res.status(404).json({ message: "no character found with this id!" });
//       return;
//     }
//     res.status(200).json(characterData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// delete
router.delete("/", withAuth, async (req, res) => {
  try {
    const characterData = await Characters.destroy({
      where: {
        id: req.body.id,
      },
    });
    if (!characterData) {
      res.status(404).json({ message: "no character found with this id!" });
      return;
    }
    res.status(200).json(characterData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/fight", withAuth, async (req, res) => {
  try {
    const characterData = await Game.findOne({ where: { id: req.session.game_id } });
    var userChar = await JSON.parse(JSON.stringify(characterData));
    res.status(200).json(userChar);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
