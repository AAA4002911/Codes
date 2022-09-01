let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

let num1 = parseInt(readLine());
let num2 = parseInt(readLine());

Add = num1 + num2;

console.log(Add);