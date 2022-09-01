let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

/*

signum

A signum function returns 1 for numbers greater than zero
and -1 for numbers less than zero and 0 for an input of 0. 
Write a signum implementation that takes a float N and returns an integer.

Input
One line containing a decimal number.
N

Output
One integer, denoting the output value.

Example
Input:
-0.87

Output:
-1
*/

function signum(number){
  
if (number > 0) return 1;
else if (number < 0) return -1;
else if (number === 0) return 0;
}
let testInput = parseFloat(readLine());
console.log(signum(testInput));