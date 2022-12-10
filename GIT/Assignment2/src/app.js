const express = require('express');
const app = express();
const bodyparser = require("body-parser");

const postRoute = require("./routes/post");
const userRoute = require("./routes/user");

app.use(express.json());

app.use(express.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

app.use("/", userRoute);
app.use("/posts", postRoute);

module.exports = app;