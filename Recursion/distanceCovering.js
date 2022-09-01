/*
Distance covering
Description
Given a distance n, find the number of ways to cover it with either 1 or 2 steps.

Input format
First line contains a positive integer t, denoting the number of test cases.
This is followed by t lines, each containing a positive integer.

Output format
t lines, each containing a positive integer, denoting the number of ways to cover the corresponding distance.

Sample input
2
3
2
Sample output
3
2
Explanation
First line of input is 2, meaning there are 2 test cases.
Next line contains 3, indicating that the distance to be covered is 3 units.
We can cover a distance of 3 in the following ways:

Path 1: 1-1-1
Path 2: 1-2
Path 3: 2-1
So, the first line of output is 3.
Next line contains 2, indicating that the distance to be covered is 3 units.
We can cover a distance of 2 in the following ways:

Path 1: 1-1
Path 2: 2
So, the second line of output is 2.
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

let test_case = parseInt(readLine());
while (test_case--) {
  let n = parseInt(readLine());

  console.log(counter(0, n));
}

function counter(a, n) {
  if (a == n) return 1;
  if (a > n) return 0;

  return  counter(a + 1, n) + counter(a + 2, n);
}