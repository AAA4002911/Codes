/*

Smaller Numbers

Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].

Return the answer in an array.
Input

First line consists of a single integer, denoting N, length of array.

Next N lines containing one integer per line denoting the elements of array A.
Output

Print the resultant array, one element in one line.
Constraints:

    2 <= nums.length <= 500
    0 <= nums[i] <= 100

Example

Input:

5

8

1

2

2

3

Output:

4

0

1

1

3
Explanation

nums = [8,1,2,2,3]

Output: [4,0,1,1,3]

For nums[0]=8 there exist four smaller numbers than it (1, 2, 2 and 3).

For nums[1]=1 does not exist any smaller number than it.

For nums[2]=2 there exist one smaller number than it (1).

For nums[3]=2 there exist one smaller number than it (1).

For nums[4]=3 there exist three smaller numbers than it (1, 2 and 2).
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



function hashmap(nums) {
    let hashmap = new Map();
    for (let i = 0; i < nums.length; i++) {
        hashmap.set(nums[i], 0);
        for (let j = 0; j < nums.length; j++) {
            if (nums[j] < nums[i] && j != i) {
                hashmap.set(nums[i], 1 + hashmap.get(nums[i]));
            }
        }
        console.log(hashmap.get(nums[i]));
    }
}

let n = parseInt(readLine());
let nums = [];
while (n--) nums.push(parseInt(readLine()));

hashmap(nums);