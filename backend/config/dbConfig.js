const mongoose = require("mongoose");

function dbConnection() {
    mongoose
        .connect(
            "mongodb+srv://demorana8:kkWdSrShjQVXldEU@cluster0.ujdrzmr.mongodb.net/result-management?retryWrites=true&w=majority&appName=Cluster0"
        )
        .then(() => console.log("Database Connected!"));
}

module.exports = dbConnection;
