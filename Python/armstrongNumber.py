'''

Armstrong

For a given 3 digit number, find whether it is armstrong number or not. An Armstrong number of three digits is an integer such that the sum of the cubes of its digits is equal to the number itself. Print Yes if it is a armstrong number else print No.
Input

One integer, denoting the 3 digit number.
Output

One string, denoting Yes or No.
Example

Input1:

153

Output1:

Yes

Explanation:

1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153


'''

given_num = int(input())
num = given_num
multiplier = 1
if num < 0 :
    num *= -1
    multiplier = -1
sum = 0    
while num > 0 :
    rem = num % 10
    sum += rem ** 3
    num = int(num / 10)
if sum == given_num * multiplier : print('Yes')
else : print('No')