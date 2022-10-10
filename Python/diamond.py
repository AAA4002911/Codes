'''

Diamond

Given n, print the pattern like this: (For example, if n=5)

    * 
   ***
  ***** 
 ******* 
********* 
 *******
  *****
   ***
    * 

Input

One Integer, denoting n.
Output

Print the desired pattern.
Example

Input1:

3

Output1:

  *
 ***
*****
 ***
  *

'''

n = int(input())
length = 2 * n
for i in range(1, length):
    if i <= n:
        for j in range(n - i):
            print(" ", end="")
        for j in range(1, 2 * i):
            print("*", end="")
        print("")
    else:
        for j in range(i - n):
            print(" ", end="")
        for j in range(length - 2 * (i - n) - 1):
            print("*", end="")
        print("")


