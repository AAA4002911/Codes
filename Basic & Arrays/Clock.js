let fs = require("fs");
let data = fs.readFileSync("D:/10x/10x/Input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

/*
Given two positive integers num1 and num2, 
the task is to find the sum of the two numbers on a 12 hour clock rather than a number line.

Input
Two space seperated values denoting num1, num2 respectively.

Output
One integer, denoting the required result.

Example
Input1:

5 7
Output1:

12
Input2:

5 10
Output2:

3
*/

let num = readLine().split(" ");
let num1 = parseInt(num[0]);
let num2 = parseInt(num[1]);
if (num1 > 12) {
    num1 = num1 % 12;
} if (num2 > 12) {
    num2 = num2 % 12;
}
let sum = (num1 + num2);
if (sum > 12 ) {
    console.log(sum % 12);
} else {
    console.log(sum);
}

//More optimised
/*
let time = readLine().split(" ");
let time1 = parseInt(time[0]);
let time2 = parseInt(time[1]);

if((time1 + time2) % 12 === 0) {
    console.log(12);
} else {
    console.log((time1 + time2) % 12);
}
*/

