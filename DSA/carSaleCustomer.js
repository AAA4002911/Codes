/*
Car Sale Customer
You are moving to a different country and you want to sell your car. You bought your car for 10,00,000 Rs (10 Lakhs). You are not willing to sell the car if the customers offer you less than 90% of what you paid. You have customers lined up offering you what they are willing to pay and you have to come up with the list of customers who you can sell your car to. Each customer will submit one proposal.
Design a class CarSell which has 1 method.
getPromisingCustomers -- This method should get the indices of all the customers whose proposals are greater than or equal to 90% of the car value.
If all the customers are only willing to pay less than 90%, print -1

Input
First line contains n, an integer denoting the number of customers.
Next n lines will contain n integer one for each of the proposals received from n customers.

Output
Each line of output should contain the index of a prospective customer. The indices in output should be in ascending order.
If there is no prospective customer, print -1.

Example
Input:

3
1000000
100000
900000
Output:

0
2
Explanation
First line is 3, i.e. 3 test cases.
Second line contains customer at 0th index whose proposal is 10Lakhs.
Third line contains customer at index 1 whose proposal is 1Lakh.
Fourth line contains customer at index 2 whose proposal is 9Lakhs.
As the proposals of 0th and 2nd customer are the only ones greater than or equal to 90% of the car value. We print the output as 0 and 2
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

class CarSell {
    constructor() {
        this.carValue = 1000000;
        this.percent = 0.9;
    }
    getPromisingCustomers(value) {
        if (value >= this.percent * this.carValue) return true;
        else {
            false_count++;
            return false;
        }
    }
}

let numberOfCustomer = parseInt(readLine());
let false_count = 0;
for (let i = 0; i < numberOfCustomer; i++) {
    let proposal = parseInt(readLine());
    let prospective_customer = new CarSell(proposal);
    if (prospective_customer.getPromisingCustomers(proposal))
        console.log(i);
}
if (false_count == numberOfCustomer) console.log(-1);