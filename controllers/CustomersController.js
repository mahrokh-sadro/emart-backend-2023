const express = require("express");

const router = express.Router();
const { isAuth, isAdmin } = require("../services/AuthService.js");

module.exports = router;
