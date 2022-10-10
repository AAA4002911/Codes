'''
Find the Duplicate Number
Medium

Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

There is only one repeated number in nums, return this repeated number.

You must solve the problem without modifying the array nums and uses only constant extra space.

 

Example 1:

Input: nums = [1,3,4,2,2]
Output: 2

Example 2:

Input: nums = [3,1,3,4,2]
Output: 3

 

Constraints:

    1 <= n <= 105
    nums.length == n + 1
    1 <= nums[i] <= n
    All the integers in nums appear only once except for precisely one integer which appears two or more times.

 

Follow up:

    How can we prove that at least one duplicate number must exist in nums?
    Can you solve the problem in linear runtime complexity?

'''

# Using Dictionary for achieveing linear time complexity but space complexity O(n)
def findDuplicate(nums):
    dict = {}
    for i in range(len(nums)):
        if dict.get(nums[i]) == None:
            dict[nums[i]] = 1
        else: return nums[i]

print(findDuplicate([1,3,4,2,2]))


# Floyd Algorithm
'''
def findDuplicate(self, nums: List[int]) -> int:
        
        # start hopping from Node_#0
        slow, fast = 0, 0
		
		# for locating start node of cycle
        check = 0
        
		# Step_#1
		# Cycle detection
        # Let slow jumper and fast jumper meet somewhere in the cycle 
		
        while True:
            
			# slow jumper hops 1 step, while fast jumper hops two steps forward.
            slow = nums[ slow ]
            fast = nums[ nums[fast] ]
            
            if slow == fast:
                break
        
		
		# Step_#2
        # Locate the start node of cycle (i.e., the duplicate number)
        while True:
            
            slow = nums[ slow ]
            check = nums[ check ]
            
            if slow == check:
                break
        
        return check

'''