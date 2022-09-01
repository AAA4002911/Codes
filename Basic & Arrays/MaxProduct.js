/*
MAX product

You are given two arrays A and B. 
You have to select two integers, one from A and one from B. 
Let them be A[i] (0 <= i < length of array A) and B[j] (0 <= j < length of array B). 
you have to find the maximum value of |A[i]XB[j]|.

note:- |x| is absolute value of x.

Input
first line contains the size of the array A which is followed by size of array B in line two. 
Next two lines contain the two arrays A,B as space separated values.

Note : Array length cannot be zero.

Output
Print the maximum value of |A[i]XB[j]|

Example
Input:
5
8
-3 4 5 2 1
7 4 2 4 5 3 -10 6

Output:
50

explanation
choose 5 from first A and -10 from B, 
the product is -50 whose absolute value is 50, which is the maximum possible product.
*/

let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
	idx++;
	return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

//Using array:
let A_length = parseInt(readLine());
let B_length = parseInt(readLine());

let A = [];
let A_list = readLine().split(" ");
for (let i = 0; i < A_length; i++) {
    A_list[i] = parseInt(A_list[i]);
    if (A_list[i] < 0) A.push((A_list[i]) * -1);
    else A.push(A_list[i]);
}
let B = [];
let B_list = readLine().split(" ");
for (let i = 0; i < B_length; i++) {
    B_list[i] = parseInt(B_list[i]);

    B.push(Math.abs(B_list[i]));    //Math.ab function is mod |x|
}
let A_max = 0;
for (let i = 0; i < A_length; i++) {
    let temp = A[i];
    if (temp > A_max) A_max = temp;
}
let B_max = 0;
for (let j = 0; j < B_length; j++) {
    let temp = B[j];
    if (temp > B_max) B_max = temp;
}    
console.log(A_max * B_max);


//Using factory function:
/*
let A_list = readLine().split(" ");
let B_list = readLine().split(" ");
//function factory:
let array_creator = function(array) {
    let arr = [];
    for (let i = 0; i < array.length; i++) {
        array[i] = parseInt(array[i]);
        if (array[i] < 0) arr.push(array[i] * -1);
        else arr.push(array[i]);
    }
    return arr;
}
let A = array_creator(A_list);
let B = array_creator(B_list);
//factory function:
let max_of = function(arr) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i]; 
    } return max;
}
console.log(max_of(A) * max_of(B));
*/