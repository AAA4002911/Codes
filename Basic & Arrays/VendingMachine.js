let fs = require("fs");
let data = fs.readFileSync("D:/10x/10x/Input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format
// Vending machine
// Rahul runs a shop that sells soft drinks. He wants help in building a vending machine that asks the customer's name and choice of soft drink. He then wants the machine to greet the user and display their order. Write a program that Rahul can use for the vending machine.

// Input
// First line contains the customer's name

// Second line contains the choice of the customer

// Output
// Two lines in the following format.

// Hello <customer name> !!!
// You ordered <customer order>.
// Example
// Input:

// Rajesh
// Coca cola
// Output:

// Hello Rajesh !!!
// You ordered Coca cola.

let name = readLine();
let drinkname = readLine();
let greetname = "Hello " + name + " !!!";
let choicedecln = "You ordered " + drinkname + ".";
console.log(greetname);
console.log(choicedecln);