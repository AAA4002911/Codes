/*
Add Matrices
Write a function which takes two matrices and returns a matrix which is sum of the given matrices.

If the addition is not possible return -1

You can refer to this link below to learn more about addition of matrices.

https://en.wikipedia.org/wiki/Matrix_addition

Input
M denoting the next M lines are the elements of matrix

M lines each line repressening a row of a matrix

N denoting the next N lines are the elements of matrix

N lines each line repressening a row of a matrix

Output
L lines each line corresponding to the row of matrix.

Example
Input:

3

1 2 3

4 5 6

7 8 9

3

10 11 12

13 14 15

16 17 18

Output:

11 13 15

17 19 21

23 25 27

You have to return -1 if no addition is possible for the given input.

Judge handles the printing, your function should return a added matrix as a list of lists.
*/

let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

function matrixAdd(m1, m2) {
    if (m1.length != m2.length || m1[0].length != m2[0].length) return (-1);

    //creating a matrix for storing answer
    let m_sum = [];
    for (let i = 0; i < m1.length; i++) {
        m_sum.push([]);
    }

    for (let i = 0; i < m1.length; i++) {
        for (let j = 0; j < m1[0].length; j++) {
            m_sum[i][j] = (m1[i][j] + m2[i][j]);
        }
    }
    return m_sum;
}

let M = parseInt(readLine());
let M_matrix = [];
for (let i = 0; i < M; i++) {
    let input = readLine().split(" ").map(Number);
    M_matrix.push(input);
}
let N = parseInt(readLine());
let N_matrix = [];
for (let i = 0; i < N; i++) {
    let input = readLine().split(" ").map(Number);
    N_matrix.push(input);
}

let sum_matrix = matrixAdd(M_matrix, N_matrix);

if (sum_matrix == -1) console.log(sum_matrix);
else {
    for (let i = 0; i < sum_matrix.length; i++) {
        console.log(...sum_matrix[i]);
    }
}