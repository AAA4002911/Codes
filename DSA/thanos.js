/*
Thanos
Description
You are about to fight thanos, to beat him you need to solve the problem set by thanos once you solve you will have access to all the infinity stones, which can be used to kill him :).

The problem is as follows:

You have been given an array a of n non-negative integers followed by t testcases.Each testcase contains an integer x.Your task is to print total number of pairs [ li , ri ] such that x=max( a[ li ] , a[ li + 1 ] , ... , a[ ri ] ) and 1<= li <= ri <= n .

consider 1-based indexing.

Can you be the next Iron man, lets see?

Input
First line contains an integer, n - size of array.

Second line contains n integers, ith integer corresponding to a[i].

Third line contains an integer, t - number of testcases.

Fourth line contains t integers, ith integer corresponding to ith testcase.

Output
For every testcase, print required answer in new line.

Example
Input:

3

1 2 3

3

1 2 3

Output:

1

2

3

Explanation
Note:[i,j] represents subarray ai...aj.

1 is maximum in [1,1].

2 is maximum in [1,2],[2,2].

3 is maximum in [1,3],[2,3],[3,3].
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

