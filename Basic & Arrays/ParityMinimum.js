let fs = require("fs");
let data = fs.readFileSync("D:/10x/10x/Input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

/*
Parity Minimum
Description
Given a sequence of positive integers, let S be the sum of the digits of the minimum element in the sequence.
If S is odd, the parity is 0, otherwise parity is 1.

Input
First line contains a positive integer n, denoting the number of elements in the sequence.
Next n lines contain one integer each, denoting the sequence.
Output
Either 0 or 1

Sample input
4
34
23
12
24
Sample output
0
Explanation
First line is 4, i.e. 4 elements in the array.
Minimum element of the array is 12. Sum of digits of 12 is 3. As it is odd, the parity is 0.
Sample input
2
33
44
Sample output
1
Explanation
First line is 2, i.e. 2 elements in the array.
Minimum element of the array is 33. Sum of digits of 33 is 6 . As it is even, the parity is 1.
*/
let n = parseInt(readLine());
let arr = [];
let minElement = 0;
for (let i = 0; i < n; i++) {
    arr.push(parseInt(readLine()));
}
for (let i = 1; i <= n; i++) {
    if (arr[i - 1] < arr[i]) {
        arr[i] = arr [i - 1];
        minElement = arr[i];
    } else {
        minElement = arr[i -1];
    }
}
let sum = 0;
while (minElement != 0) {
rem = minElement % 10;
sum += rem;
minElement = Math.floor(minElement/10);
}
if (sum % 2 == 0) {
    console.log(1);
} else {
    console.log(0);
}