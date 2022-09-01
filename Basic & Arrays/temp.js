/*

Image Icon Match

You are given a 1D image. The image is a sequence of pixel values. 
You are also given an icon of a particular size. The icon is a sequence of 2 pixels. 
Find the number of times this icon appears in the image.
Input

First line contains n, the number of pixels in the image. 
This is followed by n lines, each containing one positive integer denoting a pixel, 
j, 0 <= j <= 255. This is followed by m, the number of pixels in the icon. 
This is follwoed by m lines, 
each containing one positive interger denoting a pixel k, 0 <= k <= 255.
Output

An integer i i >= 0, denoting the number of times the icon appears in the image.
Example

Input:

10
7
8
2
9
8
9
10
25
8
9
11
2
8
9

Output:

2

The first line is 10 i.e. 10 pixels in the given image 7, 27, 31, 8, 9, 10, 25, 8, 9, 11 is the given image After this, the line contains 2, i.e. 2 pixels in the icon 8, 9 is the given icon. 8, 9 appears twice in the image. So 2 is the answer.
*/
// let fs = require("fs");
// const { threadId } = require("worker_threads");
// let data = fs.readFileSync(0, 'utf-8');
// let idx = 0;
// data = data.split('\n');

// function readLine() {
//     idx++;
//     return data[idx - 1];
// }

// let n = parseInt(readLine());
// let array_image = [];
// let array_icon = [];
// for (let i = 0; i < n; i++) {
//     array_image.push(parseInt(readLine()));
// }
// let m = parseInt(readLine());
// for (let i = 0; i < m; i++) {
//     array_icon.push(parseInt(readLine()));
// }
// let j = 0;
// let count = 0;
// for (let i = 0; i < n; i++) {
//     if (array_icon[j] === array_image[i]) {
//         j++;
//         if (j == m) {
//             count++;
//             j = 0;
//         }
//     } else {
//     j = 0; }
// }
// console.log(count);



// x = 100;
// function test(x) {
//     x = 30;
// }
// console.log(x);
// test(x);
// console.log(x);


//spread Operator
// let A = [[1,2,3], [4,5,6,7], [8,9,10,11,12]];
// for (let i = 0; i < A.length; i++) {
// console.log(...A[i])
// }

// let arr = [0];
// arr[1] = 1;
// arr[2] = 2;
// console.log(arr)

// let readingTheline = readLine().split(" ").map(Number);
// let emptyArr= readLine().split(" ").map(Number);
// for(let i=1;i<readingTheline[0];i++){
//     emptyArr[i] = emptyArr[i] + emptyArr[i-1];
// }
// emptyArr.unshift(0);
// for(let i=0;i<readingTheline[1];i++){
//     let queries = readLine().split(" ");
//     let R = parseInt(queries[0]) , L =parseInt(queries[1]);
//     let result = emptyArr[L+1] -emptyArr[R]
//     console.log(result)
// }

/*
function data_base(name, roll, gender, branch, hostel) {
    this.name = name;
    this.roll = roll;
    this.gender = gender;
    this.branch = branch;
    this.hostel = hostel;
}
let person1 = new data_base("xyz", 2342342, "Male", "EEC", "boys");
let person2 = new data_base("xyz2", 32442342, "Female", "EEN", "Girls");
let person3 = new data_base("xyz3", 985234242, "Male", "CSE", "boys");

let input = readLine();
if(input == data_base.roll) {
    console.log(4)
}
*/

// function BPRecord(x, y) {
//     this.systolic = x;
//     this.diastolic = y;
//     this.generateReport = function () {
//         let diagnosis;
//         if (this.systolic > 140 || this.diastolic > 90) {
//             diagnosis = "High";
//         } else if (this.systolic < 90 || this.diastolic < 60){
//             diagnosis = "low";
//         } else {
//             diagnosis = "Normal";
//         }

//         console.log("BP Value: " + this.systolic +" / "+ this.diastolic)
//         console.log("Diagnosis: "+ diagnosis);
//     }
// }
// let report1 = new BPRecord(145, 85);
// report1.generateReport();


