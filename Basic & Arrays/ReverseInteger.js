let fs = require("fs");
const { arrayBuffer } = require("stream/consumers");
let data = fs.readFileSync("D:/10x/10x/Input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

//Integer Form:

let num = parseInt(readLine());
let reverseNum = 0;
let flag = 0;

if (num < 0) {
    num *= -1;
    flag = 1; 
}
// for (num; num > 0; num = parseInt(num/10) ) {
//     let rem = num % 10;
//     reverseNum = reverseNum * 10 + rem;
// }
while (num > 0) {
    let rem = num % 10;  // 3  2  1
    reverseNum = reverseNum * 10 + rem; //0+3 32 321
    num = Math.floor(num / 10);   //12 1 0
    }
if (flag == 1) {
    console.log(reverseNum * -1);
} if (flag == 0) {
    console.log(reverseNum);
}

//String Method:
/*
let n = readLine().split("");
let i = n.length - 1;
let newStr = "";
if (n[0] == "-" && n[i] != "0") {
    newStr = "-";
    for (i ; i > 0; i--) {
    newStr = newStr + n[i];
    }
} if (n[0] == "-" && n[i] == "0") {
    newStr = "-";
    for (i = i -1; i > 0; i--) {
    newStr = newStr + n[i];
    }    
} if (n[i] != "0" && n[0] != "-") {
    newStr = n[i];
    for (i = i -1 ; i >= 0; i--) {
        newStr = newStr + n[i];
    }
} if (n[i] == "0") {
    newStr = n[i-1];
    for (i = i -2; i >= 0; i--) {
        newStr = newStr + n[i];
    } if (n == 0) {
        newStr = "0";
    }
}
console.log(newStr);
*/