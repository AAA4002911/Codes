/*
Binomial Coeffcients
Description
Binomial coefficients are the coefficients that occur in the expansion of Binomial Theorem, viz. (1+x)^n. There are multiple uses of binomial coefficients in various fields. Also, there are multiple definitions. One of the most common definitions is as follows (! denotes factorial).

n C r = (n! )/(r!*(n-r)!)
However, this form of definition poses a computational challenge as factorial is a fast growing function. For e.g. 100! = 93326215443944152681699238856266700490715968264381621468592963895217599993229915608941463976156518286253697920827223758251185210916864000000000000000000000000. This is a huge number and will cause overflow in many programming languages.

There is a recursive definition of binomial coefficients which avoids the use of factorial. Here, n C r is rewritten as C(n, r).

C(n, r) = 1, if r = 0 or n = r
        = C(n-1, r-1) + C(n-1, r)
Implement a recursive function that computes the binomical coefficient for given n and r.

IMPORTANT NOTE: Although the recursive definition is simpler, it is heavily inefficient. So, if you try to test it with large numbers, your program may take a large amount of time to terminate, giving an impression of never ending recursion. So, make sure you test with small values for n and r. Values less than 20 should be good enough.

Advanced information: Feel free to skip this information. It is not required to solve this problem. There are different techniques to use the recursive definition more efficiently. Dynamic programming is one such technique.

Input/Output format
You only need to implement the binomialCoefficient function provided in the template. The template takes care of reading the input, passing it on to binomialCoefficient function and printing the result.

Input
2

4 1

9 2

Output
4

36

Explanation
From the above declared function C(4,1)=C(3,0)+C(3,1)
=1+C(2,0)+C(2,1)
=1+1+C(1,0)+C(1,1) =2+1+1 =4
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

let test_case = parseInt(readLine());
while (test_case--) {
    let input = readLine().split(" ");
    let n = parseInt(input[0]);
    let r = parseInt(input[1]);
    console.log(binomialCoefficient(n, r));
}

function binomialCoefficient(n, r) {
    if (r == 0 || n == r) return 1;
    else {
        return (binomialCoefficient(n-1, r-1) + binomialCoefficient(n-1, r));
    }
}