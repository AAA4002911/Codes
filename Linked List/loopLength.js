/*

Loop Length

Given a head pointer to the linked list, complete the function detectAndCountLoop() that checks whether a given Linked List contains loop and if loop is present then returns count of nodes in loop. For example, the loop is present in below-linked list and length of the loop is 4. If the loop is not present, then the function should return 0.
Note:

This is a functional problem, so you don't need to worry about the input and output format. Simply take care of the detectAndCountLoop function.
Example & Explanation:

Suppose, given Linked List is:

76 -> 66 -> 11 -> 73 -> 77 
       ^                 |
       |_________________|  

Then, the output should be:

4

Because, the given linked list consists of a loop and the length of the loop is 4!
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



// JS program to detect loop in the linked list 

// Node class 
class Node {
    //Constructor to initialize the node object 
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

    detectAndCountLoop() {
        // YOU ONLY NEED TO COMPLETE THIS FUNCTION.
        // RETURN Length-of-the-loop IF LOOP IS THERE IN THE LINKED LIST, ELSE RETURN 0
        let slow = this.head;
        let fast = this.head.next;
        while (slow != null && slow.next != null && fast.next != null) {
            if (slow == fast) {
                let result = 1;
                let temp = slow;
                while (temp.next != slow) {
                    result++;
                    temp = temp.next;
                }
                return result;
            }
            slow = slow.next;
            fast = fast.next.next;
        }
        return 0;
    }
}


// Do not change anything below this line
let n = parseInt(readLine());
// Start with the empty list 
let llist = new LinkedList();
let ar = readLine().split(" ");
let temp = ar.map(Number);
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
    var curr = llist.head.next;
}

for (let i = 2; i < n; i++) {
    let t = new Node(temp[i]);
    curr.next = t;
    curr = curr.next;
}
let link = parseInt(readLine());
if (link != -1) {
    t = llist.head;
    for (let i = 0; i < link - 1; i++) {
        t = t.next;
    }
    curr.next = t;
}
console.log(llist.detectAndCountLoop());