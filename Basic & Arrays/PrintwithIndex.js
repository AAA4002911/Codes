/*

print with index

You are given a function printWithIndex that takes a number and a string to print a message. 
You are also given a list that contains n strings. Write a function named printer that 
uses printWithIndex to print the list elements with their indices.

Input
First line contains n denoting the number of strings given, 0 <= n <= 100
This is followed by n lines, each denoting one string element of the lit

Output
The output must contain n lines.
Each line starts with the index value of the element, followed by a space then the element itself

Example
Input: 4
hello
cat
dog
raining

Output:
0 hello
1 cat
2 dog
3 raining

The first line is 4, denoting that there are 4 elements in the list. 
The elements are hello, cat, dog, raining. The output should be 4 lines. 
Each line has the index first, followed by the element itself. 
Index of hello is 0, index of cat is 1 and so on:
*/

let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ---------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

//You have to write a function with function name as printer which takes a list.
// you can use printWithIndex function to print
// you can start from now
function printer(string) {
    for (let i = 0; i < noOfStrings; i++) {
    printWithIndex(i, string[i]);
    }
}

//Do not change anything below this line

function printWithIndex(index,string){
    console.log(index, string);
}

let noOfStrings =parseInt(readLine());
let stringList=[];
for(let i = 0; i<noOfStrings; i++){
    stringList.push(readLine());
}
printer(stringList);