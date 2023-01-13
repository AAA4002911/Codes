/**


Lethargic Robot

There exists a robot, which can do 3 things. It can either move right, left or stay where it is.

    R->right
    L->left
    S->stay where you are

You are a robot instructor and the robot does whatever you ask of it. However the robot is lethargic, hence no matter what and how many instructions you give to the robot it has got to come back at its original position after all the instructions. As a result not all the sequence of instructions provided to the robot are valid.

A valid sequence of instruction is an ordered sequence in which at the end the robot finds itself at the same place where it started.

ex- RLS is a valid instruction sequence as at the end the robot is at the same place where is started.

ex- RRL is an invalid instruction sequence as the robot is 1 unit right of where it originally started.

Count the number of valid instruction sequence for any given N, where N is the number of instructions to be provided.

Note-> instruction sequences are ordered, hence RLS is different from LRS etc.
Constraints

1<= N<= 3000
Input

Input contains just a single integer which represents the number of instructions to be given.
Output

Print the number of valid ordered sequence of instructions that can be provided to the lethargic robot.
Example

Input:

3

Output:

7

Explanation:

following are the valid instruction sequences-

RLS

RSL

LRS

LSR

SLR

SRL

SSS

 */


let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

function soln(arr, left_count, right_count, n)

let n = parseInt(readLine());

