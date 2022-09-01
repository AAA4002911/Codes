/*
Rearrange Array
Given two arrays of integers, nums and indices, your task is to create a target array as per the following rules:

Initially target array is empty
For each nums[i], insert it into target array at the index indices[i]
Note: It is guaranteed that all the insertion operations will be valid.

Input
First line contains an integer n, denoting the size of the arrays.
Next n lines contain one integer each, denoting the elements of nums array.
Next n lines contain one integer each, denoting the elements of indices array.
Output
n lines, each containing one integer, denoting the target array.

Example
Input:

5
27
-1
21
93
-44
0
1
2
2
1
Output:

27
-44
-1
93
21
Explanation:
nums       index     target
27            0        [27]
-1            1        [27, -1]
21            2        [27, -1, 21]
93            2        [27, -1, 93, 21]
-44           1        [27, -44, -1, 93, 21]
*/

let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

let sizeOfarray = parseInt(readLine());
let nums = [];
for (let i = 0; i < sizeOfarray; i++) {
    nums[i] = parseInt(readLine());
}
let indices= [];
for (let i = 0; i < sizeOfarray; i++) {
    indices[i] = parseInt(readLine());
}    
let target = [];
for (let i = 0; i < sizeOfarray; i++) {
    target.splice(indices[i], 0, nums[i]);
}
for (let i = 0; i < target.length; i++) {

console.log(target[i]);
}