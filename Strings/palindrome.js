/*
Palindrome
Check if the given string is a palindrome string.

A sequence is said to be palindrome if reverse of the sequence is same as the initial sequence.

Input
Single line containing a string with no end of line character.

String sequence contain only alphabets. Consider lower case letters as equivalent to upper case letters.

Output
Single containing YES if it is a palindrome

Single containing NO if it isn't a palindrome

Example
Input:

Tenet

Output:

YES
*/

let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

let str = readLine();
let flag = 0;

for (let i = 0, j = str.length - 1; i < j; i++, j--) {
    if (str[i] == str[j] || Math.abs(str.charCodeAt(i) - str.charCodeAt(j)) == 32) continue;
    flag = 1
    break; 
}

flag == 0 ? console.log("YES"): console.log("NO");