// class Student {
//     constructor(n, dob, add, ph, dept, prog, yoj, tf, fp) {
//         this.name = n;
//         this.dateOfBirth = dob;
//         this.address = add;
//         this.phoneNumber = ph;
//         this.dept = dept;
//         this.programme = prog;
//         this.yearOfjoining = yoj;
//         this.totalFees = tf;
//         this.feespaid = fp;
//     }
//     updateAdress(add) {
//         this.address = add;
//     }
//     updatephone(phone) {
//         this.phoneNumber = phone;
//     } 
//     updatefees(fee) {
//         this.feespaid -= fee;
//     }
// }
// let student1 = new Student("xyz", 2001, "fadfsasjf", 545845554, "EN", "2 yrs", 2016, 9000, 0);
// student1.updateAdress("new address")

// class CCAcount {
//     constructor(n, e, ph, u) {
//         this.customer_name = n;
//         this.custome_email = e;
//         this.custome_phonNumber = ph;
//         this.usedupamount = u;
//     }
//     getPendingBills() {
//         return this.usedupamount;
//     }
//     isTransactionAllowed(amount) {
//         if (amount + this.usedupamount > 200000) {
//             return "Exceeds the limit";
//         } else {
//             this.usedupamount -= amount;
//             return "Transaction is allowed";
//         } 
//     }
// }
// class goldCCaccoun extends CCAcount{
//     constructor(n, e, ph, u) {
//         super()
//     }
// }
// N = 6
// let arr = [7, 10, 4, 3, 20, 15];
// k = 3
// l =0
// console.log(arr.length, arr)

// let arr2 = [];
//     let j = 0;
//     for (let i = 0; i < arr.length; i++) {
//         let temp = arr[j];
//         if (arr[i] < temp) {
//             temp = arr[i];
//         }
//         if (i == arr.length -1) {
//             arr2.push(temp);
//             i = 0;
//             j++;
//         }
//         if (j == arr.length - 1) break;
        
//     }
//     console.log(arr2)
//     console.log(arr2[k -1]);


// let arr = [1, -1, 3, 2, -7, -5, 11, 6];
// let n = 8;
// function positivetoleft(arr, n) {        
//         let arr2 = [];
//         for (let i = 0; i < n; i++) {
//             if (arr[i] >= 0) {
//             arr2.push(arr[i]);
//             }
//         }
//         for (let i = 0; i < n; i++) {
//             if (arr[i] < 0) {
//             arr2.push(arr[i]);
//             }
//         }
//         return arr2;
//     }

// console.log(positivetoleft(arr, n));

// let test_cases = parseInt(readLine());
// class travelconcession{
//     constructor(x, g){
//     this.age = x;
//     this.gender = g;
//     }
//     check() {
//         this.age = Number(this.age);
//         if (this.age > 60 && this.gender == "M") {
//             console.log("Eligible");
//         } else if (this.age > 58 && this.gender == "F") {
//             console.log("Eligible");
//         } else {
//             console.log("Not Eligible");
//         }
//     }
// }
// for (let i = 0; i < test_cases; i++) {
//     let input = readLine().split(" ");
//     let user1 = new travelconcession(input[0], input[1]);
//     user1.check();
// }



// let arr = [2, 3, 5, -7, 9, 3, 6, 0, 100];
// arr = Math.min(...arr)
// console.log(arr);

let array = [1, 2, 5, 10, 20, 50, 100, 500, 1000];
let input = 64;
let result = 0;
change_maker(0, 0);
console.log(result);

function change_maker(i, sum) {
    if (sum == input) {
        result++;
        return;
      }
      if (i >= array.length) return;
      if (sum > input) return;

    change_maker(i, sum + array[i]);
    change_maker(i + 1, sum);
}


/*
//#######################################################################th
let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
	idx++;
	return data[idx - 1];
}

//#####################################################################
*/