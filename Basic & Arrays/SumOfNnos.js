let fs = require("fs");
let data = fs.readFileSync("D:/10x/10x/Input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
// Method using Formula
let n1 = parseInt(readLine());
let sum1 = (n * (n +1) / 2);
console.log(sum1);

/*
n       sum     
5       5*6/2 = 15
3       3*4 /2 = 6 
*/

//using loop:
let n = parseInt(readLine());
let sum = 0;
for (let i = 0; i <= n; i++) {
    sum += i;
}
console.log(sum);

/*Dry run n = 5
i   i <= n   sum
0   T       0+0 = 0
1   T       0+1 = 1
2   T       1+2 = 3
3   T       3+3= 6
4   T       6+4 = 10
5   T       10 + 5 = 15
*/
