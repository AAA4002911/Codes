/*

Game of Strength

Andrew is very fond of Maths.He has N boxes with him,in each box there is some value which represents the Strength of the Box.The ith box has strength A[i]. He wants to calculate the Overall Power of the all N Boxes.

Overall Power here means Sum of Absolute Difference of the strengths of the boxes(between each pair of boxes) multiplied by the Maximum strength among N boxes. Since the Overall Power could be a very large number,output the number modulus 10^9+7(1000000007).
Input

First line of the input contains the number of test cases T. It is followed by T test cases. Each test case has 2 lines. First line contains the number of boxes N. It is followed by a line containing N elements where ith element is the strength of Andrew's ith box.
Output

For each test case, output a single number, which is the Overall Power for that testcase.
Example

Input:

2

2

1 2

5

4 5 3 1 2


Output:

2

100

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
function solution(n, arr) {
    arr.sort((a, b) => (b - a));
    let result = 0;
    let factor = n - 1;
    for (let i = 0; i < n; i++) {
        result += arr[i] * factor;
        factor -= 2;
    }
    return ((result * Math.max(...arr)) % 1000000007);
    
    // O(n^2) approach causes TLE
     
    // let max = Number.NEGATIVE_INFINITY;
    // for (let i = 0; i < n; i++) {
    //     if (arr[i] > max) max = arr[i];
    // }
    // let sum = 0;
    // for (let i = 0; i < n; i++) {
    //     for (let j = i + 1; j < n; j++) {
    //         sum += Math.abs(arr[i] - arr[j]);
    //     }
    // }
    // sum = sum  % 1000000007;
    // return (sum * max);
}

let testCase = parseInt(readLine());
while (testCase--) {
    let n = parseInt(readLine());
    let arr = readLine().split(" ").map(Number);
    console.log(solution(n, arr));
}