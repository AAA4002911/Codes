'''

Arithmetic Progression

Given first 3 number of a arthimetic progression, predict the next number.

For details about arithmetic progression, you can visit the following link https://en.wikipedia.org/wiki/Arithmetic_progression
Input

3 integers, each should be taken as a input
Output

single integer
Example

Input:

2

5

8

Output:

11

'''

first_number = int(input())
second_number = int(input())
third_number = int(input())

common_diff = second_number - first_number
fourth_number = third_number + common_diff

print(fourth_number)