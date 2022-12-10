const router = require('express').Router();
const Post = require('../models/post');
var jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
const PRIVATE_KEY = process.env.PRIVATE_KEY;

// Middleware for token verification
const tokenAuth = (req, res, next) => {
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
}

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

router.post('/', tokenAuth, async (req, res) => {
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

router.put('/:postId', tokenAuth, async (req, res) => {
    try {
        const { postId } = req.params;
        let update_data = {};
        if (req.body.title) update_data.title = req.body.title;
        if (req.body.body) update_data.body = req.body.body;
        if (req.body.image) update_data.image = req.body.image;

        const data = await Post.findById(postId);
        if (data.user != req.userID) return res.status(403).json({status: "Access Denied"});

        await Post.updateOne({ _id: postId }, update_data)
        return res.json({ status : "Success" });

    } catch (err) {
        return res.status(400).json({
            status: "Failed",
            message: err.message
        })
    }
})

router.delete('/:postId', tokenAuth, async (req, res) => {
    try {
        const { postId } = req.params;
        
        const data = await Post.findById(postId);
        if (data.user != req.userID) return res.status(403).json({status: "Access Denied"});
        await Post.deleteOne({ _id: postId })
        return res.json({ status: "successfully deleted" });
    } catch (err) {
        return res.status(400).json({
            status: "Failed",
            message: err.message
        })
    }
})

module.exports = router;