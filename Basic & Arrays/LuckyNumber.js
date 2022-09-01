let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

/*
Lucky Number
Given a sorted array of n integers, 
a lucky integer is an integer which has a frequency in the array equal to its value.

Return a lucky integer in the array. If there is no lucky integer return -1.

If you have multiple lucky integers, please return the first lucky integer in the array 
(lucky number with the least index).

Input
First line contains a positive integer n, denoting the number of elements in the array. 
It is followed by n lines. Each line contains one integer denoting an element in the array.

Output
One line specifying the lucky integer in the array

Example
Input:
4
2
2
3
4

Output:
2

Explanation
First line is 4, i.e. 4 elements in the array. The array is [2,2,3,4]. 
We can see that number 2 is repeating 2 times hence it is the lucky number which is our output
*/

/*Not working on portal:
let n = parseInt(readLine());
let arr = [];
let luckyInt = 1;

for (let i = 0; i < n; i++) {
    let num = parseInt(readLine());
    arr.push(num);
}
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i+1]) {   // at i = array last element, i+1 become undefine
        luckyInt += 1;
        } else {
            if (arr[i] === luckyInt) {
            console.log(luckyInt);
            break;
            } else {
                luckyInt = 1;
            }
        }
}    
if (luckyInt === 1) {
    console.log(-1);
}
*/
//Working method:
let n = parseInt(readLine());
let arr = [];
let luckyInt = 1;
let result = -1;

for (let i = 0; i < n; i++) {
    let num = parseInt(readLine());
    arr.push(num);
}
for (let i = 1; i < n; i++) {
    if (arr[i] === arr[i-1]) {
        luckyInt += 1;
        } else {
            if (arr[i-1] === luckyInt) {
            result = (arr[i-1]);
            break;
            } else {
                luckyInt = 1;
            }
        }    
}
//if last number is included in lucky number below if statement run
if (luckyInt === arr[n-1]) {
    result = luckyInt;
}
console.log(result);