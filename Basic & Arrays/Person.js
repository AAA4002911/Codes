/*
Person
Define a class named Person, which should have the name and age as the properties. 
You don't need to worry about input/output and object of the class. 
The given template will take care of it.

The input will contain the name and age. The same will be printed in seperate lines as output.

Input
One line containing two space seperated values, denoting name and age respectively.

Output
Print name and age in newline each.

Example
Input:

Jonny 15
Output:

Jonny
15
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
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

// DO NOT CHANGE ANYTHING BELOW THIS LINE
let inputString = readLine().split(" ");
let character = new Person(inputString[0],inputString[1]);
console.log(character.name);
console.log(character.age);