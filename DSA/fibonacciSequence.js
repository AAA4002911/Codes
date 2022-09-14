/*
Fibonacci Sequence
For a given integer n, print first n terms of the Fibonacci sequence.

In mathematical terms, the sequence Fn of Fibonacci numbers is defined by the recurrence relation

Fn = Fn-1 + Fn-2 with seed value F0 = 0 and F1 = 1.

The sequence looks like this

0, 1, 1, 2, 3, 5, 8, 13, 21............

Input
Single line with value n, the number of terms that needs to be printed.

Output
First n terms of Fibonacci sequence with one interger per line.

If no such values exist, print -1

Example
Input:

5

Output:

0

1

1

2

3
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
let fib = [0, 1];
if (n <= 0) console.log(-1);
else if (n == 1) console.log(fib[0]);
else {
    console.log(fib[0]);
    console.log(fib[1]);
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
        console.log(fib[i]);
    }
}