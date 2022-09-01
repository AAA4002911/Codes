/*
Repeated target SUM
You have been given an array of distinct integers and a "key". find out the total number of ways in which we can obtain the "key" by summing up one or more elements of the array such that one element from the array can be used multiple times.

[ordering of elements does not matter. i.e- {1,2,2,3} is same is {3,1,2,2} and thus they are considered as one]

Constraints
1<= N <= 10

0 < arr[i], elements are distinct

0 < key

Input
First line of the input contains N,key(space separated). second line of the input contains the N elements of the array.

Output
Print the total number of ways in which we can obtain "key" by summing up one or more elements of the array(repetition allowed)

Example
Input:

3 4

1 2 3

Output:

4

Explanation:

possible solutions- (1,1,1,1),(1,1,2),(1,3),(2,2)
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

let input = readLine().split(" ");
let n = parseInt(input[0]);
let key = parseInt(input[1]);
let array = readLine().split(" ").map(Number);
let result = 0;


subset(0, 0);
console.log(result);

function subset(i, sum) {
  if (sum == key) {
    result++;
    return;
  }
  if (i >= n) {
  return;
  }
  if (sum > key) return;

  subset(i, sum + array[i]);
  subset(i + 1, sum);
}