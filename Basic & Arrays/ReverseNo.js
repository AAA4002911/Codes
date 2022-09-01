let fs = require("fs");
let data = fs.readFileSync("D:/10x/10x/Input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
/*Logic
1) we will take the input
1.1) we create a reverse no variable and assign it with value 0,
2) we divide the input by 10 to get remainder
3) then we multiply the remainder with 10 and assign this to a reverse no variable
4) repeat the process untill the number is reversed or remainder becomes zero
5) if input is in negative we should make it positive integer by multiplying it with -1 and
 note it and at the end we give our output a minus sign 
*/

let num = parseInt(readLine());
let reverse_num = 0;
let flag = 0;
if (num < 0) {
    flag = 1;
    num *= -1;
}
while ( num != 0) {
    let remainder = num % 10;
    reverse_num = 10 * reverse_num + remainder;
    num = Math.floor(num / 10);
}
if (flag == 1)
console.log(reverse_num * -1);
else {
    console.log(reverse_num);
}

/*Dry run eg 123

num      remainder        reverse_num      loop condition
123        3               0*10+3 =30         123 != 0==> T
12         2               30*10+2=32          num!= 0 ==>T
1          1               32*10+1=321          T   
0                                               F

test cases:
input: 451 , -123, 012
output: 154, -321, 21
*/
