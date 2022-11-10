/*

Skip M delete N
Description

Given a linked list and two integers M and N. Traverse the linked list such that you retain M nodes then delete next N nodes, continue the same till end of the linked list.

You only need to implement a Function in the template.
Input

For each testcase, first line of input contains number of elements in the linked list and next M and N respectively space separated. The last line contains the elements of the linked list.
Output

Print the final LL

Input:

8

2 1

9 1 3 5 9 4 10 1

Output:

9 1 5 9 10 1

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


// JS program to delete M nodes after N nodes 

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
    // Function to insert a new node at the beginning 
    push(newData) {
        let newNode = new Node(newData);
        newNode.next = this.head;
        this.head = newNode;
    }
    // Utility function to prit the linked LinkedList 
    printList() {
        let temp = this.head;
        let str = '';
        while (temp) {
            str += (temp.data + ' ');
            temp = temp.next
        }
        console.log(str)
    }
    skipMdeleteN(M, N) {
        // Implment This
        let M_copy = M - 1;
        let N_copy = N;
        let curr = this.head;
        while (curr && curr.next) {
            if (!N_copy) {
                N_copy = N;
                M_copy = M;
            }
            if (M_copy) {
                curr = curr.next;
                M_copy--;
            }
            else {
                curr.next = curr.next.next;
                N_copy--;
            }
        }
    }

}

// Driver program to test above function 


let n = parseInt(readLine());
let input = readLine().split(" ");
let M = parseInt(input[0]);
let N = parseInt(input[1]);
let llist = new LinkedList();
let ar = readLine().split(" ");
l = ar.map(Number);
l.reverse();
for (i of l) {
    llist.push(i);
}
llist.skipMdeleteN(M, N);
llist.printList();