/*
Chess Play
Description
You are given a 10X10 chessboard with a knight on coordinate (I,J). You have to find the number of blocks on the chessboard that the knight can be at in exactly n moves

Input
Input will consist of three space seperated integers I,J,n

Output
Print a single integer denoting the number of blocks on the chessboard that the knight can be at in exactly n moves.

Example
Input:

3 3 1

Output:

8

NOTE
For the 10X10 chessboard (1, 1) is the top-left corner(1,10), is the top-right corner and (10,10) is the bottom-right corner.
*/

let fs = require("fs");
const { machine } = require("os");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

let input = readLine().split(" ");
let I = parseInt(input[0]);
let J = parseInt(input[1]);
let N = parseInt(input[2]);
let cb = 10;

let chessboard = [];
for (let i = 0; i < cb; i++) {
    chessboard.push([]);
}
for (let i = 0; i < cb; i++) {
    for (let j = 0; j < cb; j++) {
        chessboard[i][j] = 0;
    }
}


let X = [1, -1, 2, -2, 1, -1, 2, -2];
let Y = [2, 2, 1, 1, -2, -2, -1, -1];

function knight(i, j, n, cb) {
    if (n == 0) {
        if (chessboard[i][j] == 1) return 0;
        chessboard[i][j] = 1;
        return 1;
    }

    let result = 0;
    for (let k = 0; k < 8; k++) {
        let x = i + X[k];
        let y = j + Y[k];

        if (x >= 0 && y >= 0 && x < cb && y < cb)
        result += knight(x, y, n - 1, cb);
    }

    return result;
}

console.log(knight(I - 1, J - 1, N, cb));