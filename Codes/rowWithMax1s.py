'''
Given a boolean 2D array of n x m dimensions where each row is sorted. Find the 0-based index of the first row that has the maximum number of 1's.

Example 1:

Input: 
N = 4 , M = 4
Arr[][] = {{0, 1, 1, 1},
           {0, 0, 1, 1},
           {1, 1, 1, 1},
           {0, 0, 0, 0}}
Output: 2
Explanation: Row 2 contains 4 1's (0-based
indexing).


Example 2:

Input: 
N = 2, M = 2
Arr[][] = {{0, 0}, {1, 1}}
Output: 1
Explanation: Row 1 contains 2 1's (0-based
indexing).


Your Task:  
You don't need to read input or print anything. Your task is to complete the function rowWithMax1s() which takes the array of booleans arr[][], n and m as input parameters and returns the 0-based index of the first row that has the most number of 1s. If no such row exists, return -1.
 

Expected Time Complexity: O(N+M)
Expected Auxiliary Space: O(1)

'''
# Optimise Solution
def optimiseSoln(arr, n, m):
    i = 0; j = m - 1; result = - 1
    while i < n and j >= 0:
        if arr[i][j] == 1:
            result = i
            j -= 1
        if arr[i][j] == 0:
            i += 1
    return result

# Method with O(n) space complexity
class Solution:
    def rowWithMax1s(self,arr, n, m):
        lst = []
        for i in range(n):
            lst.append(sum(arr[i]))
        max_value = max(lst)
        if max_value == 0: return -1
        for idx in range(len(lst)):
            if max_value == lst[idx]: return idx

matrix = [[0 , 0], [0, 0]]
n = 2
m = 2
print(Solution.rowWithMax1s(0, matrix, n, m))
print(optimiseSoln(matrix, n, m))
