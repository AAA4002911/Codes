/*
Recursive Multiply
You have been given an integer n. You need to print the product of all the digits of the n using recursion.

Note: DO NOT USE LOOP/s
Input
First line contains one integer t, denoting the number of testcases.

It is followed t lines, containing one integer each.

Output
One line for each testcase, denoting the result.

Example
Input:

2
12345
356045873
Output:

120
0
Explanation First line is 2, denoting that there are 2 testcases.

Test case 1 is 12345. The product of the digits is 1*2*3*4*5 which is 120.

Test case 2 is 356045873. The product of the digits is 3*5*6*0*4*5*8*7*3 which is 0.
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


let testcase = parseInt(readLine());

while (testcase--) {

    let num = parseInt(readLine());
    if (num >= 0) console.log(recursiveMultiply(num));
    else {
        num *= -1;
        console.log(recursiveMultiply(num));
    }
}

function recursiveMultiply(input) {
    if (input >= 0 && input < 10) return input;
    else  return (input % 10 * recursiveMultiply(Math.floor(input / 10)));
}
