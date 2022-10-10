'''

Mean

Given the marks of n students, calculate the mean.

Note: If the result is a decimal Value, print it's floor value.
Input

First line contains an integer, denoting n.

Second line contains n space seperated integers, denoting the marks.
Output

One Integer, denoting the mean of the marks.
Example

Input:

4
56 67 30 82

Output:

58

Explanation:

56+67+30+82 = 235
Mean = 235/4 = 58.75
floor(58.75) is 58
So, the Output is 58.

'''

n = int(input())
arr = input().split(' ')

sum = 0
for ele in arr :
    sum += int(ele)
print(int(sum / n))