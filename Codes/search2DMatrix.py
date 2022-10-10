'''
Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix. This matrix has the following properties:

    Integers in each row are sorted from left to right.
    The first integer of each row is greater than the last integer of the previous row.

 

Example 1:

Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
Output: true

Example 2:

Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
Output: false

 

Constraints:

    m == matrix.length
    n == matrix[i].length
    1 <= m, n <= 100
    -104 <= matrix[i][j], target <= 104
'''

# Special testcase
# matrix = [[1], [3]]
# target = 5

# Using Binary Search
matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]]
target = 15
def searchMatrix(matrix, target):
        while len(matrix) != 1:
            mid_row = len(matrix) // 2
            if target < matrix[mid_row][0]:
                matrix = matrix[:mid_row]
                if len(matrix) == 0: return False
            elif target > matrix[mid_row][len(matrix[mid_row]) - 1]:
                matrix = matrix[mid_row + 1:]
                if len(matrix) == 0: return False
            else:
                matrix = matrix[mid_row]
                return True if target in matrix else False

        return True if target in matrix[0] else False

print(searchMatrix(matrix, target))