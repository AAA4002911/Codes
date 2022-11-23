/*

Merge LL
Description

Given 2 sorted LL You need to merge them.

You just need to complete mergeLists function
Input

First line contains an integer N1 denoting the size of the 1st Linked List.

Second line contain N1 space separated integers dentoing the LL.

Third line contain an integer N2 denoting the size of 2nd LL.

Second line contain N2 space separated integers dentoing the LL.
Output

Print the mergerd list

Input:

3

2 3 5

4

1 4 6 7

Output:

1 2 3 4 5 6 7

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
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.last_node = null;
    }
    append(data) {
        if (this.last_node === null) {
            this.head = new Node(data);
            this.last_node = this.head;
        }
        else {
            this.last_node.next = new Node(data);
            this.last_node = this.last_node.next;
        }
    }
    display() {
        var current = this.head;
        let res = '';
        while (current) {
            res = res + current.data + " ";
            current = current.next;
        }
        console.log(res);
    }
}

function reverse_llist(llist) {
    let before = null
    let current = llist.head
    if (current === Null) {
        return
    }
    let after = current.next
    while (after) {
        current.next = before
        before = current
        current = after
        after = after.next
        current.next = before
        llist.head = current
    }
}
function mergeLists(headA, headB) {
    //imlpement this function
    let res = new LinkedList();

        while (headA && headB) {
            if (headA.data > headB.data) {
                res.append(headB.data)
                headB = headB.next
            }
            else {
                res.append(headA.data)
                headA = headA.next
            }
        }
        while (headA) {
            res.append(headA.data)
            headA = headA.next
        }
        while (headB) {
            res.append(headB.data)
            headB = headB.next
        }
        return res.head

    // Using array
    /*
    let arr = [];
    while (headA) {
        arr.push(headA.data);
        headA = headA.next;
    }
    while (headB) {
        arr.push(headB.data);
        headB = headB.next;
    }
    arr.sort((a,b)=> a - b);
    let res = new LinkedList();
    for (let i = 0; i < arr.length; i++) {
        res.append(arr[i]);
    }
    return res.head;
     */
}

// Create 2 lists
var listA = new LinkedList()
var listB = new LinkedList()
// Add elements to the list in sorted order
let n1 = parseInt(readLine())
let l1 = readLine().split(" ")
l1.map(Number)
let n2 = parseInt(readLine())
let l2 = readLine().split(" ")
l2.map(Number)
for (i of l1) {
    listA.append(parseInt(i))
}
for (i of l2) {
    listB.append(parseInt(i))
}
// Call the merge function
listA.head = mergeLists(listA.head, listB.head)

// Display merged list
listA.display()