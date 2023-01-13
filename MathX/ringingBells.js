/*

Ringing Bells

There are N bells in a city. Each bell rings after a particular period of time(given in minutes). The period of each bell is provided in form of an array of integers. The moment when all the bells ring together is considered an auspicious moment by the people of the city and they take decisions on the basis of this. However, the people of the city are mathematically dumb and think it as a form of some sort of a magic. When you entered the city you saw all the bells ringing together. Lets say it was T=0(time). Can you use your knowledge of mathematics to predict how many minutes from T=0, would all the bells ring again?
Constraints

1<= Number of bells <=1000000 1<= Time period of bells<= 1000
Input

First line of the input contains the number of bells in the city. The second line contains the time periods of ringing of each of the N bells in a space separated manner.
Output

Print the time(in minutes) from T=0 when the all the bells in the city are supposed to ring together again.
Example

Input:

6

3 4 6 2 1 18

Output:

36

Explanation:

Next time All the bells of the city will ring together at T=36 minutes.

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

function gcd(a, b) {
    if (a == 0 && b == 0) { return "Not Valid" }
    if (a == 0) { return b }
    if (b == 0) { return a }

    if (a >= b) { return gcd(b, a % b) }
    else return gcd(a, b % a);
}
function lcm(arr, n) {
    let result = (arr[0]);
    for (let i = 1; i < n; i++) {
        if (result > Number.MAX_SAFE_INTEGER) { 
            result = BigInt(result) 
            arr[i] = BigInt(arr[i]);
        };
        result = ((result * arr[i]) / (gcd(arr[i], result)));
    }
    return result.toString();
}

let len = parseInt(readLine());
let arr = readLine().split(" ").map(x => parseInt(x));
console.log(lcm(arr, len));