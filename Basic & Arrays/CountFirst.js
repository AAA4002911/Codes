let fs = require("fs");
let data = fs.readFileSync("D:/10x/10x/Input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// Count first
// You have been given a sequence of n integers. Lets say the given sequence is a0, a1, a2, a3 ... an-1.

// You need to find the number of occurrences of the first value (i.e. a0) in the given sequence.

// Input Format:
// First line contains an integer n, denoting the length of the sequence.

// Next n lines contains one integer each.

// Output Format:
// One integer, denoting the result, as mentioned above.

// Example:
// Input:

// 5
// 10
// 20
// 30
// 40
// 10
// Output:

// 2
// Explanation:

// First line contains 5, meaning the sequence has 5 integers.
// First element is 10.
// In the given sequence, 10 occurs 2 times. So, the output is 2.

let num = parseInt(readLine());
let RepeatCounter = 1;
let array = [];

for(let i = 0; i < num; i=i+1) {
    array[i] = parseInt(readLine());
}

// console.log(array);

for(let i = 1; i < num; i=i+1) {
    if (array[i] === array[0]) {
        RepeatCounter = RepeatCounter + 1;
    }
}

console.log(RepeatCounter);