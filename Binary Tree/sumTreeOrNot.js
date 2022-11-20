/*

Given Binary tree is a Sum Tree or Not
Description

Given a binary tree, check if it is a sum tree or not. In a sum tree, value at each non-leaf root is equal to the sum of elements present in its left and right subtree. The value of the leaf root can be anything.

For example,

          16                             
         / \                            
        2   7                          
            /\             
           2  3                         
          / \                              
         1   1                           

Input format

First line is an integer T, representing total number of test cases. For each testcase, input is string containing space separated values. The values in the string are in the order of level order traversal of the tree where, numbers denote root values, and a character “N” denotes NULL child.
Output format

T lines, each line containing the result for each test case.Yes if the given binary tree is a sum tree else No.
Sample input

2
44 9 13 4 5 6 7
20 8 22 5 3 N 25 N N 10 14

Sample output

Yes
No

Explanation


The tree formed is 
             44
            /  \
          9     13
         / \    / \
        4   5  6   7

Clearly, value of all non-leaf nodes is equal to sum of values of their right and left subtrees


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

class Node {
	constructor(data) {
		this.data = data;
		this.left = null;
		this.right = null;
	}
}

class BinaryTree {
	constructor() {
		this.root = null;
	}

	insertLevelOrder(arr, i, n) {
		if (i >= n) {
			return null;
		}
		if (arr[i] === null) {
			return null;
		}

		let tree = new Node(arr[i]);

		tree.left = this.insertLevelOrder(arr, 2 * i + 1, n);
		tree.right = this.insertLevelOrder(arr, 2 * i + 2, n);
		return tree;
	}
}

function getSum(root) {
	if (root == null) return 0;
	return getSum(root.left) + root.data + getSum(root.right);
}

function isSumTree(root) {
	if (root == null) { return true }
	if (root.left == null && root.right == null) { return true }
	
	let ls = getSum(root.left);
	let rs = getSum(root.right);
	if ((root.data == ls + rs) && isSumTree(root.left) && isSumTree(root.right)) {
		return true;
	}
	return false;
}

function convertToNumber(arr) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] !== "N") {
			arr[i] = parseInt(arr[i]);
		} else {
			arr[i] = null;
		}
	}
}

let T = parseInt(readLine());
while (T--) {
	let arr = readLine().split(" ");
	convertToNumber(arr);
	let tree = new BinaryTree();
	tree.root = tree.insertLevelOrder(arr, 0, arr.length);
	if (isSumTree(tree.root)) {
		console.log("Yes");
	} else {
		console.log("No");
	}
}