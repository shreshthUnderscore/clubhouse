const express = require("express");
const bcrypt = require("bcryptjs");
const passport = require("passport");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("login.ejs");
});

router.post(
  "/",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/sign-up",
  })
);
module.exports = router;
