let fs = require("fs");
let data = fs.readFileSync("/media/aaa/New Volume/10x/10x/Input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

/*

Matrix 101

You have been given a matrix (2D array) of size n x m (n rows and m columns).
You need to find the sum of all odd numbers in the given matrix.
Input

The first line contains two integers denoting n and m respectively. 
The next line n lines contains m space seperated integers each, denoting the elements 
of the given matrix.
Output

One Integer, denoting the required sum.
Example

Input1:
3 4
1 2 3 4
5 6 7 8
9 0 5 3

Output1:
33

Explanation:

matrix =   [[1, 2, 3, 4],
            [5, 6, 7, 8],
            [9, 0, 5, 3]]

Sum of all odd elements = 1 + 3 + 5 + 7 + 9 + 5 + 3 = 33


*/

let input = readLine().split(" ");
let rows = parseInt(input[0]); 
let column = parseInt(input[1]);
let arr = [];
let sum = 0;
for (let i = 0; i < rows; i++) {
	arr.push(readLine().split(" "));
}
for (let i = 0; i < rows; i++) {
    for (let j = 0; j < column; j++) {
        if (parseInt(arr[i][j]) % 2 != 0) {
            sum += parseInt(arr[i][j]);
        }
    }
}
console.log(sum);