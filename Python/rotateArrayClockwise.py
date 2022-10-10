'''

Rotate Array Clockwise

Write a function which takes an array arr and a postive integer m and rotates arr clockwise, m times.
Input

    First line contains a sequence of integers separated by spaces, denoting arr
    Second line contains a positive integer, denoting m

Output

Elements of the rotated array, one in each line
Example

Input:

2 1 3 4 5 10

1

Output:

10
2
1
3
4
5
Explanation

Given array is [2, 1, 3, 4, 5, 10]. m is 1, which means that the array needs to be rotated clockwise 1 time. One clockwise rotation means all the elements get shifted towards right by 1 position. The last element will get shifted to the first postion. So, the rotated array will be [10, 2, 1, 3, 4, 5].

'''

arr = input().split(" ")
n = int(input())
n = n % len(arr)
for i in range(n) :
    last_num = arr[len(arr) - 1]
    for j in range(len(arr)) :
        temp = arr[j]
        arr[j] = last_num
        last_num = temp
for ele in arr:
    print(ele)