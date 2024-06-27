const express = require("express");
const loginController = require("../controllers/loginController");
const registrationController = require("../controllers/registrationController");
const router = express.Router();

router.post("/registration", registrationController);
router.post("/login", loginController);

router.use((req, res) => res.json("No Api Found On This Route"));

module.exports = router;
