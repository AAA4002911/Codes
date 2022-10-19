/*

Quick Sort

Like Merge Sort, QuickSort is a Divide and Conquer algorithm. It picks an element as pivot and partitions the given array around the picked pivot. There are many different versions of quickSort that pick pivot in different ways.

    Always pick first element as pivot.
    Always pick last element as pivot (implemented below)
    Pick a random element as pivot.
    Pick median as pivot.

(Here, you are free to choose any of them)

The key process in quickSort is partition(). Target of partitions is, given an array and an element x of array as pivot, put x at its correct position in sorted array and put all smaller elements (smaller than x) before x, and put all greater elements (greater than x) after x. All this should be done in linear time.

Implement this logic to complete quickSort function.
Input

First line contains one integer t, denoting number of testcases. Its is followed t lines:

    First line of each testcase contains one integer denoting n.
    Second line of each testcase contains n space seperated integers, denoting the elements of the array.

Output

One line for each testcase, denoting the space seperated values of sorted array.
Example

Input:

2
5
5 10 2 4 -2
4
2 89 90 7

Output:

-2 2 4 5 10
2 7 89 90

*/

let fs = require("fs");
const { start } = require("repl");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function partition(arr, start, end) {
    let pivot = arr[end];
    let i = start - 1;
    for (let j = start; j <= end - 1; j++) {
        if (arr[j] < pivot) {
            i++;
            swap(arr, i, j);
        }
    }
    swap(arr, i + 1, end);
    return (i + 1);
}


function quickSort(arr, start, end) {
    if (start < end) {
        let pos = partition(arr, start, end);
        quickSort(arr, start, pos - 1);
        quickSort(arr, pos + 1, end);
    }
}

let testcase = parseInt(readLine());
while (testcase--) {
    let len = parseInt(readLine());
    let arr = readLine().split(" ").map(x => parseInt(x));
    quickSort(arr, 0, len - 1);
    console.log(...arr);
}