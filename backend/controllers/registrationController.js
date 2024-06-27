const {
    emailValidation,
    passwordValidation,
} = require("../helpers/validation");
let User = require("../schema/userSchema");
const bcrypt = require("bcrypt");

let registrationController = async (req, res) => {
    let { name, email, password } = req.body;
    let existingUser = await User.find({ email: email });

    if (existingUser.length == 0) {
        if (!name) {
            res.send({ error: "Name required" });
        } else if (!email) {
            res.send({ error: "Email required" });
        } else if (!password) {
            res.send({ error: "Password required" });
        } else {
            if (email) {
                if (!emailValidation(email)) {
                    return res.send({ error: "Valid Email Required" });
                }
            }
            if (password) {
                if (!passwordValidation(password)) {
                    return res.send({
                        error: "Enter an password 8 characters includes letter and number",
                    });
                }
            }

            bcrypt.hash(password, 10, async function (err, hash) {
                let user = new User({
                    name: name,
                    email: email,
                    password: hash,
                });

                user.save();
                res.send({
                    success: "Registration successful",
                    name: user.name,
                    email: user.email,
                    id: user._id,
                });
            });
        }
    } else {
        res.send({ error: "Already email exits" });
    }
};

module.exports = registrationController;
