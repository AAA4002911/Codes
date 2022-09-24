/*

Second largest integer

For a given set of integers print the second largest integer.
Input

First line contains total number of integers n (n>0)

Next n lines contain one integer on each line
Output

One line containing the second largest integer
Example

Input:

4

89

23

-10

69

Output:

69
*/
let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}


let n = parseInt(readLine());
let arr = [];
for (let i = 0; i < n; i++) {
    arr.push(parseInt(readLine()));
}
if (arr.length > 1) {
arr.sort(function (a,b) {return a-b});
console.log(arr[arr.length - 2]);
}
else console.log(arr[0]);


// let max = 0, max2 = 0;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) max = arr[i]
// }

// let count = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max2 && arr[i] != max) max2 = arr[i];
//     if (arr[i] == max) count++;
// }
// if (arr.length == 1) console.log(arr[0]);
// else if (count > 1) console.log(max);
// else console.log(max2);

/*
//Using sorting
function sort(arr) {
    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] < arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

sort(arr);
if (arr.length > 1) console.log(arr[arr.length -2])
else console.log(arr[0]);
*/

