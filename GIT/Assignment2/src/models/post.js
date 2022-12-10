const mongooose = require('mongoose');

const postSchema = new mongooose.Schema({
    title: String,
    body: String,
    image: String,
    user: String
})

module.exports = mongooose.model('post', postSchema);