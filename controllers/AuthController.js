const express = require("express");
const router = express.Router();
const { userSignupValidator } = require("../validator");
// const { check } = require("express-validator");
const { check, body, validationResult } = require("express-validator");

const {
  signup,
  signin,
  signout,
  requireSignin,
} = require("../services/AuthService.js");

router.post("/signup", signup); //
router.post("/signin", signin);
router.get("/signout", signout);

module.exports = router;
