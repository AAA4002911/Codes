/*
merge_list
Description

Given M sorted lists each containing N elements print them in sorted order efficiently.
Input

The first two lines of the input consists of two numbers M and N. The next M lines contain N space separated integers each.
Output

Print M*N integers sorted in ascending order.
Constraints

M>1
N>1

Sample cases

Input

3
4
2 6 12 34 
1 9 20 1000 
23 34 90 2000

Output 1 2 6 9 12 20 23 34 34 90 1000 2000
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

let testCase = parseInt(readLine());
let n = parseInt(readLine());
let result = [];
while (testCase--) {
    let arr = readLine().split(" ").map(Number);
    for (let i = 0; i < n; i++) {
        result.push(arr[i]);
    }
}
console.log(result)
merge_sort(result, 0, result.length - 1);
console.log(...result)