let resultSchema = require("../schema/resultSchema");

let getAllResultController = async (req, res) => {
    try {
        let data = await resultSchema.find({});

        if (data) {
            return res
                .status(201)
                .send({ success: "Get Result successfully", data });
        } else {
            return res.send({
                error: "Student is not found",
            });
        }
    } catch (error) {
        return res.status(500).send({ error: "Internal Server Error" });
    }
};

module.exports = getAllResultController;
