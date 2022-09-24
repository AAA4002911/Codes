/*

Validate SUDOKU

Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

    Each row must contain the digits 1-9 without repetition.
    Each column must contain the digits 1-9 without repetition.
    Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.

Note:

    A Sudoku board (partially filled) could be valid but is not necessarily solvable.
    Only the filled cells need to be validated according to the mentioned rules.

Constraints:

    board.length == 9
    board[i].length == 9
    board[i][j] is a digit or '.'

Input

9 lines containing 9 space seperated characters, so as to make a 9x9 matrix.
Output

Single line printing True or False
Example

Input:

8 3 . . 7 . . . .
6 . . 1 9 5 . . .
. 9 8 . . . . 6 .
8 . . . 6 . . . 3
4 . . 8 . 3 . . 1
7 . . . 2 . . . 6
. 6 . . . . 2 8 .
. . . 4 1 9 . . 5
. . . . 8 . . 7 9

Output:

False

Explanation:

Since there are two 8's in the top left 3x3 sub-box, it is invalid.
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


//function to validate sub box using set
function subBox(row, col, sudoku) {
    let set = new Set();
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (set.has(sudoku[row + i][col + j])) {
                // console.log('Invalid box element (row x column)', i, 'x', j);
                return false;
            }
            else if (sudoku[row + i][col + j] != '.') set.add(sudoku[row + i][col + j]); 
        }
    }
    return true;
}

//function to validate column using set
function columnValidator(col, sudoku) {
    let set = new Set();
    for (let i = 0; i < 9; i++) {
        if (set.has(sudoku[i][col])) {
            // console.log('Inavli column no', col + 1);
            return false;
        }
        else if (sudoku[i][col] != '.') set.add(sudoku[i][col]); 
    }
    return true;
}


//function to validate row using set
function rowValidator(row, sudoku) {
    let set = new Set();
    for (let i = 0; i < 9; i++) {
        if (set.has(sudoku[row][i])) {
            // console.log('Invalid row no', row + 1);
            return false;
        }
        else if (sudoku[row][i] != '.') set.add(sudoku[row][i]); 
    }
    return true;
}

//function which checks first row, first column and first box wise and returns as soon as get anything false
function validator(row, col, sudoku) {
    return rowValidator(row, sudoku) && columnValidator(col, sudoku) && subBox(row - row % 3, col - col % 3, sudoku);
}

//driver function
function SudokuValidator(sudoku) {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (!validator(i, j, sudoku)) return 'False';
        }
    }
    return 'True';
}

let sudoku_9x9 = [];
for (let i = 0; i < 9; i++) {
    let input = readLine().split(" ");
    sudoku_9x9.push(input);
}
console.log(SudokuValidator(sudoku_9x9));