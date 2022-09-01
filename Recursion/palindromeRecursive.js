/*
Palindrome: Recursive
Description
A palindrome is a string that reads the same forward and backwards.
Write a function that reads a string and returns

True if the given string is a palindrome
False if the given string is not a palindrome
IMPORTANT
Your function should NOT use the following.

Loops (you can use a loop to read the test cases)
In-built functions like reverse

Input format
First line contains n, the number of test cases.
This is followed by n lines , each containing one input string.

Output format
n lines, each containing either True or False, depending on whether the corresponding input string is a palindrome or not

Sample input
2
tenet
ayashdashd
Sample output
True
False
Explanation
First line contains 2, meaning there are 2 test cases.
tenet is a palindrome. So first line of output is True.
ayashdashd is not a palindrome. So second line of output is False.
*/

const { reverse } = require("dns");
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
    let string = readLine();
    console.log(palindromeChecker(string));
}

function palindromeChecker(str) {
    let reverseStr = recursion(1, str);

    function recursion(i, str) {
        if (i == str.length) {
            return str[0];
        }
        else {
            return ( str[str.length - i] + recursion(i + 1, str) )
        }
    
    }

    if (str == reverseStr) return "True";
    else return "False";
}