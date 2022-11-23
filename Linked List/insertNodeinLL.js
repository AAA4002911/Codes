/*

Insert node in LL

Create a link list of size N according to the given input literals. Each integer input is accompanied by an indicator which can either be 0 or 1. If it is 0, insert the integer in the beginning of the link list. If it is 1, insert the integer at the end of the link list.
Input

First line is an integer T, representing total number of test cases. For each testcase, 1st line containing space separated integers of linked list and indicator to insert from left to right.
Output

T lines, each line containing the nodes of linked list for each test case.
Example

Input: 1

1 0 2 1 3 0

Output: 3 1 2
Explanation

For the first test case, insert 1 ,indicator 0 so insert at begining, linked list is 1 insert 2 ,indicator 1 so insert at end, linked list is 1 2 insert 3 ,indicator 0 so insert at begining, linked list is 3 1 2

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

    push(newValue) {
        let newNode = new Node(newValue);
        if (this.head == null) {
            this.head = newNode;
            this.tail = newNode;
            return
        }
        this.tail.next = newNode;
        this.tail = newNode;

    }
    makeListAndPrint() {
        let str = "";
        let temp = this.head;
        let count = 0;
        let prev_val = this.head.data;
        while (temp != null) {
            if (count % 2 != 0) {
                if (temp.data === '0') {
                    str = prev_val + " " + str;
                }
                else if (temp.data === '1') {
                    str += prev_val + " ";
                }
            }
            else {
                prev_val = temp.data;
            }
            count++;
            temp = temp.next;
        }
        console.log(str)
    }
}

function read_list_input() {
    let values = readLine().split(" ");
    let linkedList = new LinkedList();
    for (val of values) {
        linkedList.push(val);
    }
    return linkedList;
}
let testCases = parseInt(readLine());
for (let i = 0; i < testCases; i++) {
    let linkedList = read_list_input();
    linkedList.makeListAndPrint();
}