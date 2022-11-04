/*

check linked list is palindrome

Given a singly linked list of integers, write a function that returns true if the given list is a palindrome, else false.
Input

First line is an integer T, representing total number of test cases. For each testcase, 1st line containing space separated integers of linked list from left to right.
Output

T lines, each line containing the result for each test case.
Example

Input: 2

1 2 2 1

1 1 1 1 2

Output: True

False
Explanation

For the first test case, 1 2 2 1 back walk also gives 1 2 2 1 so true

For the second test case, 1 1 1 1 2 back walk gives 2 1 1 1 1 so not same, will give output false
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
    constructor(value) {
        this.data = value;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }
    push(new_value) {
        let new_node = new Node(new_value)
        if (this.head === null) {
            this.head = new_node;
            this.tail = new_node;
            return
        }
        this.tail.next = new_node;
        this.tail = new_node;
    }
    isPalin() {
        //WRITE CODE HERE
        let size = 0;
        let temp = this.head;
        while (temp != null) {
            size++;
            temp = temp.next;
        }
        let mid = Math.floor(size / 2);
        let curr = this.head;
        let prev = null;
        let nxt = null;
        for (let i = 1; i <= size; i++) {
            if (i > mid) {
                nxt = curr.next;
                curr.next = prev;
                prev = curr;
                curr = nxt;
            }
            else {
                curr = curr.next;
            }
        }
        let reverse_head = prev;
        let temp_head = this.head;
        // console.log(reverse_head)
        // console.log(temp_head)
        for (let i = 0; i < mid; i++) {
            if (temp_head.data != reverse_head.data) {
                return 'False';
            }
            temp_head = temp_head.next;
            reverse_head = reverse_head.next;
        }
        return 'True';
    }
}

function readListInput() {
    let vals = readLine().split(" ");
    let linkedList = new LinkedList();
    for (let val of vals) {
        linkedList.push(val);
    }
    return linkedList;
}
let testCases = parseInt(readLine());
for (let i = 0; i < testCases; i++) {
    let linkedList = readListInput();
    console.log(linkedList.isPalin());
}