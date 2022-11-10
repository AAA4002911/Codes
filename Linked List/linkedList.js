class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
        this.temp = null;
    }

    // Print Linked List
    print() {
        let temp = this.head;
        let result = "";
        while (temp !== null) {
            result += temp.data + " ";
            temp = temp.next;
        }
        console.log(result);
    }

    // Push Element to the end of Linked List
    push(val) {
        let node = new Node(val);
        if (this.head == null) {
            this.head = node;
            this.temp = node;
        }
        else {
            this.temp.next = node;
            this.temp = node;
        }
        this.size++;
    }

    // Add Element to the begining of LL
    unshift(val) {
        let node = new Node(val);
        node.next = this.head;
        this.head = node;
    }

    // Remove Element from the last of LL
    pop() {
        if (this.head == null) return;
        let curr = this.head;
        let prev = null;
        while (curr.next != null) {
            prev = curr;
            curr = curr.next;
        }
        prev.next = null;
        this.size--;
    }

    // Remove Element from the begining of LL
    shift() {
        this.head = this.head.next;
        this.size--;
    }

    // Inserting Element at perticular index
    insertAt(val, index) {
        if (index < 0 || index > this.size) {
            return console.log("Invalid index");
        }
        let node = new Node(val);
        if (index == 0) {
            node.next = this.head;
            this.head = node;
        }
        else {
            let curr = this.head;
            let prev = null;
            let i = 0;
            while (i < index) {
                i++;
                prev = curr;
                curr = curr.next;
            }
            node.next = curr;
            prev.next = node;
        }
    }

    // Delete Element at perticular index
    removeFrom(index) {
        if (index < 0 || index >= this.size) {
            return console.log("Invalid index");
        }
        if (index == 0) {
            this.head = this.head.next;
        }
        else {
            let curr = this.head;
            let i = 0;
            while (i < index - 1) {
                i++;
                curr = curr.next;
            }
            curr.next = curr.next.next;
        }
        this.size--;
    }

    // Delete Given Element
    remove(val) {
        let curr = this.head;
        let prev = null;
        while (curr != null) {
            if (curr.data == val) {
                if (prev == null) {
                    this.head = this.head.next;
                }
                else {
                    prev.next = curr.next;
                }
                this.size--;
                return curr.data;
            }
            prev = curr;
            curr = curr.next;
        }
        return console.log("Not Found");
    }

    // Finding the index of data (Zero based indexing)
    indexOf(val) {
        let count = 0;
        let curr = this.head;
        while (curr != null) {
            if (curr.data === val) return console.log(`Index of ${val} : ${count}`);
            count++;
            curr = curr.next;
        }
        return console.log('Not Found');
    }

    // length of Linked List
    length() {
        return console.log(this.size);
    }
}

let arr = [2, 3, 4, 5, 6, 7, 1];
let linkedList = new LinkedList();
for (let val of arr) {
    linkedList.push(val);
}

// Operation:
// linkedList.push(10);
// linkedList.unshift(10)
// linkedList.pop();
// linkedList.shift();
// linkedList.insertAt(10, 7);
// linkedList.removeFrom(5);
// linkedList.remove(2);
// linkedList.indexOf(5);
// linkedList.length();

linkedList.print();