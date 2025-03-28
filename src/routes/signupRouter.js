const express = require("express");
const bcrypt = require("bcryptjs");
const pool = require("../db/pool");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("sign-up");
});

router.post("/", async (req, res, next) => {
  const { firstName, lastName, email, username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    await pool.query(
      "INSERT INTO users (first_name, last_name, email, username, password) VALUES ($1, $2, $3, $4, $5)",
      [firstName, lastName, email, username, hashedPassword]
    );
    res.redirect("/login");
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
