'''
name = input()
print("Hello world")
print("Welcome to the system.....", name)
'''
'''
print("input is ", type(name))
#comment 
#lets convert to number 

num = int(name)
print("Number", num, "is", type(num))

string_num = input()
float_num = float(string_num)
int_num = int(float_num)
print(int_num)


x = int(input())
y = int(input())

print(x + y)
print('abc' * 4)

print("Hello", input())


a = int(input())
b = int(input())
print(180 - (a + b))

arr = [1, 2, 3]
sum = 0
for i in range(len(arr)) :
    sum += arr[i]
print(sum)


arr = [ 1, 2, 3, 4, 5, 8, 3]
n = 3
for i in range(len(arr)):
    if (n == arr[i]):
        print(i)


arr = input().split(" ")
evenSum = 0
for i in range(len(arr)):
    if (int(arr[i]) % 2 == 0):
        evenSum += int(arr[i])
print(evenSum)  
'''

'''
arr = [1,1,2,3,4,4]
unique_num = []
for i in range(len(arr)) :
    count = 1
    if arr[i] in unique_num: continue
    for j in range(len(arr)) :
        if (i != j and arr[i] == arr[j]) : count += 1
    unique_num.append(arr[i])
    print(arr[i], count)
'''
'''
arr = [1,1,2,3,4, 4]
for i in range(len(arr)) :
    count = 1
    flag = 0
    #checking backword from current element for duplicate
    for k in range(i - 1, 0 , -1) :
        if arr[k] == arr[i]: 
            flag = 1
            break
    if flag == 1 : continue
    for j in range(len(arr)) :
        if (i != j and arr[i] == arr[j]) : count += 1
    print(arr[i], count)


n = 4
for i in range(1, n + 1) :
    for j in range(1, i + 1) :
        print(j)
    if (i != n) : 
        print("")

n = int(input())
for i in range(1, n + 1) :
    for j in range(1, i + 1) :
        print(j, end = " ")
    print("\n", end="")



n = int(input())
count = 0
for i in range(1, n + 1) :
    for j in range(1, i + 1) :
        count += 1
        print(count, end=" ")
    print("\n", end="")

arr = input().split(" ")
index = int(input())
num = int(input())

new_arr = []
for i in range(0, len(arr)):
    if (i == index) : 
        new_arr.append(num)
    new_arr.append(arr[i])
print(new_arr)

arr = input().split(" ")
index = int(input())
num = int(input())
for i in range(index, len(arr)):
    temp = arr[i]
    arr[i] = num
    num = temp
arr.append(num)
print(arr)


#rotate
arr = input().split(" ")
n = int(input())
for i in range(n) :
    last_num = arr[len(arr) - 1]
    for j in range(len(arr)) :
        temp = arr[j]
        arr[j] = last_num
        last_num = temp
print(arr)

#sum of diagonal
row = int(input())
matrix = []
for n in range(row) :
    line = input().split(" ")
    matrix.append(line)
diagonal_sum = 0
cross_diagonal_sum = 0
for i in range(row) :
    diagonal_sum += int(matrix[i][i])
    cross_diagonal_sum += int(matrix[i][row - i - 1])
print(diagonal_sum)
print(cross_diagonal_sum)


matrix = []
n = int(input())
for i in range(n) :
    line = input().split(" ")
    matrix.append(line)
for i in range(n) :
    for j in range(len(matrix[0])) :
        #code here
        pass
print(matrix)



a = [1, 2, 3, 4]
b = [5, 6, 7, 8]
c = [9, 10, 11, 12]
num = int(input())
def search(arr, num):
    if num in arr: return True
    else: return False
if (search(a, num)) : print("One")
elif (search(b, num)) : print("Two")
elif (search(c, num)) : print("Three")
else: print("Not Found")


string = input()
newStr = ''
for i in range(0, len(string)):
    newStr += string[len(string) - 1 - i]
if newStr == string: print("Palindrome")
else: print("Not Palindrome")

'''

# matrix = [[1, 2, 3, 4],[5, 6, 7, 8],[9, 10, 11,12]]
# r = 3
# c = 4
# list = []
# for i in range(r):
#     row = 0
#     if row == 0:
#         for j in range(c - i):
#             list.append(matrix[row][j])
#     if row > 0:
#         list.append(matrix[row][c - 1])
#     if row == r - 1:
#         for j in range(c - 2, -1, -1):
#             list.append(matrix[row][j])

# print(list)

# Class in Python
'''
class Sum:
    def __init__(self, a, b):
        self.firstNum = a
        self.secondNum = b
    def add(self):
        return self.firstNum + self.secondNum

test = Sum
print(test(30, 40).add())
'''