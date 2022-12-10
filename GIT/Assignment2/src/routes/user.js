const router = require("express").Router();
const User = require("../models/user");
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const PRIVATE_KEY = process.env.PRIVATE_KEY;

router.post("register", async (req, res) => {
    try {
        const { name, email, password } = req.body;
        let user = await User.findOne({ email: email });
        if (user) {
            return res.status(409).json({
                status: "Failed",
                message: "User already exists with the given email address"
            })
        }
        bcrypt.hash(password, 10, async function (err, hashed_password) {
            if (err) {
                return res.status(500).json({
                    status: "Failed",
                    message: err.message
                })
            }
            user = await User.create({
                name: name,
                email: email,
                password: hashed_password
            });
            return res.json({
                status: "Success",
                data: user
            })
        });
    } catch (err) {
        res.json({
            status: "Failed",
            message: err.message
        })
    }
})

router.post("login", async (req, res) => {
    try {
        const { email, password } = req.body;
        let user = await User.findOne({ email: email });
        if (!user) {
            return res.status(404).json({
                status: "Failed",
                message: "Account not found, Please Register"
            })
        }
        bcrypt.compare(password, user.password, function (err, result) {
            if (err) {
                return res.status(500).json({
                    status: "Failed",
                    message: err.message
                })
            }
            if (result == true) {
                const token = jwt.sign({
                    data: user._id
                }, PRIVATE_KEY, { expiresIn: '1h' });

                return res.json({
                    status: "Success",
                    token: token
                })
            } else {
                return res.status(401).json({
                    status: "Failed",
                    message: "Invalid credentials"
                })
            }
        })
    } catch (err) {
        res.json({
            status: "Failed",
            message: err.message
        })
    }
})