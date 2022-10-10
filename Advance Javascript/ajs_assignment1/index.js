//Lucky Sevens
/* Write a function called lucky_sevens which takes an array of integers and return true if any three consecutive elements sum to 7

Input:
An array containing numbers.

Output:
Print true if such triplet exists summing to 7 else print false

Example:
Input:
[2,1,5,1,0]
[1, 6]

Outpit:
true
false

Explanation:
1+5+1 = 7
no three consecutive numbers so false
 
*/

let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

function lucky_sevens(arr) {
    if (arr.length < 3) return false;
    // K represents window size
    let k = 3
    let sum = 0;
    for (let i = 0; i < k; i++) {
        sum += arr[i]
    }
    if (sum == 7) return true
    for (let i = k; i < arr.length; i++) {
        sum = sum + arr[i] - arr[i - k];
        if (sum == 7) return true;
    }
    return false; 
}

console.log(lucky_sevens(readLine().split(" ").map(Number)));
