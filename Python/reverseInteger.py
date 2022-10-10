'''

reverse integer

Given an integer, reverse digits of an integer
Input

1 line containing the integer to reverse
Output

1 line containing the reversed integer
Example

Input: 123

Output: 321

Input: 120

Output: 21 because starting 0 can be removed

Input: -123

Output: -321

'''

given_num = int(input())
num = given_num
multiplier = 1
if num < 0 :
    num *= -1
    multiplier = -1
reverse_num = 0
while num > 0 :
    last_digit = num % 10
    reverse_num *= 10
    reverse_num += last_digit
    num = int(num / 10)
print(multiplier * reverse_num)