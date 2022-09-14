/*
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
*/

let nums = [-1, -2, -3, -4, -5]
let target = -8

let ans = [];
for (let i = 0; i < nums.length; i++) {

    //this code fails for negative values
    //if (nums[i] > target) continue;

    if (nums[i] > target && target > 0) continue;

    let rem = target - nums[i];
    let index = nums.indexOf(rem);
    if (index != -1 && index != i) {
        ans.push(i, index);
        break;
    }
}

console.log(ans)