let fs = require("fs");
let data = fs.readFileSync("D:/10x/10x/Input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
/*
Monotonic Sequence
Given a sequence of integers, check if it is monotonic or not. 
A sequence is called monotonic if it is either non-increasing or non-decreasing.

Input
First line contains an integer n, denoting the number of elements in the sequence.
Next n lines contain one integer each..

Output
1 if the given sequence is monotonic.
0 if the given sequence is not monotonic.

Example
Input:
5
3
12
34
34
56
Output:
1
*/

let n = parseInt(readLine());
let resultI = 0;
let resultD = 0;
let arr = [];

for (let i = 0; i < n; i++) {
    arr.push(parseInt(readLine()));
}

for (let i = 1; i < n; i++) {
    if (arr[i] >= arr[i - 1]) {
        resultI++;
    } else {
    resultI = 0;
    break;
    }
}
for (let i = 1; i < n; i++) {
    if (arr[i] <= arr[i - 1]) {
        resultD++;
    } else {
    resultD = 0;
    break;
    }
}   
if (resultI != 0 || resultD != 0) {
    console.log(1);
} else if (n == 1) {
    console.log(1);
} else {
    console.log(0);
}