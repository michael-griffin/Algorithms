#1. Two Sum

#Given an array of integers nums and an integer target,
# return indices of the two numbers such that they add up to target.

#You may assume that each input would have exactly one solution,
# and you may not use the same element twice.

#You can return the answer in any order.

# Example 1:
# Input: nums = [2,7,11,15], target = 9
# Output: [0,1]

# Example 2:
# Input: nums = [3,2,4], target = 6
# Output: [1,2]

# Example 3:
# Input: nums = [3,3], target = 6
# Output: [0,1]



#Basic plan:
#Can probably do this in one loop. on each pass:
#  Check for presence of compliment (if target = 9, after adding 7, check for key=2)
#  If compliment is found, exit loop and return index pair
#  Otherwise add to map and continue

def twoSum(nums, target):
    nums_map = {}
    for i in range(len(nums)):
        num = nums[i]
        match_ind = nums_map.get(target-num)
        #Order should be check map first, THEN add. This will prevent
        #issues like target=6, nums=[3], but still works with [3,3]
        if (match_ind is not None):
            return [match_ind, i]

        nums_map[num] = i

    return None

print(twoSum([0,1,2], 3))
print(twoSum([0,0,0,0,3,3], 6))

