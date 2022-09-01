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


// Print name
// Read a name as input and print "Hello {name}"

// Input
// One line containing a string, i.e. name

// Output
// Hello {name}

// Example
// Input: Ravi

// Output: Hello Ravi

let name = readLine();
let greeting = "Hello " + name;
console.log(greeting);