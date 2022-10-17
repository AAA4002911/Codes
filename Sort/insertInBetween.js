/*

Insert in Between

You have been given a sorted array arr and one integer x. You need to insert x into the given array, such that the array still remains sorted.
Input

Two space seperated values, denoting n and x respectively. One line containing n space seperated values, denoting the elements of the array.
Output

Resultant array.
Example

Input1:

5 3
1 2 3 4 5

Output1:

1 2 3 3 4 5

*/

let [n, x] = readLine().split(" ").map(Number);
let arr = readLine().split(" ").map(Number);
let temp = x;
(x > arr[n - 1])? idx = n: idx = 0;
for (let i = 0; i < n; i++) {
    if (x < arr[i]) {
        idx = i;
        break;
    }
}
for (let i = idx; i < n; i++) {
    let temp2 = arr[i]
    arr[i] = temp;
    temp = temp2
}
arr.push(temp)
console.log(...arr)