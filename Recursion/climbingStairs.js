//climbing stairs

/*
You are climbing a staircase. It takes n steps to reach the top.
Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
*/


//Using Recursion
//runt-time error in leetcode for n = 44

let n = 3;
let count = 0;

function climbing(step) {
    if (step == n) return count++;  
    if (step > n) return;
    
    climbing(step + 1) || climbing(step + 2);
}

climbing(0);
console.log(count);


//DP
/*
let n = 45;
let arr = [];
arr[1] = 1;
arr[2] = 2;
for (let i = 3; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
}
console.log(arr[n]);
*/