let fs = require("fs");
let data = fs.readFileSync("D:\\10x\\10x\\input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

let num = parseInt(readLine());
var check;
check = num % 5;

if (check === 0) {
    console.log("Divisible");
} else {
    console.log("Not Divisible");
}