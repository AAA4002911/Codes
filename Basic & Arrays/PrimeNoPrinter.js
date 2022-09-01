let fs = require("fs");
const { arrayBuffer } = require("stream/consumers");
let data = fs.readFileSync("D:/10x/10x/Input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}


let n = parseInt(readLine());

for (let i = 0; i <= n; i++) {
    let prime = true;
    let num = i;

if (num <= 1) {
    prime = false;
}
    for (let j = 2; j < num; j++) {
        if (num % j === 0) {
            prime = false;
            break;
        }
    }   
if (prime == true) {
    console.log(num);
}
}

// By creating a zero filled array version:
// let n = parseInt(readLine());
// let arr = [];
// for (let i=0 ; i<n ; i++) {
//     arr.push(0);
// }
// arr[1] = 1;

// for (let i=2 ; i <= n ; i++) {
//     if (arr[i] == 0) {
//         console.log(i);
//         for (let j=2*i ; j<=n ; j=j+i) {
//             arr[j] = 1;
//         }
//     }
// }

//Module for Prime:
/*
let n = parseInt(readLine());
let prime = true;
//**loop for prime*
for (let j=2 ; j < Math.sqrt(n); j++) {
    if (n % j == 0) {
        prime = false;
        break;
    }
}
prime == true ? 
console.log("Prime") : 
console.log("Not Prime")
*/

//Prime Number Printer with range:
/*
let lower = parseInt(readLine());
let higher = parseInt(readLine());
let prime = true;
let prime_arr = [];
let arr = [];
for (let num = lower; num <= higher; num++) {
    arr.push(num);
    
if (num <= 1) {
    prime = false;
}
    for (let j = 2; j < num; j++) {
        if (num % j === 0) {
            prime = false;
            break;
        }
    prime = true;
    }
if (prime == true) {
    prime_arr.push(num);
}
}
// console.log(arr);
console.log(prime_arr);
*/