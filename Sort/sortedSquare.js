/*

Sorted_Square

Given an array of integers A, return an array of the squares of each number, in sorted non-decreasing order.
Input

First Line contains an integer n, denoting the size of array A. The next n lines contains n elements of the array A.
Output

n lines, Each line containing 1 element of the array A in the above mentioned order.
Example

Input:

5

-4

-1

0

3

10

Output:

0

1

9

16

100
Note:

    1 <= A.length <= 10000
    -10000 <= A[i] <= 10000


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
let arr = [];
for (let i = 0; i < n; i++) {
    let num = parseInt(readLine());
    arr.push(num * num);
}

function merge(C, p, q, r) {
    let n1 = q - p + 1;
    let n2 = r - q;
    let A = [], B = [];
    for (let i = 0; i < n1; i++) {
        A[i] = C[p + i];
    }
    for (let j = 0; j < n2; j++) {
        B[j] = C[q + 1 + j];
    }
    let i = 0, j = 0, k = p;
    while (i < n1 && j < n2) {
        if (A[i] <= B[j]) {
            C[k] = A[i];
            i++;
        }
        else {
            C[k] = B[j];
            j++;
        }
        k++;
    }
    while (i < n1) {
        C[k] = A[i];
        i++;
        k++;
    }
    while (j < n2) {
        C[k] = B[j];
        j++;
        k++;
    }
}

function merge_sort(arr, start, end) {
    if (start >= end) return;

    let mid = parseInt((start + end) / 2);
    merge_sort(arr, start, mid);
    merge_sort(arr, mid + 1, end);
    merge(arr, start, mid, end);
}

merge_sort(arr, 0, n - 1)
for (let i = 0; i < n; i++) {
    console.log(arr[i]);
}