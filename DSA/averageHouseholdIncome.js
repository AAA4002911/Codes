/*
Average household income
Description
You are given a survey of families in a neighbourhood. The survey contains two lists: one contains income of each household, another contains number of children in the household. Find the average income for households with more than 2 children.

Input format
First line contains n, n > 0, denoting the number of households. It is followed by 2n lines, containing one integer each. First n integers are the incomes of households and the next n integers are the number of children in each of the corresponding households.

Output format
One positive integer, which is the average income of the households that have more than 2 children. If the result is float, return its floor. If there is no household with more than 2 children, return -1.

Sample input
5
1000
2000
3000
1000
3000
2
3
3
1
0
Sample output
2500
Explanation
First line in input is 5. This is the length of the each list. So, there are 5 households. Household incomes are 1000, 2000, 3000, 1000 and 3000. Corresponding number of children are 2, 3, 3, 1 and 0. 2nd and 3rd houses have children greater than 2. The average income is average of 2000 and 3000 i.e. 2500.

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

let n = parseInt(readLine());
let income = [];
for (let i = 0; i < n; i++) {
    income[i] = parseInt(readLine());
}
let children = [];
for (let i = 0; i < n; i++) {
    children[i] = parseInt(readLine());
}
let sum = 0;
let count = 0;
for (let i = 0; i < n; i++) {
    if (children[i] > 2) {
        sum += income[i];
        count++;
    }
}
if (sum === 0 && count === 0) console.log(-1);
else console.log(Math.floor(sum / count));