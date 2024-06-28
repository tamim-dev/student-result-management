let resultSchema = require("../schema/resultSchema");

let getResultController = async (req, res) => {
    try {
        const { department, section, semester, roll } = req.body;

        if (!department) {
            return res.status(400).send({ error: "Department is required" });
        }
        if (!section) {
            return res.status(400).send({ error: "Section is required" });
        }
        if (!semester) {
            return res.status(400).send({ error: "Semester is required" });
        }
        if (!roll) {
            return res.status(400).send({ error: "Roll is required" });
        }

        let data = await resultSchema.findOne({
            department,
            roll,
            semester,
            section,
        });
        if (data) {
            return res
                .status(201)
                .send({ success: "Get Result successfully", data });
        } else {
            return res.status(400).send({
                error: "Student is not found",
            });
        }
    } catch (error) {
        return res.status(500).send({ error: "Internal Server Error" });
    }
};

module.exports = getResultController;
