arr = [1, 3, 4, 5, 7, 3, -10, 2];

function bubble_sort(arr, n) {
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

bubble_sort(arr, arr.length);
console.log(arr);