/*
Excel Columns
In a parallel universe, there is a new system of english alphabets. It has 26 letters. The letters are reverse of that of actual english.

They are as follows:

Z, Y, X, W, .... , D, C, B, A

Find the excel title corresponding to the given column number, in this system of alphabets.

In this universe's excel title format 1st column is Z, 2nd column is Y ..... 26th column is A, 27th column is ZZ, 28th column is ZY and so on

Input
The first line contains an integer, N.

The next N lines each contain the integer, which represents column number.

Constraints
1 <= N <= 1000
1 <= Each column number <= 10^9
Output
N lines, for N column numbers. A string in one line, corresponding to each column number representing excel title in given system.

Example
Input:

4

1

26

27

100

Output:

Z

A

ZZ

XE


*/

let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

let alphabets = [0, 'Z', 'Y', 'X', 'W', 'V', 'U', 'T', 'S', 'R', 'Q', 'P', 'O', 'N', 'M', 'L', 'K', 'J', 'I', 'H', 'G', 'F', 'E', 'D', 'C', 'B', 'A'];

function converter(n) {
    let str = '';
    while (n > 0) {
        let prev_place = n % 26;
        if (prev_place == 0) {
            prev_place = 26;
            n -= 1;
        }
        str += alphabets[prev_place];
        n = Math.floor(n / 26);
    }
    return (str.split("").reverse().join(""));
    ;
}

let testcases = parseInt(readLine());
while (testcases--) {
    let number = parseInt(readLine());
    console.log(converter(number));
}