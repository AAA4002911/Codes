let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
// Triangle Angle
// Given two integers a and b denoting the two angles of a triangle (in degrees), find the third angle of the triangle (in degrees).

// Note: The given angles will always be of a valid triangle.

// Input
// First line contains an integer denoting a, the first angle.

// Second line contains an integer denoting b, the seocnd angle.

// Output
// One Integer, denoting the third angle of the triangle.

// Example
// Input:

// 30
// 110
// Output:

// 40

let FirstAngle = parseInt(readLine());
let SecondAngle = parseInt(readLine());

let ThirdAngle = (180 - (FirstAngle + SecondAngle));

console.log(ThirdAngle);