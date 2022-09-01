/*
Car
Define a class named Car, which should have the name and model as the properties. 
You don't need to worry about input/output and object of the class. 
The given template will take care of it.

The input will contain the name and model. Their default values should be Audi and A4 respectively.

Input
First line contains an integer, either 1 or -1. If the first line is 1, then:

One line containing two space separated values, denoting name and model respectively.
Output
Print name and model in newline each.

Example
Input1:
1
Ford C4

Output1:
Ford
C4

Input2:
-1

Output2:
Audi
A4

Explanation
Example 1

First line is 1, which denotes space separated values as input to the class.

Ford C4 denotes the values for name and model respectively and we print name 
and model in new line each.

Example 2

First line is -1, which denotes we need to print the default values line by line.
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
class Car {
    constructor(n, m) {
        this.name = n;
        this.model = m;
        if (this.name == undefined) {
            this.name = "Audi";
            this.model = "A4";
        }
    }
}


// DO NOT CHANGE ANYTHING BELOW THIS LINE
let flag = parseInt(readLine());
if (flag === 1){
  let inputString = readLine().split(' ');
  vehicle = new Car(inputString[0], inputString[1]);
}
else{
  vehicle = new Car();
}

console.log(vehicle.name);
console.log(vehicle.model);