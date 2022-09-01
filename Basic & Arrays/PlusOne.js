const { stringify } = require("querystring");

digits = [9, 9];
let temp = 0;
for (let i = digits.length - 1; i >= 0; i--) {
    temp = parseInt(digits[i]) + 1;
    if (temp === 10 && parseInt(digits[0]) === 9) {
        digits[i] = 0;
        digits.unshift(1);
        continueicon;
    } else if (temp === 10) {
        digits[i] = 0;
        continue;
    }
    digits[i] = temp;
    break;
}    
console.log(digits)