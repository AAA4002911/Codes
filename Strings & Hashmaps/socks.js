/*

Socks

You have n socks in the cupboard as a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.
Input Format

The first line contains an integer n, the number of socks represented in arr. The second line contains n space-separated integers, arr[i], the colors of the socks in the pile.
Output Format

A single integer denoting the number of pairs.
Sample Input

9
10 20 20 10 10 30 50 10 20

Sample Output

3

Explanation

The Three pair of socks

There are three pairs of socks.
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

function socks(arr, n) {
    let temp = new Set();
    let pairs = 0;
    for (let i = 0; i < n; i++) {
        if (!temp.has(arr[i])) {
            temp.add(arr[i]);
        }
        else {
            pairs++;
            temp.delete(arr[i]);
        }        
    }
    return pairs;
}

let n = parseInt(readLine());
let arr = readLine().split(" ").map(Number);

console.log(socks(arr, n));