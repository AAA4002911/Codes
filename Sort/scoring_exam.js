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
readLine() //score not required

time_arr.sort((a, b) => (b - a));
let prefix_sum = [];
prefix_sum.push(time_arr[0]);
for (let i = 1; i < numOfQues; i++) {
    prefix_sum.push(prefix_sum[i - 1] + time_arr[i]);    
}

while (queries--) {
    let solve_ques = parseInt(readLine());
    console.log(prefix_sum[solve_ques - 1]);
}