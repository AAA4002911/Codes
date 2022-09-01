let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// Even or Odd
// Given a postive integer, find out whether it is even or odd.

// Input
// One line containing a positive integer.

// Output
// One line containing a string. Odd if the given integer is odd and Even if the given integer is even.

// Example
// Input:

// 9
// Output:

// Odd

let number = parseInt(readLine());

check = number % 2;

if (check === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}