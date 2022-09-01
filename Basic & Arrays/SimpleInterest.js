let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// Simple interest
// Simple interest formula is given by: Simple Interest = (P x T x R)/100 Where, P is the principle amount T is the time and R is the rate. Compute simple interest for given P, T and R.

// Input
// Three lines containing integer each.

// Output
// One line containing integer.

// Example
// Input:

// 1000

// 10

// 5

// Output: 500

let principle = parseInt(readLine());
let time = parseInt(readLine());
let rate = parseInt(readLine());

let simpleInt = (principle *  time * rate) / 100;
console.log(simpleInt);