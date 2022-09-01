/*
Bank Account Credit and Debit -- Classes Practice Problems
Write a bank account class (BankAccount). 
It should have an instance variable called balance which holds the current value. 
Assume initial balance is 0. The class should have the following methods: credit and debit.

credit - takes an integer (>= 0) as input and increases the balance by that amount
debit - takes an integer (>= 0) as input and decreases the balance by that amount

Input
The first line contains an integer n, denoting the number of transactions. 
This is followed by n lines each containing 2 space separated inputs. 
The first input is either c (denoting credit) or d (denoting debit). 
The second input is a non-negative integer denoting the amount.

Note: You don't have to worry about reading input or printing output. 
The code for that is already provided.

Output
One integer, denoting the final balance of the account.

Example
Input:

3
c 100
c 500
d 200
Output:

400
The first line in input is 3, denoting 3 transactions.
First transaction is c 100, which means a credit of 100. 
So the balance will become 100 (because initial balance is 0).
Second transaction is c 500, which means a credit of 500. 
So the balance becomes 100 + 500 which is 600.
Third transaction is d 200, which means a debit of 200. 
So balance becomes 600 - 200, which is 400.
So, the final balance is 400.
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
// Define your class here
// your class name should be 'BankAccount' and method names as 'credit' and 'debit'
function BankAccount () {
    this.balance = 0;
    this.credit = function(amount) {
        this.balance += amount;
        return this.balance;
    }
    this.debit = function(amount) {
        this.balance -= amount;
        return this.balance;
    }
}

// DO NOT CHANGE ANYTHING BELOW THIS LINE

let n = parseInt(readLine());
let myAccount = new BankAccount();
for (let index = 0; index < n ; index++) {
  let currentTransaction = readLine().split(" ");
  let typeOfTransaction = currentTransaction[0];
  let transactionAmount = parseInt(currentTransaction[1]);
  if (typeOfTransaction === "d") {
    myAccount.debit(transactionAmount);
  } else {
    myAccount.credit(transactionAmount);
  }
}
console.log(myAccount.balance);