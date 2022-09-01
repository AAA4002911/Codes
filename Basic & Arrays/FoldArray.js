let fs = require("fs");
const { arrayBuffer } = require("stream/consumers");
let data = fs.readFileSync("D:/10x/10x/Input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

/*
Fold Array
You are given an array of size n. Imagine the array as a length of rope. 
You have to fold the rope at the middle. 
You are also given an input integer numOfFolds that specifies 
the number of times you should fold your array.

To illustrate more, say the given array is 1,4,9. 
Folding it in the middle results in 10, 4 as 9 and 1 get combined by the fold.

Say the given array is 1,10,20,21,2. Folding it would lead to: 3, 31, 20 
as 2, 1 have combined and 10, 21 have combined.

Based on the numOfFolds repeat folding.

Input.
The first line contains n, the number of elements in the array.
This is followed by n lines, each containing one integer
The last line contains m, the number of folds to do.

Output
The first line contains k, the number of elements in the final array
This is followed by k lines, each containing one integer element of the output array

Example
Odd length array
Input:
5
-1
4
2
3
1
1

Output:
3
0
7
2

Even length array
Input:
6
3
1
6
7
2
3
1

Output:
3
6
3
13

Explanation
Odd number n
The first line contains 5 indicating 5 elements in the input array
The next 5 lines contain the array elements: -1, 4, 2, 3, 1
The last line contains 1 indicating one fold to be made
The first and last element merge: -1 + 1 = 0
The second and 4th element merge: 4 + 3 = 7
The middle element is 2. It remains unchanged because of the fold
So the result is 0, 7, 2

Even number n
The first line contains 6 indicating 6 elements in the input array
The next 6 lines contain the array elements: 3, 1, 6, 7, 2, 3
The last line contains 1 indicating one fold to be made
The first and last element merge: 3 + 3 = 6
The second and 5th element merge: 1 + 2 = 3
The third and 4th element merge: 6 + 7 = 13
So the result is 6, 3, 13
*/

let n = parseInt(readLine());
let arr = [];
for (let i = 0; i < n; i++) {
    arr.push(parseInt(readLine()));
}
let m = parseInt(readLine());

for (let j = 0; j < m; j++) {
    let arr_size = Math.floor(arr.length / 2);
    for (let i = 0; i < arr_size; i++) {
    arr[i] = arr[i] + arr[arr.length-1-i];
    }
    if (arr.length % 2 == 0) {
    arr.splice(arr_size, arr.length);
    } else {
    arr.splice(Math.ceil(arr.length / 2), arr.length);
    }
}
console.log(arr.length);
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
//Time complexity: O(n^2)
//Space complexity: O(n)