/*
area and perimeter of rectangle -- Classes Practice Problems
Design a class which has 2 methods. One which computes the Area of the Rectangle. 
The other computes the Perimeter of the Rectangle. 
You should be able to pass the length l and width w while creating the object for the class. 
For all infeasible values of length l and width w, print area and perimeter as 0

Your class should be named as Rectangle. Method to get area should be named as rectangle_area. 
Method to get perimeter should be named as rectangle_perimeter.

Input
First line contains an integer for the length l Second line contains an integer for the width w

Output
Two lines containing integers. 
First line containing the Area of the Rectangle Second line containing the Perimeter of the Rectangle

Example
Input:

3
2
Output:

6
10
First line is 3 representing the length. Second line is 2 representing the width. 
Area is 3*2 which is 6 as represented in the first line of the output. 
Perimeter is 2*(3 + 2) which is 10 as represented in the second line of the output.
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

// Your class should be named as `Rectangle`. 
// Method to get area should be named as `rectangleArea`.
// Method to get perimeter should be named as `rectanglePerimeter`.
// You should be taking `length` and `width` as inputs when creating the object for your class.
class Rectangle{
    constructor(l, w) {
        this.length = l;
        this.width = w;
    }
    rectangleArea() {
        let area = this.length * this.width;
        if (this.width <= 0 || this.length <= 0) area = 0;
        return area; 
    }
    rectanglePerimeter() {
        let perimeter = 2 * (this.length + this.width);
        if (this.width <= 0 || this.length <= 0) perimeter = 0;
        return perimeter;
    }
}

let length = parseInt(readLine());
let width  = parseInt(readLine());
let newRectangle =new Rectangle(length,width);
console.log(newRectangle.rectangleArea());
console.log(newRectangle.rectanglePerimeter());