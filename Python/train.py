'''

Train

There is an N-car train.

You are given an integer i. Find the value of j such that the following statement is true: "the i-th car from the front of the train is the j-th car from the back."
Constraints

    1 <= i <= N

Input

Two space seperated integers, denoting N,i respectively.
Output

One integer, denoting j.
Example

Input1:

4 2

Output1:

3

Explanation1:

The second car from the front of a 4-car train is the third car from the back.

'''

arr = input().split(" ")
n = int(arr[0])
i = int(arr[1])

j = n - i + 1
print(j)