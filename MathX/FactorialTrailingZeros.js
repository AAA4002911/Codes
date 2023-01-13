/*

Factorial Trailing Zeros
Description

Given an integer n, return the number of trailing zeroes in n! (factorial of n). Trailing zeros are a sequence of 0 in the decimal representation of a number, after which no other digits follow. For example, 10200 has 2 trailing zeros.
Input format

First line contains a positive integer t, denoting the number of test cases. For every test case there is a single line that contains the a positive integer n.
Output format

For every test case, output return the number of trailing zeroes in n!.
Sample input

2
3
5

Sample output

0
1

Explaination

In first test case, 3! = 6, so no trailing zero.

In second test case, 5! =120, so one trailing zero.

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

const trailing_zeros = (n) => {
	let count = 0;
	for (let i = 5; Math.floor(n / i) >= 1; i *= 5) { count += Math.floor(n / i) }
	return count;
}

let test_cases = parseInt(readLine());
while (test_cases--) { console.log(trailing_zeros(parseInt(readLine()))) };