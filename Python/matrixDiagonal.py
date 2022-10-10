'''

Matrix Diagonal

Write a function which takes a 2 dimentional array of size nxn where n > 0 and changes its diagonal according to the following conditions

    if an element e < 0 replace it with 0
    If element e >= 0 replace it with 1

Input

The first line contains n, denoting the number of lists.

This is followed by n lines. Each line contains n integers separated by a space
Output

n lines, each line representing a list of numbers separated by a space.
Example

Input:

4

2 0 1 4

0 -1 1 10

0 0 0 0

1 2 3 4

Output:

1 0 1 4

0 0 1 10

0 0 1 0

1 2 3 1

'''
# Using nested loop
'''
input_row = int(input())
matrix = []
for i in range(input_row):
    arr = list(map(int, input().split(" ")))
    matrix.append(arr)

for i in range(input_row):
    if matrix[i][i] < 0:
        matrix[i][i] = 0
    else:
        matrix[i][i] = 1
for i in range(input_row):
    for j in range(input_row):
        print(matrix[i][j], end=" ")
    print("")
'''
# Using Function
def change_diagonal(list):
    for i in range(len(list)):
        if list[i][i] < 0:
            list[i][i] = 0
        else:
            list[i][i] = 1
    return list

if __name__ == "__main__":
    val = int(input())
    lst = []
    for index in range(0, val):
        lst.append([int(i) for i in input().split(' ')])
    out = change_diagonal(lst)
    for lst1 in out:
        print(" ".join(str(i) for i in lst1))