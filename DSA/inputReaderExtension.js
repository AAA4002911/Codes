/*
Input Reader extension with Static method-- Classes Practice Problems

Extend the Inputreader class to have another method which is a static method printer. The class should still have previously mentioned methods: read_strings, read_integers, read_floats. But you should use printer to print the array elements, one on each line, prepended with the index of the element. So all the printing functionality must be present in the printer method.
Previous description for reference

Write a Inputreader class that can read n strings/integers/floats. Inputreader should have 3 methods: read_strings, read_integers, read_floats. Each of these methods should read the inputs, print the array elements, one on each line, prepended with the index of the element. The index and the element should be space separated.

For floats, the output should be 2 decimal places only.
Input

First line contains an integer n, 0 < n <= 100. Second line contains a string which indicates the type of the array: string, integer, float. This is followed by n lines. Each line contains one element which could be string/integer/float based on the second line.
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

The first line contains 3 indicating there are 3 elements in the array.
The second line indicates the array type i.e. float.
The next line is the 0th index element which is 4.512313. So the output for this will be 0 4.51. Notice that we are separating the index and the element using a space.
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


class InputReader {
    static printer(index, value) {
        console.log(index, value);
    }
    static readStrings(n) {
        for (let i = 0; i < n; i++) {
            let temp = readLine();
            this.printer(i, temp);
        }
    }
    static readIntegers(n) {
        for (let i = 0; i < n; i++) {
            let temp = parseInt(readLine());
            this.printer(i, temp);
        }
    }
    static readFloats(n) {
        for (let i = 0; i < n; i++) {
            let temp = parseFloat(readLine());
            this.printer(i, temp.toFixed(2));
        }
    }
};

let num = parseInt(readLine());
let typeOfInput = readLine();

if (typeOfInput === "string") {
		InputReader.readStrings(num);
} else if (typeOfInput === "integer") {
		InputReader.readIntegers(num);
} else {
		InputReader.readFloats(num);
}