let fs = require("fs");
let data = fs.readFileSync("D:/10x/10x/Input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

/*
Multiple
You are given a positive integer N. Find the minimum positive integer divisible by both 2 and N.

Constraints
1 <= N <= 109
Input
One Integer, denoting N.

Output
One Integer, denoting the minimum positive integer divisible by both 2 and N.

Example
Input1:
3

Output1:
6

Explanation1:
6 is divisible by both 2 and 3. Also, there is no positive integer less than 6 that is divisible by both 2 and 3. 
Thus, the answer is 6.

Input2:
999999999

Output2:
1999999998
*/

//Optimised Algorithm O(1):
let n = parseInt(readLine());
if (n % 2 == 0) {
    console.log(n);
} else {
console.log(2*n);
}

//Actual Algorithm O(n):
/*
let n = parseInt(readLine());

for (let num = 1; num > 0; num++) {
    if (num % n == 0) {
        if (num % 2 == 0) {
            console.log(num);
            break;
        }
    } 
    if (n == 0) {
        console.log(0);
        break;
    }
}
*/
