const mongooose = require("mongoose");

const userSchema = mongooose.Schema({
    name : String,
    email: {type: String, unique: true},
    password: String
})

module.exports = mongooose.model("user", userSchema);