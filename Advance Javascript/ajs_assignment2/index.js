/*
Unique Elements from array

Remove duplicates of an array and return an array of only
unique elements

Input:
An array containing numbers:-

Output:
Space separated unique elements from the array

Example:
Sample Input:-
[1, 2, 3, 5, 1, 5, 9, 1, 2, 8]

Sample Output:-
1 2 3 5 9 8

Sample Input:
[1, 1, 1, 4, 5, 6, 4, 5, 6, 7, 8, 9, 9]

Sample Output:
1 4 5 6 7 8 9

Explanation:-
Extra 1, 2, 5 were removed since they were occurring multiple times.
*/

let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

function removeDuplicates(arr) {
    arrSet = new Set(arr);
    console.log(...arrSet);
}

arr = readLine().split(" ").map(Number);
removeDuplicates(arr)