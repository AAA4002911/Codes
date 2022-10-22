arr = [1, 3, 4, 5, 7, 3, -10, 2];


function merge(C, p, q, r) {
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

function merge_sort(arr, start, end) {
    if (start >= end) return;

    let mid = parseInt((start + end) / 2);
    merge_sort(arr, start, mid);
    merge_sort(arr, mid + 1, end);
    merge(arr, start, mid, end);
}

merge_sort(arr, 0, arr.length - 1);
console.log(arr);