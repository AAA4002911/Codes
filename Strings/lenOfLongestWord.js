/*

Len of Longest Word
Given a string S, find the length of the longest word in the string. The words are separated by Spaces. If no such word exists, print 0

Input
one line containing the String S

Output
one line containing the length of the longest word in the String S

Example
Input: hello world

Output: 5 - because both words are of length 5

Input: helloooooo world

Output: 10 - because "helloooooo" is of length 10
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

let S = readLine();
let len = 0;
let previous_len = 0;

for (let i = 0; i < S.length; i++) {
    if(S[i] == ' ') {
        if (previous_len < len) previous_len = len;
        len = 0;
        continue;
    }
    len++;
}

if (previous_len < len) previous_len = len;

console.log(previous_len);