/*
Greatest element on right
Description
Given an array of elements, replace every element in that array with the greatest 
element among the elements to its right (not including itself), 
and replace the last element with -1.

Input format
First line contains a positive integer n, denoting the number of elements in the array. 
Following n lines each contain a non-negative integer denoting one element of the array.

Output format
n lines where each line contains an integer, denoting the array after replacing every 
element with the greatest element among the elements to its right (not including itself)

Sample input
6
17
18
5
4
6
1
Sample output
18
6
6
6
1
-1
Explanation
First line is 6, i.e. 6 elements are in the array.
First element is 17. Among the elements to its right, the largest element is 18. 
So the first line of the output is 18.
Second element is 18. Among the elements to its right, the largest element is 6 
because we are not including the element 18. So the second line of the output is 6.
Third element is 5. Among the elements to its right, the largest element is 6. 
So the third line of the output is 6.
Fourth element is 4. Among the elements to its right, the largest element is 6. 
So the fourth line of the output is 6.
Fifth element is 6. Among the elements to its right, the largest element is 1 
because we are not including the element 6. So the fifth line of the output is 1.
Sixth element is 1. There are no elements to its right, So the sixth line of the output is -1.
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

function replaceElements(arr){
  
    // let last = -1;
    // for (let i = arr.length - 1; i >= 0; i--) {
    //   let temp = last;
    //   if (arr[i] > last) {
    //       last = arr[i];
    //   }
    //   arr[i] = temp;
    // }
    // return arr;

    let temp = [];
    temp[arr.length - 1] = -1;
    for (let i = arr.length - 2; i >= 0; i--) {
      temp[i] = Math.max(temp[i + 1], arr[i + 1]);
    }
    return temp;
}

// Do not edit anything below
let numElems = parseInt(readLine());
let arr = [];
for (let index=0;index<numElems;index++){
        arr.push(parseInt(readLine()));
}
let res=replaceElements(arr);
for(elem of res){
  console.log(elem);
}
