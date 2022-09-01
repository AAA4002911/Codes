/*
Sum of first n: Recursive
Description
Write a program that computes the sum of first n natural numbers. Your implementation should be recursive in nature. For a positive integer n, sum of first n natural numbers can be defined recursively as follows.

sumOfFirstN(n) = 1, if n is 1
               = n + sumOfFirstN(n-1), otherwise
Input format
One line containing a positive integer n.

Output format
n lines denoting the partial sums and the order in which the partial sums are computed. Each line contains two space separated integers i and pSum. pSum is the sum of first i natural numbers.

Sample input
5
Sample output
1 1
2 3
3 6
4 10
5 15
Explanation
Sum of first 5 natural numbers is computed as follows.

sumOfFirstN(5) = 5 + sumOfFirstN(4)
               = 5 + 4 + sumOfFirstN(3)
               = 5 + 4 + 3 + sumOfFirstN(2)
               = 5 + 4 + 3 + 2 + sumOfFirstN(1)
               = 5 + 4 + 3 + 2 + 1
               = 5 + 4 + 3 + 3
               = 5 + 4 + 6
               = 5 + 10
               = 15
sumOfFirstN(1) is resolved first and returns 1. Hence the first line of output is 1 1.
sumOfFirstN(2) is resolved next and returns 3. Hence the second line of output is 2 3.
sumOfFirstN(3) is resolved next and returns 6. Hence the third line of output is 3 6.
sumOfFirstN(4) is resolved next and returns 10. Hence the fourth line of output is 4 10.
sumOfFirstN(5) is resolved last and returns 15. Hence the fifth (and final) line of output is 5 15.
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

let n = parseInt(readLine());
for (let i = 1; i <= n; i++) {
    console.log(i, sumOfFirstN(i));
}

function sumOfFirstN(num) {
    
    if (num == 1) {
        return 1;
    }
    else {
        return num + sumOfFirstN(num - 1);
    }  
}