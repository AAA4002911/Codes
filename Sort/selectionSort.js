arr = [1, 3, 4, 5, 7, 3, -10, 2];

function selection_sort(arr, n) {
    for (let i = 0; i < n; i++) {
        let min = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
    }
    return arr;
}

selection_sort(arr, arr.length);
console.log(arr)