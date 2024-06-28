let resultSchema = require("../schema/resultSchema");

let addResultController = async (req, res) => {
    try {
        const { department, section, semester, roll } = req.body;

        const findData = await resultSchema.find({ roll: roll });
        const findData2 = await resultSchema.find({ section: section });

        if (findData.length === 0 && findData2.length === 0) {
            const result = new resultSchema({
                department,
                section,
                semester,
                roll,
            });

            await result.save();
            return res
                .status(201)
                .send({ success: "Result created successfully" });
        } else {
            return res.status(400).send({ error: "Result already exists" });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).send({ error: "Internal Server Error" });
    }
};

module.exports = addResultController;
