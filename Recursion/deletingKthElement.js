//Deleting the kth element from an array
//-------------------------------------------------------
//for any k value starting from 0 to array length program will work,

let array = [3, 2, 4, 0, 6, 5];
let k = (Math.floor(array.length / 2) + 1);  //for middle number

function element_remover(arr) {
    if (arr.length == k) {
        arr.pop();    
        return;
    }

    let temp = arr.pop();
    element_remover(arr);
    arr.push(temp);
    return arr;
}

console.log(element_remover(array));
