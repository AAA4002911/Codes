'''

Product & SUM

Given an integer n, return the difference between the product of its digits and the sum of its digits. Assume that n is a non-negative integer.
Input

One line containing an integer, denoting n
Output

One line containing an integer, denoting the difference between product and sum of the digits of n
Example

Input

234

Output

15

Explanation

Product of digits = 2 * 3 * 4 = 24 
Sum of digits = 2 + 3 + 4 = 9 
Result = 24 - 9 = 15

Input

4421

Output

21

Explanation

Product of digits = 4 * 4 * 2 * 1 = 32 
Sum of digits = 4 + 4 + 2 + 1 = 11 
Result = 32 - 11 = 21


'''


num = int(input())
product = 1
sum = 0
if num == 0 : product = 0
while num > 0 :
    last_digit = num % 10
    product *= last_digit
    sum += last_digit
    num = int(num / 10)
print(product - sum)