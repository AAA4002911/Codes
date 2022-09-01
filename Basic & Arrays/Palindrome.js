let x = -131;
let given_num = x;
if (x < 0) {
    x *= -1;
}
let palindrome_x = 0;
while (x != 0) {
    let rem = x % 10;
    palindrome_x = 10 * palindrome_x + rem;
    x = Math.floor(x / 10);   
}
console.log(given_num +" = "+ palindrome_x)
if (given_num === palindrome_x) {
    console.log(true);
} else {
    console.log(false)
}
 