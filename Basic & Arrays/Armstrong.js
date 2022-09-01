let fs = require("fs");
let data = fs.readFileSync("D:/10x/10x/Input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
/* Question:
Armstrong
For a given 3 digit number, find whether it is armstrong number or not. 
An Armstrong number of three digits is an integer such that the sum of the cubes of its 
digits is equal to the number itself. Print Yes if it is a armstrong number else print No.

Input
One integer, denoting the 3 digit number.

Output
One string, denoting Yes or No.

Example
Input1:

153
Output1:

Yes
Explanation:

1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
*/

let num = readLine();
let arr = num.split("");
let sum = 0;

for (let i=0 ; i<arr.length ; i++) {
   sum += (parseInt(arr[i]))**3;
}
if (sum == num) {
    console.log("Yes");
} else {
    console.log("No");
}