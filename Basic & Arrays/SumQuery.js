/*
Sum query
You are given an array of N numbers and q queries. Each query contains 2 integers, 
say L and R. The answer to the query is the sum of the elements between the indices L and R 
(both inclusive).

Input
First line contains 2 space separated integers N and q. 
Second line contains N space separated integers. Next q lines contain 2 space separated integers.

Output
q lines containing one integer each, denoting the answer corresponding to each query.

Example
Input:
5 2
20 -5 33 0 87
2 4
0 3

Output:
120
48
*/

let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

let Input = readLine().split(" ");
let N = parseInt(Input[0]);
let q = parseInt(Input[1]);

let array = readLine().split(" ").map(Number);

let queries = [];
for (let i = 0; i < q; i++) {
    let query = readLine().split(" ").map(Number);
    queries.push(query);
}

prefixsum = [0];
for (let i = 0; i < N; i++) {
    prefixsum[i + 1] = prefixsum[i] + array[i];
}

for (let i = 0; i < q; i++) {   
    
    let L = queries[i][0];
    let R = queries[i][1];

    console.log(prefixsum[R + 1] - prefixsum[L]);
}

//TLE Error
/*
let Input = readLine().split(" ");
let N = parseInt(Input[0]);
let q = parseInt(Input[1]);

let array = readLine().split(" ").map(Number);

let queries = [];
for (let i = 0; i < q; i++) {
    let query = readLine().split(" ").map(Number);
    queries.push(query);
}

for (let i = 0; i < q; i++) {
    
    let sum = 0;
    let L = queries[i][0];
    let R = queries[i][1];

    for (let j = L; j <= R; j++) {
        sum += array[j];     
    }
    console.log(sum);
}
*/