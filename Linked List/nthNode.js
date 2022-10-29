/*

find nth node in linkedlist

Write a function (getElementAt) that takes a linked list and a query index (1-based indexing) and returns the data value stored in the node at that index position. If index does not exist return -1.
Input

First line is an integer T, representing total number of test cases. For each testcase, 1st line contains space separated integers of linked list from left to right. For each testcase, 2nd line contains query index.
Output

T lines, each line containing the node value for each test case.
Example

Input: 
2
23 92 415 54 611
4
101 74 81
0

Output: 
54
-1

Explanation: First line contains 2, means there are 2 test cases.

Linked list in the first test case is 23 -> 92 -> 415 -> 54 -> 611.

Query index is 4. The 4th element is 54.

Linked list in the second test case is 101 -> 74 -> 81.

Query index is 0. The question follows 1-based indexing. So, 0 is not a valid index. So, the output is -1.

*/


let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1];
}

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// -------- Do NOT edit anything above this line ----------

function getElementAt(qIndex, listHead) {
    let current = listHead;
    let index = 1;
    
    while (current != null) {
        if (index == qIndex)
            return current.data;
        index++;
        current = current.next;
    }
    return -1;
}

// -------- Do NOT edit anything below this line ----------
let numTests = parseInt(readLine());
for (let i = 0; i < numTests; ++i) {
    let listElements = readLine().split(" ");
    let index = parseInt(readLine());
    let head = null;
    if (listElements.length > 0) {
        head = new Node(parseInt(listElements[0]));
        let currNode = head;
        for (let j = 1; j < listElements.length; ++j) {
            currNode.next = new Node(parseInt(listElements[j]));
            currNode = currNode.next;
        }
    }
    console.log(getElementAt(index, head));
}
