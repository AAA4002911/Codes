'''

Special Range

Given a range, as [m, n] both inclusive, print all non-negative integers in the range.
Input

First line contains an integer which is starting value of range, say m

Second line contains an integer which is ending value of range, say n
Output

Print all non-negative integers in that range. One integer per line.

If no such integers exist, print -1.
Example

Input:

-5

4

Output:

0

1

2

3

4

'''

m = int(input())
n = int(input())
flag = 0
for i in range(m, n + 1):
	if i >= 0: 
		print(i)
		flag = 1
if flag == 0: print(-1)