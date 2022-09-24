/*
10x Progress
At 10x, we store the details of students and their progress so far. Now we want to generate a progress report of the students using all the details of the exams so far. Please help us generate this report.

We want you to create a class with the following functionalities.

A constructor - takes one input parameter, which is the student's name
A member function, enter_score - takes marks as input and stores them
A member function, get_average_score - takes no arguments and returns the average rounded off to nearest integer of all the marks entered so far.
A member function, get_test_score - takes the test_number as the input and returns marks of that particular test.
Note: return NA, if the given query is not valid.

Example
Input:

Harry
5
80
75
35
100
80
4
get_marks 
2
average
get_marks 
3
get_marks 
10
Output:

Harry test 2 marks: 75
Harry average score: 74
Harry test 3 marks: 35
Harry test 10 marks: NA
Explanation:
The name of the student is Harry. The number of tests is 5. The marks for them are [80,75,35,100,80]. Then we have 4 queries. The first query is get_marks, the next line denotes test_number as 3, which means we have to return the marks of 3rd test as specified. The second query is average, which means we have to return the average marks of all the tests. Similarly, the 3rd query is similar to 1st query. In the fourth query, we have to return the marks of Harry for the test number 10, which doesn't exist. Hence, we are returning NA.

Note:
We will handle the reading of input, We will use class name as Student.

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

class Student {
    constructor(name) {
        this.name = name;
        this.marks_arr = [0];
        this.sum = 0;
    }
    enter_score(marks) {
        this.marks_arr.push(marks);
    }
    get_average_score() {
        for (let i = 0; i < this.marks_arr.length; i++) {
            this.sum += this.marks_arr[i];
        }
        return Math.round(this.sum / noOfMarks);
    }
    get_test_score(test_number) {
        return this.marks_arr[test_number];
    }
}

let name = readLine();
let student1 = new Student(name);
let noOfMarks = parseInt(readLine());
for (let i = 0; i < noOfMarks; i++) {
    let marks = parseInt(readLine());
    student1.enter_score(marks);
}

let query = parseInt(readLine());
while (query--) {
    let query_string = readLine();
    if (query_string == 'get_marks') {
        let testNo = parseInt(readLine());
        if (testNo > noOfMarks || testNo <= 0) console.log(student1.name , 'test', testNo , 'marks: NA');
        else {
            let value = student1.get_test_score(testNo);
            console.log(student1.name, 'test' ,testNo, 'marks:', value);
        }
    }
    else if (query_string == 'average') {
        let value = student1.get_average_score();
        console.log(student1.name, 'average score:', value);
    }
    else console.log('NA');
}