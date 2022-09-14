/*
Unordered Linear Search
Given a number K and List of numbers A return the index of K in List A.

If K is not found return -1

Input
First line contains K Second line contains n, the number of integers. Next n lines contain n integers, one integer per line.

Output
Print the index of K in the List A

Example
Input: 20

9

2

34

43

18

20

78

54

13

10

Output: 4
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

let k = parseInt(readLine());
let n = parseInt(readLine());

for (let i = 0; i < n; i++) {
	let int = parseInt(readLine());
	if (k == int) {
		console.log(i);
		break;
	}
	if (i == n - 1) console.log(-1);
}