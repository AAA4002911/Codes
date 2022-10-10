'''
Given a matrix of size r*c. Traverse the matrix in spiral form.

Input:
r = 4, c = 4
matrix[][] = {{1, 2, 3, 4},
           {5, 6, 7, 8},
           {9, 10, 11, 12},
           {13, 14, 15,16}}
Output: 
1 2 3 4 8 12 16 15 14 13 9 5 6 7 11 10

Solution:

1. Print the first row using a loop from colStart to colEnd
2. Print the last column using a loop from rowStart + 1 to rowEnd
3. Print the last row using a loop from colEnd - 1 to colStart. Before doing this, we need to check if the last and the first row are not the same
4. Print the first column using a loop from rowEnd - 1to rowStart + 1. Before doing this, we need to check, if the last and the first column are not the same.

rowStart: move left to right
ColEnd: move top to bottom
rowEnd: move right to left
colStart: move bottom to top

'''
try:
    r = int(input("Rows: "))
    c = int(input("Column: "))
    if r == 0 or c == 0:
        print("Row or coulmn can not have a size of Zero")
        exit()
except ValueError:
    print("Invalid Input")
    exit()

matrix = []
for i in range(r):
    arr = input().split(" ")
    for idx in range(c):
        arr[idx] = int(arr[idx])
    # arr = list(map(int, input().split(" ")))
    matrix.append(arr)

# Clockwise
rowStart = 0
rowEnd = r - 1
colStart = 0
colEnd = c - 1
result = []
while (rowStart <= rowEnd and colStart <= colEnd):
    for i in range(colStart, colEnd + 1):
        result.append(matrix[rowStart][i])
    rowStart += 1
    for i in range(rowStart, rowEnd + 1):
        result.append(matrix[i][colEnd])
    colEnd -= 1
    if rowStart <= rowEnd:
        for i in range(colEnd, colStart-1, -1):
            result.append(matrix[rowEnd][i])
        rowEnd -= 1
    if colStart <= colEnd:
        for i in range(rowEnd, rowStart-1, -1):
            result.append(matrix[i][colStart])
        colStart += 1

print(result)

# anticlockwise
rowStart = 0
rowEnd = r - 1
colStart = 0
colEnd = c - 1
resultA = []
while (rowStart <= rowEnd and colStart <= colEnd):
    for i in range(rowStart, rowEnd + 1):
        resultA.append(matrix[i][colStart])
    colStart += 1
    for i in range(colStart, colEnd + 1):
        resultA.append(matrix[rowEnd][i])
    rowEnd -= 1
    if colStart <= colEnd:
        for i in range(rowEnd, rowStart -1, -1):
            resultA.append(matrix[i][colEnd])
        colEnd -= 1
    if rowStart <= rowEnd:
        for i in range(colEnd, colStart - 1, -1):
            resultA.append(matrix[rowStart][i])
        rowStart += 1
print(resultA)