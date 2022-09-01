/*
Jumping game
You are playing a jumping game. In a jumping game there are N panels(consecutive), each containing a powerful spring. Every spring has the capacity to make you jump K units(i.e if you are at panel i, it can get you directly to panel i+K in a single jump). However, you also have a choice of whether to use the spring or not. if you dont use it, you can jump exactly one unit(i.e if you are at panel i, you will get to panel i+1). You are at point A(first panel), and you have to go to point B(after the last panel). between A and B, N-1 panels are kept(each with a spring) with the jumping ability of each panel mentioned in form of an array of numbers. Find the minimum number of jumps to get from point A to point B or to region right of point B.


Constraints
1<= N <=30

1<= jump[i]<=20

Input
First line of the input contains a number N, denoting the number of panels between A and B. second line contains the N panel jumping values of the N panels(in order to get from A to B or anywhere right of B)

Output
find the minimum number of jumps to get from A to B and print it.

Example
Input1:

8

2 3 1 5 2 1 1 1

Output1:

3

Explanation1:

Best way is : use spring at index 0 to get to index 2. then use the spring at index 2 to get to index 3. then use the spring at index 3 to get directly to B.-> 3 jumps

Input2:

6

4 10 2 1 1 1

Output2:

2

Explanation2:

Best way is : dont use first spring at index 0, we get to index 1. use the spring at index 1 to get to B. -> 2 jumps
*/
let fs = require("fs");
const { mainModule } = require("process");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------


let n = parseInt(readLine());
let arr = readLine().split(" ").map(Number);

console.log(jumping_game(0));

function jumping_game(i) {
    if (i >= n) return 0;
    let res1 = 1 + jumping_game(i + 1);
    let res2 = 1 + jumping_game(i + arr[i]);
    return Math.min(res1, res2);
}