let fs = require("fs");
let data = fs.readFileSync("D:\\10x\\10x\\input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

let array = (readLine().split(","));
// array = [1,3,5,9];
console.log(array[3]);
console.log(array[2]);
console.log(array[1]);
console.log(array[0]);
// var newarray = array.reverse();
// console.log(newarray);