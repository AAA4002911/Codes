let fs = require("fs");
let data = fs.readFileSync('/home/aaa/10x/10x/Input.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}


let name = readLine();
let greeting = "Hello " + name;
console.log(greeting);