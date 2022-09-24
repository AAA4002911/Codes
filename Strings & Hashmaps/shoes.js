/*

Shoes

Your friend Rahul has a showroom of branded & imported shoes. He mainly deals in British shoe brand, made in the uk, made in Britain ... all sourced from local leather merchants, they design, develop, and hand-make their shoes to the high standards set by both Northampton ... Their website clearly details that shoes are manufactured in the UK, Britain.

We have some data about his shop for the last monday. We need to figure out, how much money Rahul earned that day!

His shop has X number of shoes at the begining of that day. We have a list containing the size of each shoe he has in his shop that day.

There are N number of customers who are willing to pay xi amount of money only if they get the shoe of their desired size.

Your task is to compute how much money Rahul earned that day.
Input Format

The first line contains X, the number of shoes. The second line contains the space separated list of all the shoe sizes in the shop.

The third line contains N, the number of customers. The next N lines contain the space separated values of the shoe size desired by the customer and xi, the price of the shoe.
Constraints

    0 < X < 103
    0 < N ≤ 103
    20 < xi < 100
    2 < shoe size < 20

Output Format

Print the amount earned by Rahul on that day.
Sample Input

10
2 3 4 5 6 8 7 6 5 18
6
6 55
6 45
6 55
4 40
18 60
10 50

Sample Output

200

Explanation

Customer 1: Purchased size 6 shoe for Rs. 55.
Customer 2: Purchased size 6 shoe for Rs. 45.
Customer 3: Size 6 no longer available, so no purchase.
Customer 4: Purchased size 4 shoe for Rs. 40.
Customer 5: Purchased size 18 shoe for Rs. 60.
Customer 6: Size 10 not available, so no purchase.

Total money earned = 55 + 45 + 40 + 60 = Rs. 200

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

function sell(size, price) {
    if (stock.has(size) && stock.get(size) != 0) {
        amount += price;
        stock.set(size, stock.get(size) - 1);
        return 0;
    }
    return 1;
}

let numOfShoes = parseInt(readLine());
let availableShoeSize = readLine().split(" ").map(Number);
let stock = new Map();
for (let i = 0; i < numOfShoes; i++) {
    if (stock.has(availableShoeSize[i])) {
        stock.set(availableShoeSize[i], stock.get(availableShoeSize[i]) + 1);
    }
    else {
        stock.set(availableShoeSize[i], 1);
    }
}

let numOfCustomer = parseInt(readLine());
let amount = 0;
while (numOfCustomer--) {
    let input = readLine().split(" ");
    let size = parseInt(input[0]);
    let price = parseInt(input[1]);
    sell(size, price);
}
console.log(amount);