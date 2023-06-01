const express = require("express");
const router = express.Router();
const History = require("../controllers/history");

router.get("/", History.showHistory);

module.exports = router;
