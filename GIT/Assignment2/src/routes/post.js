const router = require('express').Router();
const Post = require('../models/post');


router.get('/', async (req, res) => {
    try {
        const post = await Post.find();
        return res.json({ posts: post });
    } catch (err) {
        return res.status(400).json({
            status: "Failed",
            message: err.message
        })
    }
})

router.post('/', async (req, res) => {
    let userId = req.userID;
    try {
        const generated_post = await Post.create({
            title: req.body.title,
            body: req.body.body,
            image: req.body.image,
            user: userId
        });
        return res.json(generated_post);
    } catch (err) {
       return res.status(400).json({
            status: "Failed",
            message: err.message
        })
    }
})

router.put('/:postId', async (req, res) => {
    try {
        const { postId } = req.params;
        await Post.replaceOne({ "_id": postId }, {
            title: req.body.title,
            body: req.body.body,
            image: req.body.image
        })
        return res.json({ status : "Success" });

    } catch (err) {
        return res.status(400).json({
            status: "Failed",
            message: err.message
        })
    }
})

router.delete('/:postId', async (req, res) => {
    try {
        const { postId } = req.params;
        const blog = await Post.findOne({ "_id": postId })
        await Post.deleteOne({ "_id": id })
        return res.json({ status: "success" });
    } catch (err) {
        return res.status(400).json({
            status: "Failed",
            message: err.message
        })
    }
})

module.exports = router;