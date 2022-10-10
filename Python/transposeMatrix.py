'''

Transpose Matrix

You are given m lists. Each list contains n elements. Represented as a matrix, this has m rows and n columns. Your task is to transpose the matrix and output the result.

Write a function with name transposeMatrix which takes a matrix as list of lists as input returns a transposed matrix as list of lists.
Matrix transpose

Given a matrix:

 a b c d

 e f g h

the transpose is:

 a e
 b f
 c g
 d h

Input

The first line contains m, denoting the number of lists

This is followed by m lines each containing n integers separated by space
Output

n lines should contain each row of the matrix, with the elements separated by a space
Example

Input:

3

1 2 3 4

5 6 7 8

9 10 11 12

Output:

1 5 9

2 6 10

3 7 11

4 8 12

You just have. to return transformed matrix as a list, printing is taken care of by the judge.

'''
# name you function as transpose_matrix and takes a list
# you should return a list of lists
def transpose_matrix(lst):
    row = len(lst)
    col = len(lst[0])
    matrix = []
    for i in range(col):
        matrix.append([0 for i in range(row)])
    
    for i in range(row):
        for j in range(col):
            matrix[j][i] = lst[i][j]
    return matrix


# do not change anything below this line
if __name__ == "__main__":
    h = int(input())
    lst = []
    for val in range(0, h):
        lst.append([int(i) for i in input().split(' ')])
    out = transpose_matrix(lst)
    for val in out:
        print(" ".join(str(i) for i in val))


#Another Method using append
'''
def transpose_matrix(lst):
    row = len(lst)
    col = len(lst[0])
    matrix = []
    for i in range(col):
        matrix.append([])
    
    for i in range(col):
        for j in range(row):
            matrix[i].append(lst[j][i])
    return matrix
'''