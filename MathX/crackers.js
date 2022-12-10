/*

Crackers

Kumar has decided to distribute N Crackers to K users of as evenly as possible. When all the crackers are distributed, find the minimum possible (absolute) difference between the largest number of crackers received by a user and the smallest number received by a user.
Input

Two space seperated Integers, denoting N, K respectively.
Output

One integer, denoting result.
Example

Input1:

7 3

Output1:

1

Explanation1:

When the users receive two, two and three crackers, respectively, the (absolute) difference between the largest number of crackers received by a user and the smallest number received by a user, is 1.
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


let [crackers, user] = readLine().split(" ").map(x => parseInt(x));
console.log((crackers % user == 0) ? 0 : 1);