/*

Height of Tree

Given the level order traveral of a tree, find the height of the tree, given that all levels are complete in the tree. The final bottommost level may be the only layer which is incomplete.
Input

The first line of the input is a string containing values in the order of level order traversal of the tree where, numbers denote node values, and a character “N” denotes NULL child for the tree.
Output

Single integer denoting the height of the tree
Example

Input: 1 2 3 4 5 6

Output: 3
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

    height(root) {
        // write code here
        if (root == null)
            return 0;
        else
        {
            let left_height = this.height(root.left);
            let right_height = this.height(root.right);
            return Math.max(left_height, right_height) + 1;            
        }
    }

    insertLevelOrder(arr, i, n) {
        if (i >= n) {
            return null;
        }
        let tree = new Node(arr[i]);
        tree.left = this.insertLevelOrder(arr, 2 * i + 1, n);
        tree.right = this.insertLevelOrder(arr, 2 * i + 2, n);
        return tree;
    }
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

let arr = readLine().split(" ");
convertToNumber(arr);
let tree = new BinaryTree();
tree.root = tree.insertLevelOrder(arr, 0, arr.length)
console.log(tree.height(tree.root))