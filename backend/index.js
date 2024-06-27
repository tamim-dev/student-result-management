const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./routes/index");


app.use(cors());

app.use(express.json());

app.use(router);


app.listen(8000, function () {
    console.log("Server is running");
});