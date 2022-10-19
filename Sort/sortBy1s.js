/*

Sort By 1s

Given a list of integers (each value >= 0) sort them according to the number of 1s present in their binary form.

Sort them in descending order of the number of 1s present in their binary form.

If two numbers have the same number of 1s, the number first occuring in the list is treated as larger one among them.
Input

First line contains N, number of integers in the list

Second lines N space separated number
Output

Single line with N space separated integers sorted according to number of 1s.
Example

Input:

6

1 2 3 4 5 6

Output:

3 5 6 1 2 4
Explanation

In binary form

1 - 1

2 - 1 0

3 - 1 1

4 - 1 0 0

5 - 1 0 1

6 - 1 1 0

3, 5, 6 has same number of ones but 3 occured first followed by 5 and 6. Remaing numbers has 1 one.

So, 3 5 6 1 2 4

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

let n = parseInt(readLine());
let arr = readLine().split(" ").map(x =>(parseInt(x)));

function dec2bin(dec) {
    let binary = (dec.toString(2));
    let sum = 0;
    for (let i = 0; i < binary.length; i++) {
        sum += parseInt(binary[i]);
    }
    return sum;
}

let bucket = new Map();
for (let i = 0; i < n; i++) { 
   bucket.set(arr[i], dec2bin(arr[i]));
}
bucket = ([...bucket.entries()].sort((a, b) => b[1] - a[1]));
for (let i = 0; i < bucket.length; i++) {
    process.stdout.write(`${bucket[i][0]} `);
}
