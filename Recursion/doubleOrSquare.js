/*
Double Square
Write a function doubleOrSquare, which takes an integer as its argument. If the argument is positive, it should return twice its value, otherwise it should return its square.

You don't need to worry about taking input or printing output. Given template will take care of it. You only have to implement the function doubleOrSquare.

Example
Input: 5

Output: 10

Input: -5

Output: 25
*/

let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------

// Fill in the following function.
// Please do not change the function name.
function doubleOrSquare(number) {
    if (number >= 0) return 2 * number;
    else {
    number *= -1;
    return number * doubleOrSquare(number / 2);
   }
}


// -------- DO NOT CHANGE ANYTHING BELOW THIS LINE --------
let n = parseInt(readLine());
console.log(doubleOrSquare(n));