let User = require("../schema/userSchema");
const bcrypt = require("bcrypt");

let loginController = async (req, res) => {
    try {
        const { email, password } = req.body;

        const existingUser = await User.findOne({ email });

        if (!existingUser) {
            return res.status(401).send({ error: "Invalid credentials" });
        }

        const isPasswordValid = await bcrypt.compare(
            password,
            existingUser.password
        );

        if (!isPasswordValid) {
            return res.status(401).send({ error: "Invalid password" });
        }

        return res.status(200).send({
            success: "Login successful",
            id: existingUser._id,
            name: existingUser.name,
            email: existingUser.email,
            role: existingUser.role,
            verify: existingUser.verify,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).send({ error: "Internal Server Error" });
    }
};

module.exports = loginController;
