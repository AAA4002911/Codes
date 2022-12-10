const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const marioModel = require('./models/marioChar');

// Middlewares
app.use(express.urlencoded({ extended: false }));

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// your code goes here

app.get("/mario", async (req, res) => {
    const mario_characters = await marioModel.find();
    return res.json(mario_characters);
})

app.get("/mario/:id", async (req, res) => {
    try {
    const { id } = req.params;
    const charachter = await marioModel.findOne({ _id: id });
    if (charachter) { return res.json(charachter); }
    else return res.status(400).json({ message: "Id is not found" });
    } catch(err) {
        return res.status(400).json({ message: err.message });
    }
})

app.post("/mario", async (req, res) => {
    const { name, weight } = req.body;
    if (!name || !weight) { return res.status(400).json({ message: "either name or weight is missing" }) }

    const charachter = await marioModel.create({ name: name, weight: weight });
    return res.status(201).json(charachter);
})

app.patch("/mario/:id", async (req, res) => {
    try {
        const { name, weight } = req.body;
        const { id } = req.params;
        const updateObj = {};
        if (name) { updateObj.name = name };
        if (weight) { updateObj.weight = weight };
        await marioModel.updateOne({ _id: id }, updateObj, async (err, obj) => {
            if (err) return res.status(400).json({ message: "Id is not found" });
            await marioModel.findOne({ _id: id}, (err, character) => {
                res.json(character);
            })
        })
    } catch (err) {
        return res.status(400).json({ message: err.message });
    }
})

app.delete("/mario/:id", async (req, res) => {
    try {
        const { id } = req.params;
        await marioModel.deleteOne({ _id: id }, (err, obj) => {
            if (err) return res.status(400).json({ message: "Id is not found" });
            if (obj.deletedCount == 1) return res.status(200).json({ message: 'character deleted' })
            return res.status(400).json({ message: "Id is not found" });
        })
    } catch (err) {
        return res.status(400).json({ message: err.message });
    }
})

module.exports = app;