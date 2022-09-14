/*
Special Ops
Coders here is a simple task for you, you have given an array of size N and an integer M. Your task is to calculate the difference between maximum sum and minimum sum of N-M elements of the given array.

Constraints:
1<=t<=10
1<=n<=1000
1<=a[i]<=1000
Input
First line contains an integer T denoting the number of testcases. First line of every testcase contains two integer N and M. Next line contains N space separated integers denoting the elements of array

Output
For every test case print your answer in new line

Example
Input:

1
5 3
1 2 3 4 5
Output:

6
Explanation:
M is 3 and N is 5 so you have to calculate maximum and minimum sum using (5-3 =) 2 elements. Maximum sum using the 2 elements would be (4+5=)9. Minimum sum using the 2 elements would be (1+2=)3. Difference will be 9-3=6.
*/

//for reading the input
let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

//function for sorting the array
function sort(arr) {
    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] < arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

function min_max_diff(arr, N, M) {

    let element_num = N - M;
    //for maximum sum
    let maximum_sum = 0;
    for (let i = 0; i < element_num; i++) {
        maximum_sum += arr[N - 1 - i];
    }
    //for minimum sum
    let minimum_sum = 0;
    for (let i = 0; i < element_num; i++) {
        minimum_sum += arr[i];
    }
    return (maximum_sum - minimum_sum);
}


let testcase = parseInt(readLine());
while (testcase--) {
    let input = readLine().split(' ');
    let N = parseInt(input[0]);
    let M = parseInt(input[1]);
    let array = readLine().split(' ').map(Number);
    let sorted_array = sort(array);
    let result = min_max_diff(sorted_array, N, M);
    console.log(result);
}