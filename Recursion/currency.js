/*
Currency
The Russian Empire was, predominantly, a rural society spread over vast spaces. In 1913, 80% of the people were peasants. Soviet historiography proclaimed that the Russian Empire of the 19th century was characterized by systemic crisis, which impoverished the workers and peasants and culminated in the revolutions of the early 20th century. Recent research by Russian scholars discovered some currency coins from the excavation, which was being used during 19th century.

The uniqueness about these currency coins is that, it contains a unique code, which is a string of large length. Each character in the code string is a digit between 0 and 9. The value of the coin is determined by taking the sum of all its character-digits.

You need to find the value of the given coin, provided the unique code string.

Note: Try to solve it using recursion.

Input
The first line and the only line contains the unique code.

Output
A single line denoting the value of the given coin.

Example
Input:

789456123
Output:

45

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

// let n = parseInt(readLine());

// function digit_add(string) {
//     if (string == 0) return 0;
    
//     return (string % 10) + digit_add(Math.floor(string / 10));
// }

// console.log(digit_add(n));

let string = readLine();
let sum = 0;
console.log(digit_add(0, string));

function digit_add(i, str) {
    if (i == str.length) return;

    let temp = parseInt(str[i]);
    if (temp > 0 && temp <= 9) {
        sum += temp;
    }

    digit_add(i + 1, str)
    return sum;
}