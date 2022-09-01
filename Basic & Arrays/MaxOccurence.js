/*

Max occurrences

Given a sorted list of n non negative integers. 
Find the integer which is occurring the maximum number of times. 
If no such number exists, please print -1. 
If there are multiple numbers with the same maximum occurrence count. 
Print all of them in ascending order.

Input
First line n denoting the length of the list Following n lines contains the elements of the list

Output
m lines containing the numbers which are occurring the maximum number of times

Example
Input:
5
1
2
2
2
3

Output:
2

5 denotes the length of the list. 1 is occurring once and so is 3. 
2 is occurring 3 times which is the maximum. So 2 is the output

Input:
5
1
2
2
3
3

Output:
2
3

5 denotes the length of the list. 1 is occuring only once. 
2 is occuring 2 times and 3 is also occuring 2 times 
which is the maximum times a number is occuring in the given list. 
So 2 and 3 both are in the output.
*/

let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

let n = parseInt(readLine());
let arr = [];
for (let i = 0; i < n; i++) {
    arr.push(parseInt(readLine()));
}
//count_arr for storing the frequency of a number
let count_arr = [];
//number_arr for storing that corresponding number 
let number_arr = [];
let count = 1;
for (let i = 1; i <= n; i++) {
    if (arr[i] === arr[i - 1]) {
        count++;
        continue;
    }
    count_arr.push(count);
    number_arr.push(arr[i - 1]);
    count = 1;
}
// console.log(number_arr)
// console.log(count_arr)

//For finding the number occur maximum number of times
let max = count_arr[0];
for (let i = 1; i < count_arr.length; i++) {
    if (count_arr[i] >= max) {
        max = count_arr[i];
    }
}
//Printing the maximum number, if multiple number is same as max then print in 
//acsending order as array is sorted
if (max == 0 || n == 0) {
    console.log(-1);
}
for (let i = 0; i < number_arr.length; i++) {
    if (count_arr[i] === max) {
        console.log(number_arr[i]);
    }
}

//Another method:
/*
let N=parseInt(readLine());
let arr=[];
for(let i=0;i<N;i++){
    arr.push(parseInt(readLine()))
}

if(N===0){
    console.log(-1)
    return;
}
if(N===1){
    console.log(arr[0])
    return;
}
let countArray=[];
for(let i=0;i<N;i++){
    let count=1;
    for(let j=i+1;j<N;j++){
        if(arr[i]===arr[j]){
            count++;
        }
    }
    countArray.push(count);
}
let maxCount=Math.max(...countArray);
for(let i=0;i<N;i++){
    if(countArray[i]===maxCount){
        console.log(arr[i])
}
}
*/