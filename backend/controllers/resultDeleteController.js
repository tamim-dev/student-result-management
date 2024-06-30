const Result = require("../schema/resultSchema");

let resultDeleteController = async (req, res) => {
    let { id } = req.body;

    await Result.findByIdAndDelete({ _id: id });

    res.send({ success: " Result delete successful" });
};

module.exports = resultDeleteController;
