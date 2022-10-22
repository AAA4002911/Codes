/*

Lets Swap

Y has a permutation p1,p2,p3.....pn of numbers from 1 to n.

Beautifulness of this permutation is defined as value of sum of abs(pi-i) for 1<=i<=n.

Y can swap two elements of the permutation at most once, what is the maximum beautifulness that Y can get?
Input

First line contains only n.

Second line contains the permutation p1,p2,p3...pn separated by space.
Output

The only line of output contains an integer, maximum beautifulness that Y can get.
Example

Input:

5

1 4 2 3 5

Output:

12
Explanation

Y can swap 1th and 5th element and the permutation becomes 5,4,2,3,1 with beautifulness . abs(5-1) + abs(4-2) + abs(2-3) + abs(3-4) + abs(1-5) = 12

*/

let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

