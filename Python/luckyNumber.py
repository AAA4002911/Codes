'''

Lucky Number

Given a sorted array of n integers, a lucky integer is an integer which has a frequency in the array equal to its value.

Return a lucky integer in the array. If there is no lucky integer return -1.

If you have multiple lucky integers, please return the first lucky integer in the array (lucky number with the least index).
Input

First line contains a positive integer n, denoting the number of elements in the array. It is followed by n lines. Each line contains one integer denoting an element in the array.
Output

One line specifying the lucky integer in the array
Example

Input:

4
2
2
3
4

Output:

2

Explanation

First line is 4, i.e. 4 elements in the array. The array is [2,2,3,4]. We can see that number 2 is repeating 2 times hence it is the lucky number which is our output

'''
'''
n = int(input())
nums = []
luckyInt = 1
result = -1

for i in range(n):
    num = int(input())
    nums.append(num)

for i in range(1, n):
    if (nums[i] == nums[i-1]):
        luckyInt += 1
    else:
        if (nums[i-1] == luckyInt):
            result = (nums[i-1])
            break
        else:
            luckyInt = 1

#if last number is included in lucky number below if statement run
if (luckyInt == nums[n-1]):
    result = luckyInt

print(result)
'''



# Using Function
'''
def findLuckyNumber(nums):
	n = len(nums)
	luckyInt = 1
	result = -1

	for i in range(1, n):
		if (nums[i] == nums[i-1]):
			luckyInt += 1
		else:
			if (nums[i-1] == luckyInt):
				result = (nums[i-1])
				break
			else:
				luckyInt = 1

	# If last number is included in lucky number below if statement run
	if (luckyInt == nums[n-1]):
		result = luckyInt

	return result

# DO NOT change anything below this line
if __name__ == "__main__":
    num_elems = int(input())
    input_arr = []
    for index in range(num_elems):
        input_arr.append(int(input()))
    
    print(findLuckyNumber(input_arr))
'''
#Using Dictionaries

def findLuckyNumber(nums):
    # implement this function
    freq={}
    for i in nums:
        if(freq.get(i)==None):
            freq[i]=1
        else:
            freq[i]+=1

    for i in freq:
      if(i == freq[i]):
        return(freq[i])

    return -1

# DO NOT change anything below this line
if __name__ == "__main__":
    num_elems = int(input())
    input_arr = []
    for index in range(num_elems):
        input_arr.append(int(input()))
    
print(findLuckyNumber(input_arr))