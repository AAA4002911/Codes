//swap of array element


let head = [1,2,3,4,5]
//expected output = [2, 1, 4, 3,5]

function swap_pairs(idx) {
    if (idx > head.length) return;

    if (idx < head.length - 1) swap(idx);

    swap_pairs(idx + 2);
    return;
}

function swap(idx) {
    let temp = head[idx]
    head[idx] = head[idx + 1];
    head[idx + 1] = temp;
    return;
}

swap_pairs(0);
console.log(head);