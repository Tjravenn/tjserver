const express = require("express");
const router = express.Router();
const Company = require("../controllers/company");
const authentication = require("../middleware/authentication");

router.get("/", authentication, Company.allCompany);
router.get("/:id", authentication, Company.getCompanyById);
router.post("/", authentication, Company.createCompany);
router.delete("/:id", authentication, Company.deleteCompany);

module.exports = router;
