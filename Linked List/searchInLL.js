/*

Search in a LL
Description

You are given a linked list and a particular key to search for. Return True if it exists or False otherwise.

Each node of the linked list has a key field and a next field

Do not worry about reading the input in this problem. Simply fill the function search with your implementation.

Do not worry about printing output. Simply make sure that the function search returns the correct Boolean.
Explanation

Say the linked list is 76 -> 66 -> 11 -> 73 -> 77 and the given key is 73, output is True

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


// Node class 
class Node{
    //Constructor to initialize the node object 
    constructor(key){ 
        this.key = key; 
        this.next = null;
    }
}
class LinkedList{
// Function to initialize head 
    constructor(){ 
        this.head = null;
        this.tail = null;
    }
    insert(key){
        if (!this.head){
            this.head = new Node(key);
            this.tail = this.head;
        }
        else{
            this.tail.next = new Node(key);
            this.tail = this.tail.next;
        }
    }

// ------------ DO NOT MANE ANY CHANGE ABOVE THIS LINE ---------
    search(key){
        // WRITE YOUR IMPLEMENTATION OF SEARCH HERE
        let temp = this.head;
        while (temp != null) {
            if (temp.key == key) return 'True';
            temp = temp.next;
        }
        return 'False';
    }
}        
// ----------- DO NOT MAKE ANY CHANGES BELOW THIS LINE ---------
// reading from input and making linked list
function convertToIntegers(ar) {
    for (let i = 0; i < ar.length; i++) {
        ar[i] = parseInt(ar[i]);
    }
    return ar;
}


let numTests = parseInt(readLine());


for(let test=0;test<numTests;test++){
    let ll = new LinkedList();
    let key = parseInt(readLine());
    let ar= readLine().split(" ");
    let elements = convertToIntegers(ar);
    for(e of elements){
        ll.insert(e);
    }
    console.log(ll.search(key));
}