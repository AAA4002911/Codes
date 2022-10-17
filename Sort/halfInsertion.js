/*

Half Insertion

You have been given a string containing numbers, alphabets and special characters. You only need to sort the secoond half of the string using Insertion sort. (If the length of the string is odd, consider the middle character as the part of the second half as well.)
Input

One string
Output

Resultant string, with first half unsorted & second half sorted.
Example

Input1:

adcbe

Output1:

adbce

*/

// let fs = require("fs");
// let data = fs.readFileSync(0, 'utf-8');
// let idx = 0;
// data = data.split('\n');

// function readLine() {
//     idx++;
//     return data[idx - 1].trim();
// }

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

str = readLine();
let index = Math.floor(str.length / 2);

function insertion_sort(n, arr) {
    for (let i = index + 1; i < n; i++) {  
        let key = arr[i];  
        let j = i - 1;
        while (j >= index && arr[j].charCodeAt(0) > key.charCodeAt(0)) 
        {
            arr[j + 1] = arr[j];  
            j = j - 1;  
        }  
        arr[j + 1] = key;  
    }
    return arr.join(""); 
}

let arr = str.split("");
console.log(insertion_sort(arr.length, arr));