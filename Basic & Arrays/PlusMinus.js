let fs = require("fs");
let data = fs.readFileSync("D:/10x/10x/Input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

/*
Plus Minus
You have been given n integer values. Lets say the given values are a1, a2, a3, a4 ...

You need to find a1 - a2 + a3 - a4 ... as the result.

Input Format:
First line denotes n, the number of inputs. The next n lines contains one integer in each line.

Output Format:
One integer denoting the result, as mentioned above.

Example:
Input:

5
10
20
30
40
50
Output:

30
Explanation:

From the given 5 integers, the result will be: 10-20+30-40+50 = 30
*/


//Using Array:
let n = parseInt(readLine());
let arr = [];
let sum = 0;
for (let i = 0; i < n; i++) {
    arr.push(parseInt(readLine()));
}
for (let i = 0; i < n; i=i+2) {
        sum = sum + arr[i]; 
    }
for (let i = 1; i < n; i=i+2) {
        sum = sum - arr[i] 
    }
console.log(sum);

