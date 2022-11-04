/*

Delete Duplicates
Description

Given an unsorted linked list of N nodes. The task is to remove duplicate elements from this unsorted Linked List. When a value appears in multiple nodes, the node which appeared first should be kept, all others duplicates are to be removed. You need to implement remove duplicates function only.
Input

First line contains an integer N denoting the size of the Linked List.

Next line contain N space separated integers dentoing the LL.
Output

Print the final LL

Input:

5

1 1 2 2 5

Output:

1 2 5

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


class Node{ 
    constructor(value){ 
        this.data = value; 
        this.next = null;
    }
}
class LinkedList{ 
  constructor(){ 
      this.head = null;
  }
    push(new_value){ 
        let new_node = new Node(new_value)
        if(this.head === null){
            this.head = new_node;
            this.tail = new_node;
            return
        }
        this.tail.next = new_node;
        this.tail = new_node; 
    }   
    deleteDuplicates(){
        let collection = new Set();
        let curr = this.head;
        let prev = null;
        if (curr == null) {
            return curr;
        }
        prev = curr;
        collection.add(curr.data);
        curr = curr.next;
        
        while (curr != null) {
            if (collection.has(curr.data)) {
                prev.next = curr.next;
            }
            else {
                collection.add(curr.data)
                prev = curr;
            }
            curr = curr.next;
        }
        return this.head;
	}
}

function readListInput(){
    let vals = readLine().split(" ");
    let linkedList = new LinkedList(); 
    for(let val of vals){
        linkedList.push(val);
    }
    return linkedList;
}

function printLL(head){
	let temp = head;
	let res = "";
	while(temp !== null){
		res += temp.data + " ";
		temp = temp.next;
	}
	console.log(res);
}

let n = parseInt(readLine());
let linkedList = readListInput();
printLL(linkedList.deleteDuplicates());