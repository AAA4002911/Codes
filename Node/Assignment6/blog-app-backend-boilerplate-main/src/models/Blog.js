const mongooose = require('mongoose');
mongooose.pluralize(null);

const blogSchema = new mongooose.Schema({
    // Your code goes here
    topic: { type: String},
    description: { type: String},
    posted_at:{ type: Date, default: Date.now },
    posted_by: { type: String}
}, {collection: "blogs"})

const Blog = mongooose.model('blog', blogSchema);

module.exports = Blog;