let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// Square Sum
// Given a natural number n as input, find the sum of squares of first n natural numbers.

// Input
// One Integer, denoting n.

// Output
// One Integer, denoting the required sum.

// Example
// Input: 3

// Output: 14

// Explanation:

// 1*1+2*2+3*3 = 14



let number = parseInt(readLine());

let sum = ((number*(number+1)*((2*number)+1)) / 6);

console.log(sum);