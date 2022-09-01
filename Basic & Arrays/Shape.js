/*
Shape
Define a class named Rectangle:

It should have length and width as the properties.
It should have a method, named calculatePerimeter, 
which should return the perimeter of the rectangle.
It is given that, length and width will always be valid.
You don't need to worry about input/output and object of the class. 
The given template will take care of it.

The input will contain the length and width.

Input
One line containing two space seperated integers, denoting length and width respectively.

Output
Print perimeter of the given rectangle.

Example
Input1:

10 20
Output1:

60
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

// Define the required class here...
function Rectangle(l , w) {
    this.length = l;
    this.width = w;
    this.calculatePerimeter = function () {
        let perimeter = 2 * (this.length + this.width);
        return perimeter;
    } 
}

// DO NOT CHANGE ANYTHING BELOW THIS LINE
let input=readLine().split(" ");
let length = parseInt(input[0]);
let width = parseInt(input[1]); 
let rectangle =new Rectangle(length, width);
console.log(rectangle.calculatePerimeter());