const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("./index.ejs", { user: req.user });
});

module.exports = router;
