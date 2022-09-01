/*
Recursive Sequence
A function f is defined as follows f(n) = (1) +(2x3) + (4x5x6) ... (n-terms). Given an integer n the task is to print the value of f(n).

Note: f(n) is a fast growing function. So, do not try large values of n, as its value can overflow in many programming languages.

Input
The first line of input contains an integer t denoting the number of test cases. Then t test cases follow. Each test case contains an integer n.

Output
t lines containing 1 integer each, denoting the value of f(n) for that particular test case.

Example
Input:

3

1

2

5

Output:

1

7

365527

Explanation:
f(1) = 1

f(2) = 1 + (2x3) = 1 + 6 = 7

f(5) = 1+(2x3)+(4x5x6)+(7x8x9x10)+(11x12x13x14x15) = 365527


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

// 1+(2x3)+(4x5x6)+(7x8x9x10)+(11x12x13x14x15)
// f(1) = 1
// f(2) = 7
// f(3) = 127
// f(4) = 5167 
// f(5) = 365527 = 11*12*13*14*15 + f(4)

// f(n) = f(n - 1) + product of n terms


let test_cases = parseInt(readLine());

while (test_cases--) {
    let n = parseInt(readLine());
    console.log(rec_seq(1, 1, n));
}

function rec_seq(i, start, n) {
    if (i > n) return 0;
    
    let end = ((i * (i + 1)) / 2);
    let sum = 1;
    let temp = start
    for (let j = end; j >= start; j--) {
        sum *= j;
        temp++;
    }

    return sum + rec_seq(i + 1, temp, n);
}