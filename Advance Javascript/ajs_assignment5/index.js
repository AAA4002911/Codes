function calculator(x, y, operator) {
    let result;
    switch (operator) {
        case '+':
            result = x + y;
            break;
        case '-':
            result = x - y;
            break;
        case '*':
            result = x * y;
            break;
        case '/':
            result = (x / y);
            if (!Number.isInteger(result)) result = result.toFixed(2);
    }
    return result;
}

function toggle_btn(val) {
    if (val == '+') idvalue = 'plus';
    if (val == '-') idvalue = 'minus';
    if (val == '*') idvalue = 'multiply';
    if (val == '/') idvalue = 'divide';
    document.getElementById(idvalue).classList.toggle("hl");
}

let inputString = '';
let num1 = 0;
let num2 = 0;
let operator = '';

function input(val) {
    if (val == '+' || val == '-' || val == '*' || val == '/') {
        document.querySelector('#input').setAttribute('value', '');
        num1 = parseFloat(inputString);
        operator = val;
        toggle_btn(val);
        inputString = '';
        console.log(num1, operator)
        return
    }
    else if (val == '=') {
        num2 = parseFloat(inputString);
        console.log(num2, val);
        let final_result = calculator(num1, num2, operator);
        console.log(final_result);
        document.querySelector('#input').setAttribute('value', final_result);
        inputString = final_result.toString();
        toggle_btn(operator);
        return
    }
    else if (val == 'AC') {
        console.log("reset")
        document.querySelector('#input').setAttribute('value', '0');
        // toggle_btn(operator);
        inputString = '';
        num1 = 0;
        num2 = 0;
        operator = '';
    }
    else if (val == 'C') {
        console.log("Backspace")
        inputString = inputString.slice(0, -1);
    }
    else inputString += val;
    document.querySelector('#input').setAttribute('value', inputString);
}


document.querySelector("#block0").addEventListener("click", function () { input('0'); })
document.querySelector("#block1").addEventListener("click", function () { input('1'); })
document.querySelector("#block2").addEventListener("click", function () { input('2'); })
document.querySelector("#block3").addEventListener("click", function () { input('3'); })
document.querySelector("#block4").addEventListener("click", function () { input('4'); })
document.querySelector("#block5").addEventListener("click", function () { input('5'); })
document.querySelector("#block6").addEventListener("click", function () { input('6'); })
document.querySelector("#block7").addEventListener("click", function () { input('7'); })
document.querySelector("#block8").addEventListener("click", function () { input('8'); })
document.querySelector("#block9").addEventListener("click", function () { input('9'); })
document.querySelector("#dot").addEventListener("click", function () { input('.'); })
document.querySelector("#plus").addEventListener("click", function () { input('+'); })
document.querySelector("#minus").addEventListener("click", function () { input('-'); })
document.querySelector("#multiply").addEventListener("click", function () { input('*'); })
document.querySelector("#divide").addEventListener("click", function () { input('/') })
document.querySelector("#ans").addEventListener("click", function () { input('='); })
document.querySelector("#backspace").addEventListener("click", function () { input('C'); })
document.querySelector("#clr").addEventListener("click", function () { input('AC'); })