let fs = require("fs");
let data = fs.readFileSync("D:/10x/10x/Input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
/*
Find if given number is prime
Find if the given integer is prime number.

Input
FirstLine contains an interger specifying no. of test cases. 
Each line contains integers specifying value of number in each test case.

Output
Yes if number is prime. No is not for each testcase.

Example
Input: 
3
2
4
5

Output: 
Yes
No
Yes
*/

let test_cases = parseInt(readLine());
let result = "Yes";

for (let i = 0; i < test_cases; i++) {
    let num = parseInt(readLine());
if (num <= 0) {
    result = "No";
}
    for (let j = 2; j < num; j++) {
        if (num % j === 0) {
            result = "No";
            break;
        }
    result = "Yes";
    }
console.log(result);
}