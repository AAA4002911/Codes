// let arr = [10,20,30,40,50];

// function sortChecker(arr) {
//     for (let i = 1; i <= arr.length; i++) {
//         if (arr[i] > arr[i - 1]) {
//             // console.log(arr[i - 1])
//             continue;
//         }
//         if (i == arr.length) return 'true';
//         else return 'false';
//     }
// }

// console.log(sortChecker(arr));

// let arr = [1, 2, 2, 3, 3, 4, 4, 5, 5];

// function duplicateRemover(arr) {
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] == arr[i - 1]) {
//             arr.splice(i, 1);
//         }
//     }
//     if (arr[arr.length - 1] == arr[arr.length - 2]) arr.pop();

//     return arr;

// }

// // console.log(duplicateRemover(arr));

// let fs = require("fs");
// let data = fs.readFileSync(0, 'utf-8');
// let idx = 0;
// data = data.split('\n');

// function readLine() {
//     idx++;
//     return data[idx - 1].trim();
// }


// class Student {
//     constructor(n) {
//         this.name = n
//     }
//     enter_score() {
//         marks[i] = parseInt(readLine())
//     }
//     get_test_score(m) {
//         if (m > 0 && m <= marks.length) console.log(this.name, "test", m, "marks:", marks[m - 1])
//         else console.log(this.name, "test", m, "marks: NA")
//     }
//     get_average_score() {
//         let sum = 0;
//         for (let k = 0; k < marks.length; k++) sum = sum + marks[k];
//         let avg = Math.round(sum / marks.length);
//         console.log(this.name, "average score:", avg);
//     }
// }

// let Name = readLine()
// let noOfMarks = parseInt(readLine())
// let student = new Student(Name)
// let marks = [];
// for (i = 0; i < noOfMarks; i++) {
//     student.enter_score();
// }
// let noOfQueries = parseInt(readLine())
// for (i = 0; i < noOfQueries; i++) {
//     let input = readLine();
//     if (input == "get_marks") {
//         let score = parseInt(readLine());
//         student.get_test_score(score);
//     }
//     else if (input == "average") student.get_average_score()
// }


// let arr = [1,3,4,6,4,9,0];
// let set = new set();
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] in set)
// }

// let sudoku = [];
// for (let i = 0; i < 9; i++) {
//     sudoku.push(readLine().split(","));
// }

// for (let i = 0; i < 9; i++) {
//     let row = new set();
//     let col = new set();
//     for (let j = 0; j < 9; j++) {
//         if (sudoku[i][j] in row) return false;
//         else row.add(sudoku[i][j]);
        
//         if (sudoku[j][i] in col) return false
//         else col.add(sudoku[j][i]);    
//     }
// }

// const n = parseInt(readLine())
// const arr1 = readLine().split(" ").map(x => parseInt(x))

// const t = parseInt(readLine())
// const arr2 = readLine().split(" ").map(x => parseInt(x))

// for (let i = 0; i < t; i++) {
//     const input = arr2[i]
//     let ans = 0, count = 0
//     for (let j = 0; j < n; j++) {
//         if (input == arr1[j]) {
//             ans = count + 1
//             break
//         }
//         if (arr1[j] < input) {
//             count++
//         }
//     }
//     console.log(ans);
// }

let arr = [8,9,1,3,2,1]
let left = [];
let right = [];
for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < i; j++) {
        if (arr[j] <= arr[i]) count++;
    }
    left.push(count);
    count = 0;
    for (let k = i; k <= arr.length; k++) {
        if (arr[k] < arr[i]) count++;
    }
    right.push(count);
}

console.log(left)
console.log(right)