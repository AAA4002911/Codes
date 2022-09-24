/*
Compare Versions
Description

Given two version numbers, version1 and version2, compare them.

Version numbers consist of one or more revisions joined by a dot .. Each revision consists of digits and may contain leading zeros. Every revision contains at least one character. Revisions are 0-indexed from left to right, with the leftmost revision being revision 0, the next revision being revision 1, and so on. For example 2.5.33 and 0.1 are valid version numbers.

To compare version numbers, compare their revisions in left-to-right order. Revisions are compared using their integer value ignoring any leading zeros. This means that revisions 1 and 001 are considered equal. If a version number does not specify a revision at an index, then treat the revision as 0. For example, version 1.0 is less than version 1.1 because their revision 0s are the same, but their revision 1s are 0 and 1 respectively, and 0 < 1.

Output the following:

    If version1 < version2, print -1.
    If version1 > version2, print 1.
    Otherwise, print 0.

Constraints:

    1 <= version1.length, version2.length <= 500
    version1 and version2 only contain digits and '.'.
    version1 and version2 are valid version numbers.

Input

First line contains the number of test cases T.

Each of the next T lines contains two space seperated strings denoting the version numbers.
Output

Print T lines, each containing the output for the given testcases.
Example

Input:

5
7.5.2.4 7.5.3
1.0.1 1
0.1 1.1
1.0 1.0.0
1.01 1.001

Output:

-1
1
-1
0
0

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

function compare(v1, v2) {
    let temp1 = 0;
    let temp2 = 0;
    for (var i = 0, j = 0; (i < v1.length || j < v2.length);) {
        while (i < v1.length && v1[i] != '.') {
            temp1 = temp1 * 10 + (v1[i] - '0');
            i++;
        }

        while (j < v2.length && v2[j] != '.') {
            temp2 = temp2 * 10 + (v2[j] - '0'); 
            j++;
        }
        if (temp1 < temp2) return -1;
        if (temp1 > temp2) return 1;
        temp1 = 0;
        temp2 = 0;
        i++;
        j++;
    }
    return 0;        
}


let testcases = parseInt(readLine());

while (testcases--) {
    let input = readLine().split(" ");
    let version1 = input[0];
    let version2 = input[1];
    if (compare(version1, version2) < 0) console.log(-1);
    if (compare(version1, version2) > 0) console.log(1);
    if (compare(version1, version2) == 0) console.log(0);
}