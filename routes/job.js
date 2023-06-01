const express = require("express");
const router = express.Router();
const Job = require("../controllers/job");
const authentication = require("../middleware/authentication");
const authorization = require("../middleware/authorization");
const authorizationStatus = require("../middleware/authorization-status");

router.get("/", authentication, Job.allJob);
router.get("/:id", authentication, Job.getJobById);
router.post("/", authentication, Job.createJob);
router.delete("/:id", authentication, authorization, Job.deleteJob);
router.put("/:id", authentication, authorization, Job.editJob);
router.patch("/:id", authentication, authorizationStatus, Job.statusJob);

module.exports = router;
