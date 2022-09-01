let sum = 98;
    while (sum > 9) {
        sum = Math.floor(sum / 10) + (sum % 10);  
    }
console.log(sum);