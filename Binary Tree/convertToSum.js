/**
 * 
convert a tree to sum tree

Given a Binary Tree where each node has positive or negative values. Convert this to a tree where each node contains the sum of the left and right sub trees in the original tree. The values of leaf nodes are changed to 0. Return the root node of converted tree.

You will be provided template code for input and to print output, you need to complete the function for solution.
Input

First line is an integer T, representing total number of test cases. For each testcase, input is string containing space separated values. The values in the string are in the order of level order traversal of the tree where, numbers denote node values, and a character “N” denotes NULL child.
Output

T lines, each line containing the result for each test case.
Example

Input: 2

10 -2 6 8 -4 7 5

1 2 3 N N 4 6 N 5 N N 7 N

Output:

20 4 0 0 12 0 0

27 0 22 12 7 0 0
Explanation

For the first test case,

             10
           /      \
         -2        6
       /   \      /  \ 
     8     -4    7    5

should be changed to

             20(4-2+12+6)
           /      \
     4(8-4)      12(7+5)
       /   \      /  \ 
     0      0    0    0

now print preorder of tree and output becomes 20 4 0 0 12 0 0

 */

let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

class Node {
    data; left; right;
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function buildTree(arr) {

    let rootNode = new Node(parseInt(arr[0]));
    let queue = [];
    queue.push(rootNode);
    for (let i = 1; i < arr.length; i = i + 2) {
        if (arr[i] != 'N') {
            queue[0].left = new Node(parseInt(arr[i]))
            queue.push(queue[0].left)
        }
        if (i + 1 != arr.length && arr[i + 1] != 'N') {
            queue[0].right = new Node(parseInt(arr[i + 1]))
            queue.push(queue[0].right)
        }
        queue.shift();
    }
    return rootNode;
}

function getSum(root) {
	if(root == null) {return 0}
	return getSum(root.left) + root.data + getSum(root.right);
}
function findSum(itrNode) {
    if (itrNode == null) { return null}
	itrNode.data = getSum(itrNode.left) + getSum(itrNode.right);

	findSum(itrNode.left);
	findSum(itrNode.right);	
}

function preOrder(rootNode) {
    if (rootNode == null) {
        return;
    }
    process.stdout.write(" " + rootNode.data);

    preOrder(rootNode.left);
    preOrder(rootNode.right);
}

let T = parseInt(readLine())
for (let i = 0; i < T; ++i) {
    let line = readLine();
    if (line.trim().length == 0) {
        console.log();
        continue;
    }
    arr = line.split(' ')
    if (arr.length != 0) {
        rootNode = buildTree(arr, 0);
        findSum(rootNode);
        preOrder(rootNode)
    }
    console.log();
}