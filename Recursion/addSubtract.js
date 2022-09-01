/*
Add Substract
Given an array of integers A, and a target number k. Find the number of ways to calculate the target number using the given array of elements. You can only use either addition(+) or substraction(-) operators between the array elements and you can pick any number of elements from the array at a time.

Note: each element of the array can only be used once in a way.

Input
The first line contains an integer k denoting the target to be reached.The second line contains an integer n denoting the size of the array. The third line contains a list on n space separated integers.

Output
Return an integer denoting number of possible ways.

Example
Input-1:

6

4

-3 1 3 5

Output-1:

4

Explanation
-(-3) + (3)

+(1) + (5)

+(-3) + (1) + (3) + (5)

-(-3) + (1) - (3) + (5)

Total 4 ways to achieve 6 using only + and - on the given integers

Input-2:

5

4

2 3 -4 4

Output-2:

6

Explanation -
+(2) + (3)

+(2) + (3) + (4) + (-4)

+(2) + (3) - (4) - (-4)

-(3) + (4) - (-4)

-(2) + (3) + (4)

-(2) + (3) - (-4)

Total 6 ways to get 5
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

let key = parseInt(readLine());
let n = parseInt(readLine());

let array = readLine().split(" ").map(Number);

console.log(addSubtract(0, 0));

function addSubtract(i, sum) {
if (i >= n) {
    if (sum == key) return 1;
    return 0;
}
return addSubtract(i + 1, sum + array[i]) + addSubtract(i + 1, sum - array[i]) + addSubtract(i + 1, sum);
}