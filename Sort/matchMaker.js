/*

Match Maker

Little Mojo owns a match making company, which even to her surprise is an extreme hit. She says that her success rate cannot be matched (Yeah, wordplay!) in the entire match-making industry. She follows an extremely simple algorithm to determine if two people are matches for each other. Her algorithm is not at all complex, and makes no sense - not even to her. But she uses it anyway.

Let's say say that on a given day she decides to select n people - that is, n boys and n girls. She gets the list of n boys and n girls in a random order initially. Then, she arranges the list of girls in ascending order on the basis of their height and boys in descending order of their heights. A girl Ai can be matched to a boy on the same index only, that is, Bi and no one else. Likewise, a girl standing on Ak can be only matched to a boy on the same index Bk and no one else.

Now to determine if the pair would make an ideal pair, she checks if the modulo of their heights is 0, i.e., Ai % Bi == 0 or Bi % Ai == 0. Given the number of boys and girls, and their respective heights in non-sorted order, determine the number of ideal pairs Mojo can find.
Input

The first line contains number of test cases. Then, the next line contains an integer, n, saying the number of boys and girls. The next line contains the height of girls, followed by the height of boys.
Output

Print the number of ideal pairs corresponding to every test case.
Example

Input:

2

4

1 6 9 12

4 12 3 9

4

2 2 2 2

2 2 2 2

Output:

2

4

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

function merge(C, p, q, r, reverse) {
    let n1 = q - p + 1;
    let n2 = r - q;
    let A = [], B = [];
    for (let i = 0; i < n1; i++) {
        A[i] = C[p + i];
    }
    for (let j = 0; j < n2; j++) {
        B[j] = C[q + 1 + j];
    }
    let i = 0, j = 0, k = p;
    if (reverse == false) {
        while (i < n1 && j < n2) {
            if (A[i] <= B[j]) {
                C[k] = A[i];
                i++;
            }
            else {
                C[k] = B[j];
                j++;
            }
            k++;
        }
    }
    else {
        while (i < n1 && j < n2) {
            if (A[i] >= B[j]) {
                C[k] = A[i];
                i++;
            }
            else {
                C[k] = B[j];
                j++;
            }
            k++;
        }
    }
    while (i < n1) {
        C[k] = A[i];
        i++;
        k++;
    }
    while (j < n2) {
        C[k] = B[j];
        j++;
        k++;
    }
}

function merge_sort(arr, start, end, reverse) {
    if (start >= end) return;

    let mid = parseInt((start + end) / 2);
    merge_sort(arr, start, mid, reverse);
    merge_sort(arr, mid + 1, end, reverse);
    merge(arr, start, mid, end, reverse);
}

let test_case = parseInt(readLine());
while (test_case--) {
    numOfpeople = parseInt(readLine());
    let girls_height = readLine().split(" ").map(Number);
    let boys_height = readLine().split(" ").map(Number);

    merge_sort(girls_height, 0, numOfpeople - 1, false);
    merge_sort(boys_height, 0, numOfpeople - 1, true);

    let match = 0;
    for (let i = 0; i < numOfpeople; i++) {
        if (((boys_height[i] % girls_height[i]) == 0) || ((girls_height[i] % boys_height[i]) == 0)) {
            match++;
        }
    }
    console.log(match)
}