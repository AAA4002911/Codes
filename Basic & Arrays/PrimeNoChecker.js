let fs = require("fs");
let data = fs.readFileSync("D:/10x/10x/Input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

let n = parseInt(readLine());
if (n == 0 || n == 1) {
    console.log("Number is not prime."); // if (n <= 1)
} else {
let i = 2;
while (i < n) {
    if (n % i == 0) {
        console.log("Number is not prime.");
        console.log("Divisible by "+ i);
        break;
        }
    i++;
}
if (i == n) {
    console.log("Number is prime.");
    }
}