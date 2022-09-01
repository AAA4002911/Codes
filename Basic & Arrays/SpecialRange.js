let fs = require("fs");
let data = fs.readFileSync("D:/10x/10x/Input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// Given a range, as [m, n] both inclusive, print all non-negative integers in the range.

// Input
// First line contains an integer which is starting value of range, say m

// Second line contains an integer which is ending value of range, say n

// Output
// Print all non-negative integers in that range. One integer per line.

// If no such integers exist, print -1.

// Example
// Input:

// -5

// 4

// Output:

// 0

// 1

// 2

// 3

// 4

//logic:
//1. take both the inputs.
//2. take the starting range and compare it zero.
//3. If it is less than zero don't print.
//4. If it is greater than or equal to zero, print.
//5. repeat the step 2 to 4 until the final range reach.
//6. If nothing is less than or equal to zero print -1.


let start = parseInt(readLine());
let end = parseInt(readLine());

    while (end >= start) {
        if (start >= 0) {
    console.log(start);
        }
    start += 1;
    }

    if (start < 0 && end < 0) {
        console.log("-1");
    }


