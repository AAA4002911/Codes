/*

Wild Card

Given a binary pattern that contains ‘?’ wildcard character at few positions, find all possible combinations of binary strings that can be formed by replacing the wildcard character by either 0 or 1.

Note: The resultant strings should be returned in such a way, so that they look like a sorted binary numbers!
Input

Single line input denoting the given string.
Output

Each line containing one string, in the given format.
Example

Input:

1?11?00?1?

Output:

1011000010
1011000011
1011000110
1011000111
1011100010
1011100011
1011100110
1011100111
1111000010
1111000011
1111000110
1111000111
1111100010
1111100011
1111100110
1111100111

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

let str = readLine();
let arr = str.split("");

function string_generator(arr, i) {
  if (i == arr.length) {
    console.log(arr.join(""));
    return;
  }
  if (arr[i] == '?') {
    arr[i] = '0';
    string_generator(arr, i + 1);
    arr[i] = '1';
    string_generator(arr, i + 1);
    arr[i] = '?';  /* it will make the recursion to go in all nodes */
  }
  else {
    string_generator(arr, i + 1);
  }
}

string_generator(arr, 0);