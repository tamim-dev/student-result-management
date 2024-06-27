const express = require("express");
const router = express.Router();
const apiRoutes = require("./api/index");

router.use(apiRoutes);

router.use((req, res) => res.json("No Api Found On This Route"));

module.exports = router;
