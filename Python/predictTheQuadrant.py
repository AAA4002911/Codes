test_cases = int(input())
for i in range(test_cases) :
    inputStr = input().split(" ")
    x = int(inputStr[0])
    y = int(inputStr[1])
    if x > 0 and y > 0 : print("Q1")
    elif x < 0 and y > 0 : print("Q2")
    elif x < 0 and y < 0 : print("Q3")
    else : print("Q4")