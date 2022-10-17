/*

String Insertion

The task is to complete the stringInsertionSort() function which is used to implement Insertion Sort, for string.

The resultant string should have characters in lexicographically sorted order. You don't need to worry about input/output.
Input

One string
Output

Sorted string
Example

Input1:

adcb

Output1:

abcd

*/

let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}


function insertion_sort(n, str) {
    arr = str.split("");
    for (let i = 1; i < n; i++) {  
        let key = arr[i];  
        let j = i - 1;      
        while (j >= 0 && arr[j].charCodeAt(0) > key.charCodeAt(0)) 
        {  
            arr[j + 1] = arr[j];  
            j = j - 1;  
        }  
        arr[j + 1] = key;  
    }
    return arr.join(""); 
}

str = readLine();
console.log(insertion_sort(str.length, str));