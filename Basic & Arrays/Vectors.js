let fs = require("fs");
let data = fs.readFileSync("D:/10x/10x/Input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
/*
Vectors
Given two force vectors, find out whether they are parallel, perpendicular or neither. 
Let the first vector be A = a1 i +a2 j + a3 k and the second vector be B = b1 i + b2 j + b3 k.

A.B = a1 x b1 + a2 x b2 + a3 x b3
A x B = (a2 x b3 - a3 x b2) i - (a1 x b3 - b1 x a3) j + (a1 x b2 - a2 x b1) k
|A|2 = a12 + a22 + a32

If A.B = 0, then A and B are perpendicular.
If |A X B| = 0, then A and B are parallel.

Input
First line contains three space seperate values denoting, a1, a2, a3 respectively. 
Second line contains three space seperate values denoting, b1, b2, b3 respectively.

Output
Print 1 if they are parallel to each other, 2 if they are perpendicular to each other and 0 otherwise.

Example
Input1:
3 2 1
6 4 2

Output1:
1

Explanation:
|A X B| = 0
*/

let A = readLine().split(" ");
let a1 = parseInt(A[0]);
let a2 = parseInt(A[1]);
let a3 = parseInt(A[2]);
let B = readLine().split(" ");
let b1 = parseInt(B[0]);
let b2 = parseInt(B[1]);
let b3 = parseInt(B[2]);

let sum_perpendicular = a1 * b1 + a2 * b2 + a3 * b3;
if (sum_perpendicular == 0) {
    console.log(2);
} else {
    let sum_parallel = (a2 * b3 - a3 * b2)**2 - (a1 * b3 - b1 * a3)**2 + (a1 * b2 - a2 * b1)**2;
    if (sum_parallel == 0) {
    console.log(1);
    } else {
        console.log(0);
    }
}
