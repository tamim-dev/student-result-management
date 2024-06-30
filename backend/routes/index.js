const express = require("express");
const loginController = require("../controllers/loginController");
const registrationController = require("../controllers/registrationController");
const addResultController = require("../controllers/addResultController");
const getResultController = require("../controllers/getResultControoller");
const getAllResultController = require("../controllers/getAllResultController");
const resultDeleteController = require("../controllers/resultDeleteController");
const router = express.Router();

router.post("/registration", registrationController);
router.post("/login", loginController);
router.post("/addresult", addResultController);
router.post("/deleteresult", resultDeleteController);

router.get("/getresult", getResultController);
router.get("/getallresult", getAllResultController);

router.use((req, res) => res.json("No Api Found On This Route"));

module.exports = router;
