const router = require("express").Router();
const { Characters } = require("../../models");
const User = require("../../models/Users");

const withAuth = require("../../utils/auth");

// get ALL
router.get("/", withAuth, async (req, res) => {
  try {
    const characterData = await Characters.findAll({
      include: [
        {
          model: User,
          attributes: [],
        },
      ],
    });
    const characters = characterData.map((character) =>
      character.get({ plain: true })
    );
    res.render("characters", {
      characters,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post("/:id", withAuth, async (req, res) => {
  try {
    const characterData = await Characters.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(characterData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/:id", withAuth, async (req, res) => {
  try {
    const characterData = await Characters.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(characterData);
  } catch (err) {
    res.status(400).json(err);
  }
});
router.put("/:id", withAuth, async (req, res) => {
  try {
    const characterData = await Characters.update({
      where: {
        id: req.params.id,
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

// delete
router.delete("/:id", withAuth, async (req, res) => {
  try {
    const characterData = await Characters.destroy({
      where: {
        id: req.params.id,
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

module.exports = router;
