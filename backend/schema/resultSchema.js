const mongoose = require("mongoose");
const { Schema } = mongoose;

const resultSchema = new Schema({
    department: {
        type: String,
        enum: ["BBA", "TMS", "THM", "MBA", "BFA", "CSE/MCSE", "BSED/MSED"],
        required: true,
    },
    semester: {
        type: String,
        enum: ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th"],
        required: true,
    },
    Roll: {
        type: Number,
        required: true,
    },
    section: {
        type: String,
        enum: [
            "2016-2017",
            "2017-2018",
            "2018-2019",
            "2019-2020",
            "2020-2021",
            "2021-2022",
            "2022-2023",
            "2023-2024",
        ],
        required: true,
    },
});

module.exports = mongoose.model("Result", resultSchema);
