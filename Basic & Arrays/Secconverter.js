let fs = require("fs");
let data = fs.readFileSync("D:\\10x\\10x\\input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

let hour = parseInt(readLine());
let min = parseInt(readLine());

hour *= 60;
min *= 60;

Second = hour + min;
console.log(Second);