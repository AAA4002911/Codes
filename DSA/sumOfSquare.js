/*
Find sum of squares
Given n, find the sum of squares of first n integers.

Input
One Integer

Output
One Integer

Example
Input: 3

Output: 14
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
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

let n = parseInt(readLine());
let square_sum = 0;
for (let i = 0; i <= n; i++) {
	square_sum += (i * i);
}

console.log(square_sum);