'''

Simple interest

Simple interest formula is given by: Simple Interest = (P x T x R)/100 Where, P is the principle amount T is the time and R is the rate. Compute simple interest for given P, T and R.
Input

Three lines containing integer each.
Output

One line containing integer.
Example

Input:

1000

10

5

Output: 500

'''

principle = int(input())
time = int(input())
rate = int(input())

simple_interest = (principle * time * rate) / 100
print(int(simple_interest))