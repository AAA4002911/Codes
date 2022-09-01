/*
Flight
We are building a simulation for birds. 
One part of it is to design a class called Flight, 
which deals with the flying of birds. This class has upTime and downTime as the properties. 
The class should also have a method named calculateFlight, 
which will return the calculated flying time. You need to complete this method.

Here, upTime denotes the time at which a given bird starts flying, 
and downTime is the time at which the bird lands somewhere.

You don't need to worry about input/output and object of the class. 
The given template will take care of it. Also, it is given the bird will fly in the morning, 
and will land before night of the same day.

The input will contain the upTime and downTime, in 24 hr notation as hh:mm (h is hour, 
    and m is min). You need to calculate the flying time of the given bird (in minutes), as output.

Input
First line contains upTime in the given notation. 
Second line contains downTime in the given notation.

Output
One Integer denoting the flying time in minutes.

Example

Input1:
10:55
22:55

Output1:
720

Explanation:
Flying time will be 12 hrs = 720 min.
*/

let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
	idx++;
	return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format
class Flight {
	constructor(upTime,downTime){
		this.upTime=upTime;
		this.downTime=downTime;
	}
	calculateFlight(){
		//write your code here
        this.upTime = this.upTime.split(":").map(Number);
        this.downTime = this.downTime.split(":").map(Number);

        let Hour_diff = this.downTime[0] - this.upTime[0];
        let min_diff = this.downTime[1] - this.upTime[1];

        let flyinTime = Hour_diff * 60 + min_diff;
        return flyinTime;

	}
}

// -------- Do NOT edit anything below this line ----------
let upTime=readLine();
let downTime=readLine();
let NewFlight = new Flight(upTime,downTime);
console.log(NewFlight.calculateFlight());