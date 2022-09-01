/*
Factorial: Recursive
Description
Write a program that computes the factorial of a given integer. Your implementation should be recursive in nature. Factorial of an integer n is defined as

Factorial(n) = undefined, if n < 0
             = 1, if n is 0
             = n*Factorial(n-1), otherwise
Input format
One line containing an integer n.

Output format
One line containing the factorial of n.

Sample input
5
Sample output
120
Explanation
Factorial of 5 is 5*4*3*2*1*1 which is 120.

Sample input
-4
Sample output
undefined
Explanation
Factorial of a negative integer is undefined.
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

let n = parseInt(readLine());
if (n < 0) {
    console.log("undefined");
}
else if (n == 0) {
    console.log(1);
}
else {
    console.log(factorial(n));
}

function factorial(n) {
    if (n == 1) return 1;
    return (n * factorial(n - 1));
}