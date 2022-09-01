/*
Biller
We want to design a class for calculating total bill in a super market. 
The class should be named as Biller.

Biller class should have the following.

One data member, which will maintain the current bill amount.
A method called addToBill.
addToBill will take the price of an item and add it to the bill.
A method called removeFromBill.
removeFromBill will take the price of an item and reduce it from the bill.
A method called getBill.
getBill should return the bill amount.
Input/Output format is given below for your reference. 
However, you don't need to worry about taking input or printing output. 
The solution template will take care of it.

Input
First line contains an integer n, denoting the number of transactions.
Each of the next n lines contains two space separated inputs.
First input is either + or -, denoting whether the item should be added or removed.
Second input is an integer, denoting the price of the item.
Output
One line containing an integer, denoting the final bill.

Example
Input:

3
+ 25
+ 60
- 20
Output:

65
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

// Define your class here
class Biller{
    constructor() {
        this.billAmount = 0;
    }
    addToBill(amount) {
        this.billAmount += amount;
    }
    removeFromBill(amount) {
        this.billAmount -= amount;
    }
    getBill() {
        return this.billAmount;
    }
}

// -------- DO NOT CHANGE ANYTHING BELOW THIS LINE --------
let n = parseInt(readLine());
let biller = new Biller();
for (let i = 0; i < n; i++) {
  let input = readLine().split(" ");
  let type = input[0];
  let price = parseInt(input[1]);
  if (type === "+") {
    biller.addToBill(price);
  } else {
    biller.removeFromBill(price);
  }
}
console.log(biller.getBill());