/*
SUM of Multiples

Given a sequence of n positive integers and a positive integer i, 
find the sum of all multiples of i in the given sequence.

Input
First line contains n, n>0, denoting the length of the given sequence. 
It is followed by n lines, containing one positive integer each. This is followed by i, i>0.

Output
One positive integer, 
which is the sum of all the elements in the given sequence which are multiples of i.

Example
Input:

    5
    22
    96
    33
    12
    48
    11
Output: 55

First line contains 5, 
which means the given sequence contains 5 integers. 
The following 5 lines is the given sequence, viz. [22, 96, 33, 12, 48]. 
This is followed by 11, which means we need to compute the sum of every element 
which is divisible by 11 in the given sequence, which is (22 + 33), i.e. 55. So, 
the expected output is 55.
*/

let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

//Write  your function here
function sumOfMultiples(arr, num) {
    let result = 0;

    for (let i = 0; i < arr.length; i++) {        
        if (arr[i] % num == 0) {
            result += arr[i];
        }
    }
    return result;
}

// DO NOT CHANGE ANYTHING BELOW THIS LINE
let range =parseInt(readLine());
let numbers=[];
for(let each=0;each<range;each++){
  numbers.push(parseInt(readLine()));
}
let mult=parseInt(readLine());
console.log(sumOfMultiples(numbers, mult));