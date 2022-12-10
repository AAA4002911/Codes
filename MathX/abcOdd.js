/*

abc odd

You are given integers A and B, each between 1 and 3 (inclusive).

Determine if there is an integer C between 1 and 3 (inclusive) such that A×B×C is an odd number.
Constraints

    1 <= A,B <= 3

Input

Two space seperated integers, denoting A,B respectively.
Output

If there is an integer C between 1 and 3 that satisfies the condition, print Yes; otherwise, print No.
Example

Input1:

3 1

Output1:

Yes

Explanation1:

Let C = 3. Then, A×B×C = 3×1×3 = 9, which is an odd number..


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

let [num1, num2] = readLine().split(" ").map(x => parseInt(x));
let product = num1 * num2;

for (let i = 1; i <= 3; i++) {
    if ((product * i) % 2 != 0) {
        console.log("Yes");
        return;
    }
}

console.log("No");
