'''
40. Combination Sum II
Medium

Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target.

Each number in candidates may only be used once in the combination.

Note: The solution set must not contain duplicate combinations.

 

Example 1:

Input: candidates = [10,1,2,7,6,1,5], target = 8
Output: 
[
[1,1,6],
[1,2,5],
[1,7],
[2,6]
]

Example 2:

Input: candidates = [2,5,2,1,2], target = 5
Output: 
[
[1,2,2],
[5]
]

 

Constraints:

    1 <= candidates.length <= 100
    1 <= candidates[i] <= 50
    1 <= target <= 30


'''
def sum2(arr, target, i, sum, result):
    if target == 0  :
        result.append(sum)
        return

    for j in range(i, len(arr)):
        if j > i and arr[j] == arr[j - 1]: continue
        if arr[j] > target: break
        sum2(arr, target - arr[j], j + 1, sum + [arr[j]], result)
    return result


arr = [10,1,2,7,6,1,5]
target = 8
arr.sort()
print(sum2(arr, target, 0, [], []))