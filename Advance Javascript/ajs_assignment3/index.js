/*
Reverse all words

Given a string, reverse each word in the sentence

Input:
A string containing multiple words

ex:- "Welcome to this Javascript Guide!"

Output:
A string with all words reversed
ex:- "emocleW ot siht tpircsavaJ !ediuG"


Example:
Sample input:-
"Welcome to this Javascript Guide!"

Sample output:-
"emocleW ot siht tpircsavaJ !ediuG"

Sample input:-
Hello My name is XYZ

Sample output:-
olleH yM eman si ZYX

Explanation:-
The first word is reversed from "Welcome" to "emocleW"
and similarly all other words are reversed but the order of the words is same

*/

let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

function reverseWords(str) {
    strArr = str.split(" ");
    result = '';
    for (let i = 0; i < strArr.length; i++) {
        result += strArr[i].split("").reverse().join("");
        if (i != strArr.length - 1) result += " ";
    }
    return result;
}

str = readLine();
console.log(reverseWords(str));