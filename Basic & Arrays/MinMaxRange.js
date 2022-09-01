/*

min max range

Given 3 lists of positive integers. 
From the first list get the minimum value m1 and second list get the maximum value m2. 
From the third list get all the values that lies between m1 and m2 including m1 and m2.

If m1 <= m2 then we should consider all the values x from third 
list which satisifies m1 <= x <= m2

If m1 > m2 then we should consider all the values x from third list 
which satisifies m1 >= x >= m2

You have write 3 functions.

    Takes list as input and returns a minimum value.
    Takes list as input and returns a maximum value.
    Takes a list, m1 and m2 and returns list of intergers which lies between m1 and m2. 
    If no such numbers exist return a list with -1 i.e [-1]

You have to return the list of numbers in the same order they are present.

You will be provided with function template, you have to fill those functions.

Input
[3,5,4,5,7]
[7,6,4,4,23,2]
[6,5,1,3,8,9,2]

Output
[6,5,3,8,9]

Explanation
The minimum value from the first input list given is 3 and 
maximum value from the second input list is 23 . 
We have to return the list of numbers which satisfies the condition 3<=number<=23 
from the third input list. So the resulting output is [6,5,3,8,9]
*/

let fs = require("fs");
const { arrayBuffer } = require("stream/consumers");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}


// ## This function should return single integer. 
//The integer should be maximum value of input list
// ## Please fill the following function
function maximumValue(inputNumbers){
    // write below this here
    let max = 0;
    for (let i = 0; i < inputNumbers.length; i++) {
        if (inputNumbers[i] > max) {
            max = inputNumbers[i];
        }
    }
    return max;
}

// ## This function should return single integer. 
// ## The integer should be minimum value of input list
function minimumValue(inputNumbers){
    // Please write below this
    let min = inputNumbers[0];
    for (let i = 1; i < inputNumbers.length - 1; i++) {
        if (inputNumbers[i] < min) {
            min = inputNumbers[i];
        }
    }
    return min;    
}


// ## This function should return list of integer which lies between m1 and m2. 
// ## if m1 <= m2 return list of numbers between m1 and m2
// ## if m2 <= m1 return list of numbers between m2 and m1
// ## If no such numbers exist in the input list between m1 and m2 return a list with -1 i.e [-1]
function getNumbersInRange(inputNumbers, m1, m2){
    // Please write below this line
    let arr = [];
    if (m1 <= m2) {
        for (let i = 0; i < inputNumbers.length; i++) {
            if (m1 <= inputNumbers[i] && inputNumbers[i] <= m2) {
                arr.push(inputNumbers[i]);
            }
        }
        if (arr.length == 0) return [-1];
        return arr;
    }
    else if (m1 > m2) {
        for (let i = 0; i < inputNumbers.length; i++) {
            if (m1 >= inputNumbers[i] && inputNumbers[i] >= m2) {
                arr.push(inputNumbers[i]);
            }
        }
        if (arr.length == 0) return [-1];
        return arr;
    }

}


//  Please do not change anything below this line.
function ConvertToNumber(list){
  for(let each in list){
    list[each]=Number(list[each]);
  }
  return list;
}

let list1 = readLine().split(" ");
let list2 = readLine().split(" ");
let list3 = readLine().split(" ") ;  
ConvertToNumber(list1);
ConvertToNumber(list2);
ConvertToNumber(list3);
let m1 = minimumValue(list1);
let m2 = maximumValue(list2);
let minMaxRange = getNumbersInRange(list3, m1, m2);
console.log(...minMaxRange);