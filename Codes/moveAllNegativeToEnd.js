/*
Input : 
N = 8
arr[] = {1, -1, 3, 2, -7, -5, 11, 6 }
Output : 
1  3  2  11  6  -1  -7  -5
*/

let n = 8;
let arr = [-5, 7, -3, -4, 9, 10, -1, 11];

let array = [];
for (let i = 0; i < n; i++) {
    if (arr[i] > 0) array.push(arr[i]);
}
for (let i = 0; i < n; i++) {
    if (arr[i] < 0) array.push(arr[i]);
}

console.log(array)