/*
Reverse LL
Description

Given pointer to the head node of a linked list, the task is to reverse the linked list. We need to reverse the list by changing the links between nodes.

You just need to implement the reverse_llist function.
Input

First line contains an integer N denoting the size of the Linked List.

Next line contain N space separated integers dentoing the LL.
Output

Print the reversed LL

Input:

5

1 2 3 4 5

Output:

5 4 3 2 1
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

class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.last_node = null
    }
    append(data) {
        if (this.last_node === null) {
            this.head = new Node(data)
            this.last_node = this.head
        }
        else {
            this.last_node.next = new Node(data)
            this.last_node = this.last_node.next
        }
    }
    display() {
        var current = this.head
        let res = ''
        while (current) {
            res = res + current.data + " "
            current = current.next
        }
        console.log(res)
    }
}
function reverse_llist(llist) {
    // Implement this
    let curr = llist.head;
    let prev = null;
    let next = null;
    for (let i = 0; i < n; i++) {
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    llist.head = prev;
}


let a_llist = new LinkedList()
let n = parseInt(readLine())
let l = readLine().split(" ")
l.map(Number)
for (data of l) {
    a_llist.append(data)
}
reverse_llist(a_llist)
a_llist.display()