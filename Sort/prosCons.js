/*

Pros Cons

There is a long list of n girls in front of Barney, and he is to calculate the optimal "happiness" he can find by selecting exactly 2 girls. (Why 2? No one knows!)

Ted, as a fan of pros and cons, suggests to make a list, a method for estimating the maximum happiness that Barney can achieve.

Each girl is characterized by two parameters:

    favour: if this girl is chosen, his happiness increases by this amount.
    anger: if this girl is not chosen, his happiness decreases by this amount.

Find the maximum "happiness" that Barney can obtain. Note that the answer is allowed to be negative.
Input

The first line of input file contains an integer t, denoting the number of test cases to follow.

The first line of each test case contains an integer n, as explained in statement. It is followed by n lines, each containing two space-seperated integers denoting the favour and anger of the ith girl.
Output

The output file should contain t lines, each containing answer for the test case.
Example

Input:

1

4

2 3

10 2

11 5

4 1

Output:

17

*/

let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}



let testcase = parseInt(readLine());
while (testcase--) {
    let num = parseInt(readLine());
    let gain = [];
    let anger_sum = 0;
    for (let i = 0; i < num; i++) {
        let [happiness, anger] = readLine().split(" ").map(Number);
        anger_sum += anger;
        gain.push(happiness + anger);        
    }
    gain.sort((a, b) => (b - a));
    console.log(gain[0] + gain[1] - anger_sum);
}