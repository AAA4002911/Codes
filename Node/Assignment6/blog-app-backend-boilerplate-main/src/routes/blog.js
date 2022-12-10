const router = require('express').Router();
const Blog = require('../models/Blog')

// Your routing code goes here

router.get('/blog', async (req, res) => {
    try {
        const { page, search } = req.query;
        const regex = new RegExp(search, "g");
        const blog = await Blog.find({ topic: { $regex: regex }}).limit(parseInt(page));
        return res.json({ blog })
    } catch (err) {
        return res.status(400).json({
            status: "Failed",
            message: err.message
        })
    }
})

router.post('/blog', async (req, res) => {
    try {
        const blog = await Blog.create(req.body);
        const response = {
            status: "success",
            result:
            {
                id: blog._id,
                topic: blog.topic,
                description: blog.description,
                posted_at: blog.posted_at,
                posted_by: blog.posted_by
            }
        }
        return res.json(response);
    } catch (err) {
       return res.status(400).json({
            status: "Failed",
            message: err.message
        })
    }
})

router.put('/blog/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const blog = req.body;
        await Blog.replaceOne({ "_id": id }, {
            topic: blog.topic,
            description: blog.description,
            posted_at: blog.posted_at,
            posted_by: blog.posted_by
        })
        const response = {
            status: "success",
            result:
            {
                id: blog._id,
                topic: blog.topic,
                description: blog.description,
                posted_at: blog.posted_at,
                posted_by: blog.posted_by
            }
        }
        return res.json(response);

    } catch (err) {
        return res.status(400).json({
            status: "Failed",
            message: err.message
        })
    }
})

router.delete('/blog/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const blog = await Blog.findOne({ "_id": id })
        const response = {
            status: "success",
            result:
            {
                id: blog._id,
                topic: blog.topic,
                description: blog.description,
                posted_at: blog.posted_at,
                posted_by: blog.posted_by
            }
        }
        res.json(response);
        return await Blog.deleteOne({ "_id": id })

    } catch (err) {
        return res.status(400).json({
            status: "Failed",
            message: err.message
        })
    }
})

module.exports = router;