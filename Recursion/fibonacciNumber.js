//Fibonacci Number
//series 1 1 2 3 5 8 ..... n
// Input: n = 2
// Output: 1
// Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.

let input = 10;

var fib = function(n) {
    
    function fibonacci(num) {
        if (num == 0) return 0;
        if (num == 1) return 1;
    
        return fibonacci(num - 1) + fibonacci(num - 2); 
    }
    
        return (fibonacci(input));
    };
console.log(fib());