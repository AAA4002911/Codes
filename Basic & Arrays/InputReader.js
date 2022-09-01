/*
Input reader -- Classes Practice Problems
Write an InputReader class that can read n strings/integers/floats. 
InputReader should have 3 methods: readStrings, readIntegers, readFloats. 
Each of these methods should take n as parameter and read n number of inputs, 
print them, one on each line, prepended with the index number of inputs taken, 
starting from 0, like indexes in an array. The index and the element should be space separated.

For floats, the output should be rounded to 2 decimal places only.

Inputs are handled by the template. You need to implement the methods readStrings, 
readIntegers, readFloats inside the InputReader class.

Input
First line contains an integer n, 0 < n <= 100. 
Second line contains a string which indicates the type of the array: 
string, integer, float. This is followed by n lines. 
Each line contains one element which could be string/integer/float based on the second line.

Output
The output should contain n lines. Each line contains the index of the array and the element.

Example
Input:

3
float
4.512313
3.612312
4.562222
Output:

0 4.51
1 3.61
2 4.56
The first line contains 3 indicating we have to take 3 inputs.
The second line indicates the input type i.e. float.
The next line is the 0th index element which is 4.512313. So the output for this will be 0 4.51. 
Notice that we are separating the index and the element using a space.
The next line is the 1st index element which is 3.612312. So the output for this will be 1 3.61.
The next line is the 2nd index element which is 4.562222. So the output for this will be 2 4.56.

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
class InputReader {
	//implement the methods here 
    readStrings(n) {
        for (let i = 0; i < n; i++) {
            let temp = readLine();
            console.log(i, temp);
        }
    }
    readIntegers(n) {
        for (let i = 0; i < n; i++) {
            let temp = parseInt(readLine());
            console.log(i, temp);
        }
    }
    readFloats(n) {
        for (let i = 0; i < n; i++) {
            let temp = parseFloat(readLine());
            console.log(i, temp.toFixed(2));
        }
    }

};

// -------- Do NOT edit anything below this line ----------

let num = parseInt(readLine());
let typeOfInput = readLine();
let NewInputReader = new InputReader();	
if (typeOfInput === "string") {
		NewInputReader.readStrings(num);
} else if (typeOfInput === "integer") {
		NewInputReader.readIntegers(num);
} else {
		NewInputReader.readFloats(num);
}