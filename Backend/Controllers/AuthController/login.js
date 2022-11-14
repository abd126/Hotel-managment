const { comparePassword } = require('../../Services/index')
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const UserModel = require("../../Model/UserSchema");

const loginController = async (req, res) => {
    const { email, password } = req.body;

    const errors = validationResult(req);
    if (errors.isEmpty()) {
        const { email, password } = req.body;
    }



    UserModel.findOne({ email }, async (error, user) => {
        if (error) {
            res.send(error);
        } else if (user) {
            await
                comparePassword(password, user.password)
                    .then((password) => {
                        if (password) {
                            const token = jwt.sign({ id: user._id, role: user.role },
                                process.env.JWT_KEY)
                            // console.log(token, "jwt token")
                            res.cookie("token", token, {
                                httpOnly: true,
                                // maxAge :
                            });
                            res.send({ message: "user successfully login", data: user });
                        } else {
                            res.send({ error: "Invalid User" });
                        }
                    })
                    .catch((err) => {
                        res.send(err);
                    });
        } else {
            res.json({ error: "Invalid User" });
        }
    });
};

module.exports = loginController;