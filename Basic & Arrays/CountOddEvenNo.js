let fs = require("fs");
let data = fs.readFileSync("D:/10x/10x/Input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

/**Count number of odd and even number in given list.

Input
First line contains length of the list. Each line contains integer specifying each element in list.

Output
2 integers in each line specifying count of odd and even numbers respectively.

Example
Input:
5
12
14
15
13
18

Output:
2
3
**/

let num = parseInt(readLine());
let OddCounter = 0;
let EvenCounter = 0;
let array = [];

for(let i = 0; i < num; i=i+1) {
    array[i] = parseInt(readLine());
}

// console.log(array);

for(i = 0; i < num; i=i+1) {
    let Remainder = array[i] % 2;
   
    if(Remainder === 0) {
        EvenCounter = EvenCounter + 1;
    } else {
        OddCounter = OddCounter + 1;
    }
}

console.log(OddCounter);
console.log(EvenCounter);
