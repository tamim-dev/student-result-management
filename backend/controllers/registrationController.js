const {
    emailValidation,
    passwordValidation,
} = require("../helpers/validation");
let User = require("../schema/userSchema");
const bcrypt = require("bcrypt");

let registrationController = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name) {
            return res.status(400).send({ error: "Name is required" });
        }
        if (!email) {
            return res.status(400).send({ error: "Email is required" });
        }
        if (!password) {
            return res.status(400).send({ error: "Password is required" });
        }
        if (!emailValidation(email)) {
            return res.status(400).send({ error: "Valid email is required" });
        }
        if (!passwordValidation(password)) {
            return res.status(400).send({
                error: "Password must be at least 8 characters long and include both letters and numbers",
            });
        }

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).send({ error: "Email already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({
            name,
            email,
            password: hashedPassword,
        });

        await user.save();

        res.status(201).send({
            success: "Registration successful",
            name: user.name,
            email: user.email,
            id: user._id,
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: "Internal Server Error" });
    }
};

module.exports = registrationController;
