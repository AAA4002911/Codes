'''

Clock

Given two positive integers num1 and num2, the task is to find the sum of the two numbers on a 12 hour clock rather than a number line.
Input

Two space seperated values denoting num1, num2 respectively.
Output

One integer, denoting the required result.
Example

Input1:

5 7

Output1:

12

Input2:

5 10

Output2:

3


'''

time = input().split(" ")
time2 = int(time[1])
time1 = int(time[0])

if((time1 + time2) % 12 == 0):
    print(12)
else:
    print((time1 + time2) % 12)