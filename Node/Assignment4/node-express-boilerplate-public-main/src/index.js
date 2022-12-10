const express = require("express")
const app = express();
const bodyParser = require("body-parser");
const port = 3000
// app.use(express.urlencoded({ extended: false }));

// Parse JSON bodies (as sent by API clients)
// app.use(express.json());


// app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here

app.get("/", (req, res) => {
    res.send("Hello World!");
})


function err_check(input1, input2, res, divide=false) {
    if (typeof input1 === 'string' || typeof input2 === 'string') {
        return res.json({
            "status": "error",
            "message": "Invalid data types"
        })
    }
    if (Number(input1) < -1000000 || Number(input2) < -1000000) {
        return res.json({
            "status": "error",
            "message": "Underflow"
        })
    }
    if (Number(input1) > 1000000 || Number(input2) > 1000000) {
        return res.json({
            "status": "error",
            "message": "Overflow"
        })
    }
    if (divide && Number(input2) === 0) {
        return res.json({
            "status": "error",
            "message": "Cannot divide by zero"
        })
    } 
}

app.post("/add", function (req, res) {
    err_check(req.body.num1, req.body.num2, res);
    let sum = Number(req.body.num1) + Number(req.body.num2);
    err_check(sum, 0, res);
    res.json({
        "status": "success",
        "message": "The sum of given two numbers",
        "sum": sum
    })
});
app.post("/sub", function (req, res) {
    err_check(req.body.num1, req.body.num2, res);
    let sub = Number(req.body.num1) - Number(req.body.num2);
    err_check(sub, 0, res);
    res.json({
        "status": "success",
        "message": "The difference of given two numbers",
        "difference": sub
    })
});
app.post("/multiply", function (req, res) {
    err_check(req.body.num1, req.body.num2, res);
    let multi = Number(req.body.num1) * Number(req.body.num2);
    err_check(multi, 0, res);
    res.json({
        "status": "success",
        "message": "The product of given numbers",
        "result": multi
    })
});
app.post("/divide", function (req, res) {
    err_check(req.body.num1, req.body.num2, res, true);
    let divide = Number(req.body.num1) / Number(req.body.num2);
    err_check(divide, 0, res);
    res.json({
        "status": "success",
        "message": "The division of given numbers",
        "result": divide
    })
});
app.post("*", function (req, res) {
    res.json({
        "status": "failure"
    })
})

app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;