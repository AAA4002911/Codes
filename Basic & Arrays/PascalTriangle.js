/*
Pascal Triangle

Pascal’s triangle is a triangular array of the binomial coefficients. 
Write a function that takes an integer value N as input and prints Nth line of the Pascal’s triangle.

Following is the representation of a pascal triangle of depth 5

1

1 1

1 2 1

1 3 3 1

1 4 6 4 1

1 5 10 10 5 1
Refer to below link for more information

https://en.wikipedia.org/wiki/Pascal%27s_triangle

Input
You will be given N, depth of the traingle

Output
Print pascal triangle cofficients at depth N

Example
Input:
4

Output:
1
3
3
1

At depth 4 the elements are 1 3 3 1.
*/

let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

//Using Array
let n = parseInt(readLine());
let result = [];
if (n === 1) {
    result = [1];
}
else if (n === 2) {
    result = [1, 1];
}
else {
    let prev = [1, 1];
    for (let i = 3; i <= n; i++) {
        let cur = [1];
        for (let j = 1; j <= (i - 2); j++) {
            cur[j] = prev[j] + prev[j - 1];
        }
        cur.push(1);
        prev = cur;
    }
    result = prev;
}
for (let i = 0; i < result.length; i++) {
    console.log(result[i]);
}



//Using array mthod 2:
/*
let N = parseInt(readLine());
let arr_prev = [1];
if (N == 1) {
    console.log(arr_prev[0]);
    return;
}
for (let i = 0; i < N; i++) {
    let arr_new = [];
    for (let j = 0; j < i + 1; j++) {
    if (j == 0) arr_new.push(1);
    else if (j == i) arr_new.push(1);
    else arr_new.push(arr_prev[j] + arr_prev[j - 1]);
    }
    arr_prev = arr_new;
}
for (let i = 0; i < arr_prev.length; i++) {
    console.log(arr_prev[i]);
}
*/

//Using nth term Formula of Binomial:
/*
let n1  = parseInt(readLine());
let n = n1 - 1;

let arr = [];
for (let i = 0; i <= n; i++) {
    arr.push((factorial(n)) / (factorial(i) * factorial(n - i)));
}
for (let i = 0; i <= n; i++) {
    console.log(arr[i]);
}
function factorial(x) {
    if (x == 0) return 1;
    let factorial = 1;
    for (let i = 1; i <= x; i++) {
        factorial *= i;
    }
    return factorial;
}
*/