/*
Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.

 

Example 1:

Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]

Example 2:

Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]

 

Constraints:

    1 <= s.length <= 105
    s[i] is a printable ascii character.

*/

function reverse(s) {
    if (s.length == 1) return;

    let temp = s.shift();
    reverse(s);
    s.push(temp);
    return s;
}   
console.log(reverse(["h","e","l","l","o"]));