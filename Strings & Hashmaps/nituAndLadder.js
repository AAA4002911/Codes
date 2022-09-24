/*
Nitu & Ladder
Nitu is a civil engineer. She wants to make the paper design of the ladder, by writting a program. She already know the number of steps in the ladder n.

For example, this is the ladder of size n = 4:

   #
  ##
 ###
####
Its base and height are both equal to n. It is drawn using # symbols and spaces. The last line is not preceded by any spaces.

Write a program that prints a staircase of size n.

Input Format
A single integer, n, denoting the size of the staircase.

Constraints
0 < n ≤ 100
Output Format
Print a staircase of size n using # symbols and spaces.

Note: The last line must have 0 spaces in it.

Sample Input
6
Sample Output
     #
    ##
   ###
  ####
 #####
######
Explanation
The staircase is right-aligned, composed of # symbols and spaces, and has a height and width of n = 6.
*/

let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

let n = parseInt(readLine());

for (let i = 1; i <= n; i++) {
    let row = '';
    for (let k = n - i; k > 0; k--) {
        row += ' ';
    }
    for (let j = n - i; j < n; j++) {
        row += '#';
    }
    console.log(row)
}