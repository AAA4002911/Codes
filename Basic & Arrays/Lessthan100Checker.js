let fs = require("fs");
let data = fs.readFileSync("D:\\10x\\10x\\input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

let num1 = parseInt(readLine());
let num2 = parseInt(readLine());

sum = num1 + num2;
if (sum < 100){
    console.log("True");
} else {
    console.log("False");
}