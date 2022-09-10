//Array sort using recursion

let array = [2, 3, 5, 4, 8, 1, 9];
console.log(sort(array));

function sort(arr) {
    if (arr.length == 1) return;

    let temp = arr.pop();
    sort(arr);

    insert(temp, arr);
    return arr;
}

function insert(temp, arr) {
    if (arr.length == 0 || arr[arr.length - 1] <= temp) {
        arr.push(temp);
        return;
    }

    let last_element = arr.pop();
    insert(temp, arr);
    arr.push(last_element);
    return arr;
}