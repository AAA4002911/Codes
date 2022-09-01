/*
Increasing Subarr
Given an array containing n numbers. 
The problem is to find the length of the longest contiguous subarray 
such that every element in the subarray is strictly greater than its previous element 
in the same subarray and also print the resulting starting and ending index.

Input
Fisrt line has N i.e number of elements then follow N numbers in a line. (N >= 2)

Output
Print a list of 3 elements where the first one is the length of 
the subarray and the next 2 are the starting and the ending index 
Note : all elements of the list must be printed in the same line.

Example
Input: 
5
2 7 6 11 20

Output:
3 2 4

The longest Increasing subarray is [6, 11, 20] and the starting and ending indices are [2, 4]


*/
let fs = require("fs");
const { start } = require("repl");
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
let arr = readLine().split(" ").map(Number);
let current_array_length = 1;
let longest_array_length = 1;
let index = 0;
for (let i = 1; i < n; i++) {
    if (arr[i] > arr[i - 1]) {     
        current_array_length++;
    } else {
        if (current_array_length > longest_array_length) {
            longest_array_length = current_array_length;
            index = i;
            }
    current_array_length = 1;
    }
    if (current_array_length > longest_array_length) {
        longest_array_length = current_array_length;
        index = i;
    }
}

console.log(longest_array_length, index - longest_array_length + 1,index);