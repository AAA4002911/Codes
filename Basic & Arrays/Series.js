let fs = require("fs");
let data = fs.readFileSync("D:/10x/10x/Input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

/*
Series
Given a number N, find the N-th term in the series 1, 3, 6, 10, 15, 21...

Input
One integer, denoting N.

Output
One Integer, denoting the N-th term in the series 1, 3, 6, 10, 15, 21....

Example
Input1:

4
Output1:

10
Input2:

3
Output2:

6
*/


// logic
// diff ==> 1, 2, 3, 4, 5, 6,....
// for 4 ==> 4, 4+2, 6+3, 9+4

// 10-4 =6   0123
// 6-3 = 3   012

let n = 4;
let sum = (n + ((n - 1)* n / 2))
console.log(sum); 


// let nth_term = 0;
// for (let i = 1; i <= n; i++) {
//     nth_term += i;
// }
// console.log(nth_term);