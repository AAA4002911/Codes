let fs = require("fs");
let data = fs.readFileSync("D:/10x/10x/Input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

/*
Dice
You are given a cubic dice with 6 faces. All the individual faces have a number printed on them. 
The numbers are in the range of 1 to 6, like any ordinary dice. 
You will be provided the number on the top face of this cube, 
your task is to guess the number on the opposite face of the cube.

Interactive 3-D Image of a dice

Constraints:
1 <= N <= 6
Input
One integer, denoting the number on the top face.

Output
One Integer, denoting the number on the opposite face.

Example
Input1:

6
Output1:

1
Input2:

2
Output2:

5
*/


//Optimised Soln:
let n = parseInt(readLine());
console.log(7 - n);


/*
//Using switch
let n = parseInt(readLine());
switch (n) {
    case 1:
        console.log(6);
        break;
    case 2:
        console.log(5);
        break;
    case 3:
        console.log(4);
        break;
    case 4:
        console.log(3);
        break;
    case 5:
        console.log(2);
        break;
    case 6:
        console.log(1);
        break;
}
*/