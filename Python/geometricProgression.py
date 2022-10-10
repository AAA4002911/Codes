'''

Geometric Progression

Given first 3 numbers of a geometric progression, predict the next number.

You can refer to the following link for information about geometric preogression

https://en.wikipedia.org/wiki/Geometric_progression
Input

3 integers should be taken as a input
Output

single integer.

Note: Convert the output to integer
Example

Input:

2

4

8

Output:

16

'''

first_num = int(input())
second_num = int(input())
third_num = int(input())

common_ratio = (second_num / first_num)
fourth_num = third_num * common_ratio
print(int(fourth_num))