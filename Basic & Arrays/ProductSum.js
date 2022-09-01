let fs = require("fs");
let data = fs.readFileSync("D:/10x/10x/Input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
/*
Product & SUM
Given an integer n, return the difference between the product of its digits and the sum of its digits. 
Assume that n is a non-negative integer.

Input
One line containing an integer, denoting n

Output
One line containing an integer, denoting the difference between product and sum of the digits of n

Example
Input

234

Output

15

Explanation

Product of digits = 2 * 3 * 4 = 24 
Sum of digits = 2 + 3 + 4 = 9 
Result = 24 - 9 = 15
Input

4421

Output

21

Explanation

Product of digits = 4 * 4 * 2 * 1 = 32 
Sum of digits = 4 + 4 + 2 + 1 = 11 
Result = 32 - 11 = 21
*/

let num = readLine();
let n = num.split("");
let product = 1;
let sum = 0;

for (let i=0 ; i<n.length ; i++) {
    product *= parseInt(n[i]);
    sum += parseInt(n[i]);
}
console.log(product - sum);