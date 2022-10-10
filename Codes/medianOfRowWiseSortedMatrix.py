'''
Given a row wise sorted matrix of size RxC where R and C are always odd, find the median of the matrix.

Example 1:

Input:
R = 3, C = 3
M = [[1, 3, 5], 
     [2, 6, 9], 
     [3, 6, 9]]

Output: 5

Explanation:
Sorting matrix elements gives us 
{1,2,3,3,5,6,6,9,9}. Hence, 5 is median. 

 

Example 2:

Input:
R = 3, C = 1
M = [[1], [2], [3]]
Output: 2


Your Task:  
You don't need to read input or print anything. Your task is to complete the function median() which takes the integers R and C along with the 2D matrix as input parameters and returns the median of the matrix.

Expected Time Complexity: O(32 * R * log(C))
Expected Auxiliary Space: O(1)


Constraints:
1<= R,C <=150
1<= matrix[i][j] <=2000
'''

R = 2
C = 3
M = [[1, 3, 5], 
     [2, 6, 9], 
     [3, 6, 9]]

class Solution:
	def median(self, matrix, r, c):
		main_lst = []
		for i in range(c):
			lst = []
			for j in range(r):
				lst.append(matrix[j][i])
			main_lst += lst
		main_lst.sort()
		# print(main_lst)
		return main_lst[len(main_lst) // 2]
            
print(Solution.median(0, M, R, C))