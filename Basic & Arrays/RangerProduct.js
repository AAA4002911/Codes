/*
Ranger Product
Power Rangers S.P.D. is the thirteenth season of the American television series, 
Power Rangers. The Red ranger defines the ranger product as:

An array output such that output[i] is equal to the product of all 
the elements of nums except nums[i].

Red ranger asks blue ranger:

Given an array nums of n integers where n > 0, 
print the ranger product array as space seperated values.

If the array has only 1 element, print 1 as result.

Being the friend of Blue ranger, can you help him to solve this?

Note:
Please solve it without division and in O(n).
Elements of the array can be zero 0 as well.
Input Format
First line denotes the number of testcases.

First line of each testcase denotes the size of the array nums.
The next line contains the n elements as space seperated integers.
Output Format
One line for each testcase, denoting the result array as space-seperated integers.

Sample Input
1
4
1 2 3 4
Sample Output
24 12 8 6
*/
let fs = require("fs");
const { arrayBuffer } = require("stream/consumers");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
	idx++;
	return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking inplet fs = require("fs");

let test_cases = parseInt(readLine());
while(test_cases--) {
	let n = parseInt(readLine());
	let arr = readLine().split(" ").map(Number);

	let left = [1];
	for (let i = 1; i < n; i++) {
		left[i] = left[i - 1] * arr[i - 1];
	}
	let right = [];
	right[n - 1] = 1;
	for (let i = n - 2; i >= 0; i--) {
		right[i] = right[i + 1] * arr[i + 1];
	}
	let product = [];
	for (let i = 0; i < n; i++) {
		product[i] = left[i] * right[i];
	}
	console.log(...product);
}
 

/*//With Divison:
let test_cases = parseInt(readLine());

for (let i = 0; i < test_cases; i++) {
	let n = parseInt(readLine());
	let nums = readLine().split(" ").map(Number);
	if (n == 1) console.log(1);
	else console.log(...product(nums, n));
}

function product(nums, n) {

	let product = 1;
	let flag = 0;
	for (let i = 0; i < n; i++) {
		if ((nums[i]) != 0) product *= nums[i];
		if ((nums[i]) == 0) flag++;
	}
	let result = [];
	if (flag == 0) {
		for (let i = 0; i < n; i++) {
			result[i] = (product / nums[i]);
		}
	} else if (flag == 1) {
		for (let i = 0; i < n; i++) {
			if (nums[i] == 0) result[i] = product;
			else result[i] = 0;
		}
	} else {
		for (let i = 0; i < n; i++) {
			result[i] = 0;
		}
	}
	return (result);
}
*/
