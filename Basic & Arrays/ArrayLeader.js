/*
Array Leader
Given an array A, containing n distinct integers, you have to find all the leaders in A.

An element is a leader if it is strictly greater than all the elements to its right side.

NOTE:
The rightmost element is always a leader.

Input
First line contains an integer n, denoting the size of the array.
Next n lines contain one integer each, denoting the elements of the array.
Output
Print all the leader elements, one element on each line.

The leader elements must be printed in the reverse order i.e., 
the rightmost leader element must be printed in the first line, 
second rightmost leader element in the second line and so on and the 
left most leader element in the last line.

Example
Input:
6
16
17
4
3
5
2

Output:
2
5
17

Explanation:
16 is not greater than all the elements to its right side (it is less than 17). So, it is not a leader.
17 is strictly greater than all the elements to its right side. So, it is a leader.
4 is not greater than all the elements to its right side (it is less than 5). So, it is not a leader.
3 is not greater than all the elements to its right side (it is less than 5). So, it is not a leader.
5 is strictly greater than all the elements to its right side. So, it is a leader.
2 is strictly greater than all the elements to its right side. So, it is a leader.
So, the leaders are 17, 5 and 2.
Since we have to print the leaders in the reverse order, the output will be
2
5
17
*/

let fs = require("fs");
const { arrayBuffer } = require("stream/consumers");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

let n = parseInt(readLine());
let arr = [];
for (let i = 0; i < n; i++) {
    arr.push(parseInt(readLine()));
}
let last = arr[arr.length - 1];
console.log(last);
for (let i = arr.length - 2; i >= 0; i--) {
    if (arr[i] > last) {
        console.log(arr[i]);
        last = arr[i];
    }
}