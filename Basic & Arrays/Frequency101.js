let fs = require("fs");
let data = fs.readFileSync("D:/10x/10x/Input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

/*

Frequency 101

You have been given an array of size N, and a target integer k. You need to find 
the frequency (number of occurences) of the target k in the given array.
Input

First line contains two space seperated integers, d
enoting N and k respectively. The next line contains N space seperated integers, 
denoting the elements of the given array.
Output

One Integer, denoting the required frequency.
Example

Input1:
7 0
1 0 6 8 9 0 -34

Output1:
2

Explanation:
0 is occuring two times in the given array.
*/

let input = readLine().split(" ");
let n = parseInt(input[0]);
let k = parseInt(input[1]);

let arr = [];
let nums = readLine().split(" ");
for (let i = 0; i < n; i++) {
    arr.push(parseInt(nums[i]));
}

let count = 0;
for (let i = 0; i < arr.length; i++) {
    if ((arr[i]) === k) { 
    count++;
    }
}
console.log(count);