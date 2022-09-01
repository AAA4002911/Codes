/*
Hack Money
Description
You are a bank account hacker. Initially you have 1 rupee in your account, and you want exactly N rupees in your account. You wrote two hacks, First hack can multiply the amount of money you own by 10, while the second can multiply it by 20. These hacks can be used any number of time . Can you achieve the desired amount N using these hacks.

Input
The first line of the input contains a single integer T denoting the number of test cases.

The description of T test cases follows.The first and only line of each test case contains a single integer N.

Output
For each test case, print a single line containing the string "Yes" if you can make exactly N rupees or "No" otherwise.

Example
Input:

5

1

2

10

25

200

Output:

Yes

No

Yes

No

Yes

Explanation
In the 5th case hacker can get Rs. 200 by first using 10x hack and using 20x hack.

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
while(test_case--) {
    let n = parseInt(readLine());
    if (hackchecker(n)) console.log("Yes");
    else console.log("No");
}

function hackchecker(n) {
    if (n == 0) return false;
    if (n == 1) return true;
    if (n % 20 == 0) {
    return hackchecker(n / 20) || hackchecker(n / 10);
    }
    else if (n % 10 == 0) {
        return hackchecker(n / 10);
    }
}