/*

Good will

A good will triangle of order n is defined as follows:

Lets say n = 5,

    *
   $*$
  *$*$*
 $*$*$*$
*$*$*$*$*

You have been given a positive integer n, you need to print the good will triangle for the given integer.
Input Format:

One positive integer denoting n.
Output Format:

Print the resultant good will triangle of order n.
Example:

Input:

3

Output:

  *
 $*$
*$*$*

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

// More Optimised Code
// let n = parseInt(readLine());
// for (let i = 1; i <= n; i++) {
//     let row = '';
//     for (let j = n - i; j > 0; j--) {
//         row += ' ';
//     }
//     if (i == 1) row += '*';
//     for (let j = 1; j < i; j++) {
//         if (i % 2 == 0) {
//             row += '$';
//             row += '*';
//         }
//         else {
//             row += '*';
//             row += '$';
//         }
//     }
//     if (i % 2 == 0) row += '$';
//     else if (i != 1) row += '*';
//     console.log(row);
// }

let n = parseInt(readLine());

for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = n; j > i; j--) row += ' ';
    if (i % 2 == 0) {
        for (let j = 0; j < i - 1; j++) {
            if (j % 2 == 0) row += '$';
            else row += '*';
        }
    } else {
        for (let j = 0; j < i - 1; j++) {
            if (j % 2 == 0) row += '*';
            else row += '$';
        }
    }
    row += '*'
    for (let j = 0; j < i - 1; j++) {
        if (j % 2 == 0) row += '$';
        else row += '*';
    }
    
    console.log(row);
}