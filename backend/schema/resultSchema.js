const mongoose = require("mongoose");
const { Schema } = mongoose;

const subjectSchema = new Schema({
    subjectname: { type: String, required: true },
    subjectcode: { type: Number, required: true },
    score: { type: Number, required: true },
    gpa: { type: String, required: true },
});

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
    roll: {
        type: Number,
        required: true,
    },
    session: {
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
    name: {
        type: String,
        required: true,
    },
    fathername: {
        type: String,
        required: true,
    },
    mothername: {
        type: String,
        required: true,
    },
    gpa: {
        type: String,
        required: true,
    },
    subjects: [subjectSchema],
});

module.exports = mongoose.model("Result", resultSchema);
