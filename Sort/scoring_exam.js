/*

Scoring Exam

Milly is at the examination hall where she is reading a question paper. She checked the question paper and discovered that there are N questions in that paper. Each question has some score value. Ideally it's like questions requiring more time have more score value and strangely no two questions on the paper require same time to be solved.

She is very excited by looking these questions. She decided to solve K questions while maximizing their score value. Could you please help Milly to determine the exact time she needs to solve the questions.
Input

First line of input contains two space separated integers N and Q, where N is the number of questions available and Q is number of queries

Next line contains N space separated integers denoting the time Ti of N questions

Next line contains N space separated integers denoting the scores Si of N questions

Next Q lines contains a number K each, the number of questions she wants to solve
Output

Print the time required for each query in a separate line.
Example

Input:

5 2

2 3 9 4 5

3 5 11 6 7

5

3

Output:

23

18
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
let [numOfQues, queries] = readLine().split(" ").map(Number);
let time_arr = readLine().split(" ").map(Number);
let score_arr = readLine().split(" ").map(Number);

let bucket = new Map();
for (let i = 0; i < numOfQues; i++) {
    bucket.set(time_arr[i], score_arr[i])
}
let sorted_bucket = new Map([...bucket.entries()].sort((a, b) => b[1] - a[1]));
let sorted_time = [...sorted_bucket.keys()]

function max_score(n) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += sorted_time[i];
    }
    return sum;
}

while (queries--) {
    let solve_ques = parseInt(readLine());
    console.log(max_score(solve_ques));
}