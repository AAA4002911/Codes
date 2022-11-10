/*

check binary tree is symmetric or not

Given a Binary Tree. Check whether it is Symmetric or not, i.e. whether the binary tree is a Mirror image of itself or not(by structure). You will be provided template code for input, you need to complete the function for solution. if symmetric then return True, if not then return False

Note: A null tree is considered as symmetric.
Input

First line is an integer T, representing total number of test cases. For each testcase, input is string containing space separated values. The values in the string are in the order of level order traversal of the tree where, numbers denote node values, and a character “N” denotes NULL child.
Output

T lines, each line containing the result for each test case.
Example

Input: 2

5 1 1 2 N N 5

5 1 1 2

Output: Yes

No
Explanation

For the first test case,

     5
   /   \
  1     1
 /       \
2         5

left subtree structure is mirror reflection of right subtree so Yes

For the second test case

     5
   /   \
  1     1
 /       
2         

left subtree structure is not mirror reflection of right subtree so No
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

function isSymmetric(left, right) {
    //write code here
    if (!left && !right) return true;
    else if (left && right) return isSymmetric(left.left, right.right) && isSymmetric(left.right, right.left);
    else return false;
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
    if (isSymmetric(tree.root, tree.root)) {
        console.log("Yes");
    } else {
        console.log("No");
    }
}