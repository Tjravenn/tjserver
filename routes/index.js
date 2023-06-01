const express = require("express");
const router = express.Router();
const users = require("./user");
const jobs = require("./job");
const companies = require("./company");
const historys = require("./history");

router.use("/user", users);
router.use("/job", jobs);
router.use("/company", companies);
router.use("/history", historys);

module.exports = router;
