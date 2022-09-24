/*
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
*/

function pal(s) {
    let str = s.toLowerCase();
    for (let i = 0; i < str.length; i++) {
        if ((str.charCodeAt(i) < 97 || str.charCodeAt(i) > 122) && (str.charCodeAt(i) < 48 || str.charCodeAt(i) > 57)){            
            let left_str = str.substring(0, i);
            let right_str = str.substring(i + 1);
            str = left_str + right_str;
            i--;
        }
    }
    console.log(str)
    
    for (let i = 0, j = str.length - 1; i < j; i++, j--) {
        if (str[i] != str[j]) {
            return false;
        }
    }
    return true;
};

console.log(pal("0P"));