let fs = require("fs");
let data = fs.readFileSync("D:/10x/10x/Input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let nums = [1, 1, 2, 3, 4, 5, 5, 5, 5, 7, 9, 10, 11, 11, 11, 11];
function removeDuplicates() {
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] == nums[i - 1]) {
            nums.splice(i-1, 1);
            i--;
        }
    }
    return nums;
   
};
console.log(removeDuplicates(nums))
