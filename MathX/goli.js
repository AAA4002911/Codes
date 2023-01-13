/*

Goli

We know that Goli, son of Mr. Hathi loves to eat Burger. So on his birthday he went out to a Restaurant, for eating his favourite burger. In the menu, items are: a burger, a can of soda, and a combo meal containing a burger and a can of soda, at prices given to you.

They have chosen the selling price for each item by first determining the total cost of making the individual items and then adding a fixed value to it, representing their profit. Assume that the cost of making a regular burger is fixed and the cost of making a regular soda is fixed.

For example, if the cost of making a regular burger is 206, the cost of making a regular soda is 145 and the fixed profit is 69, then the fast-food chain will set selling prices as:

Items       |   Making Cost     | Fixed Profit  |   Selling Price
-------------------------------------------------------------------
Burger      |   206             |   69          |   206+69=275
Soda        |   145             |   69          |   145+69=214
Combo(Both) |   206+145=351     |   69          |   351+69=420

Given the price of a burger, a can of soda and a combo meal on the menu, your task is to compute the fixed profit.
Input

The first line contains t, the number of testcases. The following lines describe the testcases.

Each testcase is described by a single line containing three space-separated integers, b,s and c, denoting selling price of a burger, a can of soda and a combo meal respectively.
Constraints

    3 <= c <= 2000
    2 <= b,s < c
    It is guaranteed that the cost of making each item and the profit are positive.

Output

For each testcase, print a single line containing a single integer denoting the fixed profit on each item that the restaurant gets from every purchase. It is guaranteed that the answer is positive.
Example

Input:

3
275 214 420
6 9 11
199 199 255

Output:

69
4
143

Explanation 0

Case 1: Refer to the problem statement for this case.

Case 2: The selling price of a burger is 6, soda is 9, and combo meal is 11. If the total cost making a burger is 2, the cost to make a can of soda is 5 and the fixed profit is 4, you can verify the given selling prices as b=2+4, s=5+4 and c=2+5+4. Hence the answer is 4.

Case 3: The selling price of a burger is 199, soda is 199, and combo meal is 255. If the cost to make a burger is 56, the cost to make a can of soda is 56 and the fixed profit is 143, you can verify the given selling prices as, b=56+143, s=56+143 and c=56+56+143. Hence, the answer is 143.

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

function soln(burger, soda, combo) {
    return burger + soda - combo;
}

let testcase = parseInt(readLine());
while (testcase--) {
    let [b, s, c] = readLine().split(" ").map(x => parseInt(x));
    console.log(soln(b, s, c))
}