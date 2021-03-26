const router = require("express").Router();
const { Game } = require("../../models");
const withAuth = require("../../utils/auth");

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