/*
Office
Your colleagues have been looking over you shoulder. When you should have been doing your boring real job, you've been using the work computers to smash in endless hours of codewars. In a team meeting, a terrible, awful person declares to the group that you aren't working.

You're in trouble. You quickly have to gauge the feeling in the room to decide whether or not you should gather your things and leave. Given an object (meet) containing team member names as keys, and their happiness rating out of 10 as the value, you need to assess the overall happiness rating of the group. If <= 5, return 'They fired me'. Else return 'I still have a job'.

Happiness rating will be total score / number of people in the room.

Note that if your boss is in the room (boss/Boss), their score is worth double it's face value (but they are still just one person!).

Input format
The first line contains n strings, separated by space, team member names, 0 <= n <= 10000

The second line contains n integers, separated by space, representing happiness for each member for each member, 0 <= n <= 10000

Output format
One line containing either 'I still have a job' or 'They fired me'

Sample input
Arun Vimal Vinod Boss

4 10 5 4

Sample output
I still have a job

Explanation
The first line contains 3 member names: Arun, Vimal, Vinod, Boss

The second line contains their happiness: 4,10,5,4

Happiness rating is 5.6 > 5, so I still have a job

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

let name = readLine().split(" ");
let happiness_rating = readLine().split(" ");

let meet = {};
for (let i = 0; i < name.length; i++) {
    meet[name[i]] = happiness_rating[i];
}

name = Object.keys(meet);
happiness_rating = Object.values(meet);

let total_rating = 0;
for (let i = 0; i < name.length; i++) {
    happiness_rating[i] = parseInt(happiness_rating[i]);
    if (name[i] == 'boss' || name[i] == 'Boss') total_rating += 2 * happiness_rating[i];
    else total_rating += happiness_rating[i];
}

let average_rating = total_rating / name.length;
if (average_rating <= 5) console.log('They fired me');
else console.log('I still have a job');