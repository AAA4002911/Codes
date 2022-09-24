/*

Hop Racing -- Classes Practice Problems

Two friends 1 and 2 are participating in a hop race. The hop race consists of different rounds. In each round, each hopper can hop as many steps as they want. Both hoppers start at 0 and the finish line is at 10. You are judging the hop race and your goal is to find out which friend takes the least number of rounds to reach the finish line. You are given access to data which has the number of hops each hopper takes in each round.
Design a class for the hopper HopRacing
This class is common for both the hoppers. Each of the hopper is an object for this class.
Your class should take input data provided for each hopper separately (each object should take data for one hopper). You should have 2 objects each representing one hopper
Write a method getRounds which gets the number of rounds that hopper took to get to the finish line.
Input

First line contains n which specifies the number of rows of data given to you.
n lines containing steps taken by the both the hoppers. Each line consists of 2 integers separated by space.
First Integer denotes the hopper ID.
Second Integer denotes the number of hops that hopper took in that round.

Both the hoppers take steps in each round. Each round consists of hops taken by both 1st and 2nd hopper until one of them reaches the end line.
If both the hoppers took the same number of rounds, please announce that 1 is the winner.
Output

One line containing the ID of the hopper who won the race.
Example

Input:

8
1 5
2 2
1 1
2 5
1 2
2 3
1 1 
1 2

Output:

2

First line contains 8 which means there are 8 lines to parse after this line.
Second line contains 1 5 which denotes that 1st hopper took 5 hops in the first round.
Third line contains 2 2 which denotes that 2nd hopper took 2 hops in the first round.
Fourth line contains 1 1 which denotes that 1st hopper took 1 hop in the second round.
Fifth line contains 2 5 which denotes that 2nd hopper took 5 hops in second round.
Sixth line contains 1 2 which denotes that 1st hopper took 2 hops in the third round.
Seventh line contains 2 3 which denots that that 2nd hopper took 3 hops in the third round and reached the finish line.
Eighth line contains 1 1 which denotes that 1st hopper took 1 hop in the fourth round.
Ninth line contans 1 2 which denotes that 1st hopper took 2 hops in the fifth round and reached the finish line.

1st hopper took 5 rounds to reach the finish line and 2nd hopper took 3 rounds to reach the finish line. So 2nd hopper wins and output is 2.
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

class HopRacing {
    constructor() {
        this.hopper_Id = 0;
        this.count = 0;
        this.sum = 0;
    }
    getRounds() {
        if (this.sum >= 10) return this.count;
    } 
}

let rounds = parseInt(readLine());
let hopper_1 = new HopRacing();
let hopper_2 = new HopRacing();
hopper_1.hopper_Id = 1;
hopper_2.hopper_Id = 2;

while (rounds--) {
    let input = readLine().split(" ");
    let hopper_Id = parseInt(input[0]);
    let hops = parseInt(input[1]);
    if (hopper_Id == 1) {
        hopper_1.count++; 
        hopper_1.sum += hops;
    }
    else if (hopper_Id == 2) {
        hopper_2.count++
        hopper_2.sum += hops;
    }
}

if (hopper_1.getRounds() <= hopper_2.getRounds()) console.log(hopper_1.hopper_Id);
else if (hopper_1.getRounds() > hopper_2.getRounds()) console.log(hopper_2.hopper_Id);