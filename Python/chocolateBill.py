'''

Chocolate bill

Bablu went to a shop to buy some chocolates and ice creams. Help him to calculate the bill.
Input

4 lines containing one integer each

First line denotes the cost of 1 chocolate.

Second line denotes the number of chocolate bought by Bablu.

Third line denotes the cost of 1 ice cream.

Fourth line denotes the number of ice creams bought by Bablu.
Output

One line containing one integer, denoting the total money to be paid by Bablu.
Example

Input:

5
3
15
2

Output:

45

Explanation:

First line contains 5, which means the cost of one chocolate is 5 rupees.
Second line contains 3, which means Bablu bought 3 chocolates.
Third line contains 15, which means the cost of one ice cream is 15 rupees.
Fourth line contains 2, which means Bablu bought 2 ice creams.
So, the total bill is 45 rupees.


'''

perChocolateCost = int(input()) 
noOfChocolate = int(input()) 
perIceCreamCost = int(input()) 
noOfIceCream = int(input()) 

print((noOfChocolate * perChocolateCost) + (noOfIceCream * perIceCreamCost))