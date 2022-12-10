const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 8080
app.use(express.urlencoded({ extended: false }));

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// your code goes here
const studentArr = require("./InitialData");
let curr_id = studentArr.length;

app.get('/api/student/:id', (req, res) => {
    const { id } = req.params;
    if (id == 0 || id > curr_id) {
        res.writeHead(404);
        res.end();
    }
    else {
        for (let i = 0; i < studentArr.length; i++) {
            if (studentArr[i].id == id) {
                res.json(studentArr[i]);
                return;
            }
        }
        res.writeHead(404);
        res.end();
    }
})
app.get('/api/student', (req, res) => {
    res.json(studentArr);
})

app.post("/api/student", (req, res) => {
    const { name, currentClass, division } = req.body;
    if (name && currentClass && division) {
        curr_id++;
        studentArr.push({
            id: curr_id,
            name: name,
            currentClass: currentClass,
            division: division
        })
        res.json({ "id": curr_id });
    }
    else {
        res.writeHead(400);
        res.end();
    }
})

app.put("/api/student/:id", (req, res) => {
    const { name, currentClass, division } = req.body;
    const { id } = req.params;
    for (let i = 0; i < studentArr.length; i++) {
        if (studentArr[i].id == id) {
            if (name) { studentArr[i].name = name; }
            if (currentClass) { studentArr[i].currentClass = currentClass; }
            if (division) { studentArr[i].division = division; }
            res.json(studentArr[i]);
            return;
        }
    }
    res.writeHead(404);
    res.end();
})

app.delete("/api/student/:id", (req, res) => {
    const { id } = req.params;
    if (id == 0 || id > curr_id) {
        res.writeHead(404);
        res.end();
    }
    else {
        for (let i = 0; i < studentArr.length; i++) {
            if (studentArr[i].id == id) {
                studentArr.splice(i, 1);
                return res.json({ "status": "succesfully Deleted" });
            }
        }
        res.writeHead(404);
        res.end();
    }
})


app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;   