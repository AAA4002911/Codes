/*
Compress_String
Description:
Given a string st, compress it using the following algorithm:

Begin with an empty string s. For each group of consecutive repeating characters in st:

If the group's length is 1, append the character to s. Otherwise, append the character followed by the group's length.

Note that group lengths that are 10 or longer will be split into multiple characters in st. Please take note you just need to finish the compress function. If there is only one of a character present just print out the character without any number after it. For example "a" instead of "a1".

Input Format:
The first line of the input contains an integer t denoting the number of test cases. The next t lines contain t strings to be modified. (Note: You do not need to take input as that will be done in the template. Just complete the compress function.You may define other functions you might need.)

Output Format:
Print out the modified strings.

Sample Cases:
Sample Input
2
aabbccc
abab
Sample Output
a2b2c3
abab
Explanation
The groups are "aa", "bb", and "ccc". This compresses to "a2b2c3" The groupd are "a", "b", "a" and "b". This compresses to "abab"

Sample Input
1 abbbbbbbbbbbbbbbbbbbbbbbbbbbbb

Sample Output
ab29

Explanation
The groups are "a" and "bbbbbbbbbbbbbbbbbbbbbbbbbbbbb". This compresses to s = "ab29" Please note "2" and "9" in "29" are treated as two different characters in the final list outputted. There is only 1 "a" so print out s = "ab29" and not "a1b29".

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

function compress(st) {
    let s = '';
    let count = 1;

    for (let i = 1; i < st.length; i++) {
        if (st[i].localeCompare(st[i - 1]) == 0) {
            count++;
        }
        else {
            if (count > 1) {
                s = s.concat(st[i - 1], count);
            }
            else {
                s = s.concat(st[i - 1]);
            }
            count = 1;
        }
    }
    //for the last element
    (count > 1) ? s = s.concat(st[st.length - 1], count) : s += st[st.length - 1];

    return s;
}

let test_cases = parseInt(readLine());
while (test_cases--) {
    let st = readLine();
    console.log(compress(st));
}