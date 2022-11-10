/*

Delete Node

Given a singly linked list and a position, delete a linked list node at the given position.
Note:

This is a functional problem, so you don't need to worry about the input and output format. Simply take care of the deleteNode function. Make sure to take care, whether the given position is valid or not!
Constraint:

Position value will non-negative.
Example & Explanation:

Input: position = 1, Linked List = 8->2->3->1->7
Output: Linked List =  8->3->1->7

Input: position = 0, Linked List = 8->2->3->1->7
Output: Linked List = 2->3->1->7

In the first example, the node at position 1 is removed. And in the second example, the node at position 0 is removed.

*/

let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format 


// javascript program to detect loop in the linked list 

// Node class 
class Node {

    // Constructor to initialize the node object 
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class LinkedList {
    // Function to initialize head 
    constructor() {
        this.head = null;
    }
    // Do not change anything above this line
    deleteNode(position) {
        // YOU ONLY NEED TO COMPLETE THIS FUNCTION.
        let curr = this.head;
        if (position == 0) {
            this.head = this.head.next;
            return;
        }
        for (let i = 0; i < position - 1; i++) {
            if (!curr || !curr.next) return;
            curr = curr.next;
        }
        if (!curr.next) return;
        curr.next = curr.next.next;
    }


    //Utility function to print the linked LinkedList 
    printList() {
        let temp = this.head;
        let str = '';
        while (temp) {
            str += (temp.data + ' ');
            temp = temp.next;
        }
        console.log(str);
    }
}

// Do not change anything below this line
function convertToNumber(list) {
    for (let value of list) {
        value = parseInt(value);
    }
    return list;
}


let n = parseInt(readLine());

// Start with the empty list 
let llist = new LinkedList();

temp = readLine().split(" ");
convertToNumber(temp);
if (n < 1) {
    llist.head = null;
}
else if (n < 2) {
    llist.head = new Node(temp[0]);
}
else {
    llist.head = new Node(temp[0]);
    let second = new Node(temp[1]);
    llist.head.next = second;
    curr = llist.head.next;
}


for (let i = 2; i < n; i++) {
    let t = new Node(temp[i]);
    curr.next = t;
    curr = curr.next;
}
let pos = parseInt(readLine());
llist.deleteNode(pos);
llist.printList();