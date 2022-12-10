const express = require('express');
const app = express();
const bodyparser = import("body-parser");
const dotenv = require('dotenv');
dotenv.config();
const PRIVATE_KEY = process.env.PRIVATE_KEY;

const postRoute = require("./routes/post");
const userRoute = require("./routes/user");

app.use(express.json());

app.use(express.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }))

// Middleware for token verification
app.use("/posts", (req, res, next) => {
    if (req.headers.authorization) {
        const token = req.headers.authorization;
        if (token) {
            jwt.verify(token, PRIVATE_KEY, function (err, decoded) {
                if (err) {
                    return res.status(403).json({
                        status: "failed",
                        message: "Not a valid token"
                    })
                }
                req.userID = decoded.data;
                next();
            })
        } else {
            return res.status(403).json({
                status: "Failed",
                message: "Token is missing"
            })
        }
    } else {
        return res.status(401).json({
            status: "Failed",
            message: "Not Authorized"
        })
    }
})

app.use("/", userRoute);
app.use("/posts", postRoute);

module.exports = app;
