/*
longest-substring
Description
Given a string s, find the length of the longest substring without repeating characters.

Constraints:

0 <= s.length <= 10^4
s consists of English letters, digits, symbols and spaces.
Input format
First line denotes t, denoting the number of tescases. Each test case contains a string s in one line.

Output format
One line for each test case.

Sample input
3
abcabcbb
bbbbb


Sample output
3
1
0
Explanation
For the first testcase, the answer is "abc", with the length of 3.
For the second testcase, the answer is "b", with the length of 1.
For the third testcase, the answer is "", with the length of 0.
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
/*
//O(n^2) time complexity solution
//
let testcase = parseInt(readLine());

while (testcase--) {
    let str = readLine();
    let result = '';
    for (let i = 0; i < str.length; i++) {
        let flag = 0;
        for (let j = 0; j < result.length; j++) {
            if (str[i] == result[j]) {
                flag = 1;
                break;
            }
        }
        if(flag == 0) result += str[i];
    }
    console.log(result.length);
}

*/

function substring(str) {
    let last_occurance = new Array(256).fill(-1);
    let prev_long = 0;
    let longest = 0;

    for (let i = 0; i < str.length; i++) {
        if(last_occurance[str.charCodeAt(i)] != -1) {
            prev_long = Math.max(prev_long, 1 + last_occurance[str.charCodeAt(i)])
            longest = Math.max(longest, i - prev_long + 1);
        }
        else {
            prev_long = Math.max(prev_long, 0);
            longest = Math.max(longest, i - prev_long + 1);
        }

        last_occurance[str.charCodeAt(i)] = i;
    }

    return longest;
}

let testcase = parseInt(readLine());
while(testcase--) {
    let str = readLine();
    console.log(substring(str));
}