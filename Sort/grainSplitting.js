/*
Grain Splitting

You are responsible to split a harvest of grains between two villages. You are given a list of grain bag weights.

    You cannot cut open any bags.
    Assume that the given bag weights are such that they can be split between two villages without cutting.
    The second village should be given lesser bags (but total of same weight) than the first village.
    No bag from first village should have more grains than any bag in second village

Input format

The first line t is the number of test cases, 1 <= t <= 10 This is followed by t lines, each line is an array of integers separated by space
Output format

The first line should be t This is followed by t lines, each line containing the bags alloted for the second village in ascending order.
Sample input

1

2 1 1 4 3 3
Sample output

1

3 4
Explanation

The first line is 1, implying one test case

The second line is the first test case: 2 1 1 4 3 3

The second village gets these bags in ascending order: 3 4

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

// // Grain Splitting

let testCase = parseInt(readLine());
console.log(testCase);
for (let i = 0; i < testCase; i++) {
    let arr = readLine().split(' ').map(x => parseInt(x));
    let n = arr.length;
    arr.sort((a, b) => a - b);

    let result = 0;
    let first_villager = 0;
    let second_villager = 0;
    let mid = parseInt(n / 2)
    for (let i = 0; i < mid + 1; i++) {
        first_villager += arr[i];
    }
    for (let j = mid + 1; j < n; j++) {
        second_villager += arr[j];
    }
    if (first_villager == second_villager) {
        result = mid + 1;
    } else {
        for (let k = mid + 1; k < n; k++) {
            first_villager += arr[k];
            second_villager -= arr[k];
            if (first_villager == second_villager) {
                result = k + 1;
                break;
            }
        }
    }
    let ans = arr.slice(result, n);
    if (ans.length == n) console.log("Not possible to split")
    else console.log(...ans);
}