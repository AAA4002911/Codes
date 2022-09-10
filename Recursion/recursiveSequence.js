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

//LOGIC
/*
f(n) = (1) +(2x3) + (4x5x6) + (7x8x9x10) + (11x12x13x14x15) + (16x17x18x19x20x21)... (n-terms)


f(5) = 1+(2x3)+(4x5x6)+(7x8x9x10)+(11x12x13x14x15) = 365527
        1 + 6 + 120 + 5040 + 360360
        1,  7,  127,  5167, 365527

6 --- 21  --- (6+5+4+3+2+1)
5 --- 15  --- (5+4+3+2+1)
4 --- 10  --- (4+3+2+1)
3 --- 6 --- (3+2+1)
2 --- 3  --- (2+1)
1 --- 1 --- (1)

1,3,6,10,15,21
*/


let test_case = parseInt(readLine());

function sequence(n) {
    if (n == 1) return 1;

    let lastNum = (n * (n + 1)) / 2;
    let startNum = lastNum - (n - 1);
    let product = 1;
    for (let i = startNum; i <= lastNum; i++) {
        product *= i;
    }

    return  (product + sequence(n - 1));

}


while(test_case--) {
    let input = parseInt(readLine());
    if (input < 0) continue;
    console.log(sequence(input));
}