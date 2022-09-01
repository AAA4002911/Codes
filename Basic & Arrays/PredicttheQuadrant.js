const { Console } = require("console");
let fs = require("fs");
let data = fs.readFileSync("D:/10x/10x/Input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// Predict the quadrant
// Given a point on a two dimensional plane, predict the quadrant to which it belongs. Quadrants are named as Q1, Q2, Q3 and Q4. Given a point P(x, y), quadrant of P is defined as follows.

// Q1, if x > 0 and y > 0
// Q2, if x < 0 and y > 0
// Q3, if x < 0 and y < 0
// Q4, if x > 0 and y < 0
// Input
// First line contains a positive integer n, denoting the number of test cases. It is followed by n lines. Each of the n lines contains two space separated integers x and y. Assume that neither x nor y is 0.

// Output
// n lines containing the quadrant to which the corresponding point belongs.

// Example
// Input:

// 2
// 2 -9
// 1 3
// Output:

// Q4
// Q1
// First line is 2, which means there are 2 test cases. Next 2 lines will contain one point each.

// First point is (2, -9). It belongs to fourth quadrant, so we should print Q4.

// Second point is (1, 3). It belongs to first quadrant, so we should print Q1.


let Test_case = parseInt(readLine());
let i = 0;
while (i < Test_case) {
        let point = readLine().split(" ");
        let x = parseInt(point[0]);
        let y = parseInt(point[1]);
    
if (x > 0 && y > 0) {
    console.log("Q1"); }
else if (x < 0 && y > 0) { 
    console.log("Q2"); }
else if(x < 0 && y < 0) { 
    console.log("Q3"); }
else if (x > 0 && y < 0) {
    console.log("Q4"); }
    
    i++;
}