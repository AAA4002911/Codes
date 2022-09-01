let fs = require("fs");
let data = fs.readFileSync("D:/10x/10x/Input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

/*Travel Time
Bharath is travelling from Hyderabad to Banglore on a car. 
Assume the distance from Hyderabard to Banglore is 600kms, 
you will be given the average speed of Bharath's car and you have to calculate the travel time.

Input
single integer - speed of car in km/hr

Output
single integer

Note: return only the integer part, incase the time is decimal.

Example
Input-1:

60

Output-1:

10

Input-2:

80

Output-2:

7
*/

let speed = parseInt(readLine());
let Distance = 600;
let Time = Distance / speed;
console.log(Math.floor(Time));