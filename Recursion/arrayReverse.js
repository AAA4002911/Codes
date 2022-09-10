//Reversing the array

let array = [1, 2, 3, 5, 6, 7, 9, 0];
console.log(reverse(array));


function reverse(arr) {
    if (arr.length == 1) return;
    
    let temp = arr.pop();
    reverse(arr);
    insert(arr, temp);
    return arr;
}

function insert(arr, temp) {
    if (arr.length == 0) {
        arr.push(temp);
        return;
    }

    let last = arr.pop();
    insert(arr, temp);
    arr.push(last);
    return arr;
}
