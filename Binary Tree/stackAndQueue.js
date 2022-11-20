// Stack implementation Using Array
class Stack {
    constructor() {
        this.stack = [];
    }

    // Checking whether stack is empty or not;
    isEmpty() {
        return this.stack.length === 0;
    }

    // Adding element in stack
    push(item) {
        this.stack.push(item);
    }

    // Removing Element in stack
    pop() {
        if (this.stack.length == 0) return "stack is empty";
        return this.stack.pop();
    }

    // Getting the value of last Element of stack with removal
    peak() {
        return this.stack[this.stack.length - 1];
    }

    // Printing the stack
    print() {
        let str = '';
        for (let i = 0; i < this.stack.length; i++) {
            str += this.stack[i] + ' ';
        }
        return console.log(str);
    }

    // Stack length 
    length() {
        return this.stack.length;
    }
}

let stack = new Stack();
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(10)
stack.pop();
stack.push(11)
stack.push(4)
stack.print()
console.log(stack.peak())
console.log(stack.length())




/**
 * 
###########################################################################################
Basic Principle of Stack & Queue using Arrays.

Stack:

var stack = [];

//put value on top of stack
stack.push(1);

//remove value from top of stack
var value = stack.pop();

Queue:

var queue = [];

//put value on end of queue
queue.push(1);

//Take first value from queue
var value = queue.shift();

#############################################################################################
 */


// Using Linked list 

/*
// For Stack
var Stack = function () {
    this.top = null;
    this.size = 0;
};

var Node = function (data) {
    this.data = data;
    this.previous = null;
};

Stack.prototype.push = function (data) {
    var node = new Node(data);

    node.previous = this.top;
    this.top = node;
    this.size += 1;
    return this.top;
};

Stack.prototype.pop = function () {
    temp = this.top;
    this.top = this.top.previous;
    this.size -= 1;
    return temp;
};

// For Queue:

    var Queue = function () {
        this.first = null;
        this.size = 0;
    };

var Node = function (data) {
    this.data = data;
    this.next = null;
};

Queue.prototype.enqueue = function (data) {
    var node = new Node(data);

    if (!this.first) {
        this.first = node;
    } else {
        n = this.first;
        while (n.next) {
            n = n.next;
        }
        n.next = node;
    }

    this.size += 1;
    return node;
};

Queue.prototype.dequeue = function () {
    temp = this.first;
    this.first = this.first.next;
    this.size -= 1;
    return temp;
};

*/