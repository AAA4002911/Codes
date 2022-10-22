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



function merge(A, B) {
    let n1 = A.length;
    let n2 = B.length;
    let C = [];
    let i = 0, j = 0, k = 0;
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
    return C;
}

let testCase = parseInt(readLine());
let n = parseInt(readLine());
let arr1 = readLine().split(" ").map(Number);
testCase -= 1;
while (testCase--) {
    let arr2 = readLine().split(" ").map(Number);
    arr1 = (merge(arr1, arr2));
}
console.log(...arr1);