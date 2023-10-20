def removeDuplicates(nums):
    left = 1
    for n in range(1, len(nums)):
        if nums[n] > nums[n-1]:
            nums[left] = nums[n]
            left += 1

    return left


nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
print(removeDuplicates(nums))

# Naive solution: Shift item to end, shift rest of items down.
# Sounds quite bad

# Possibility 2: keep track of next spot to add, next spot to check
# [0,1,1,2, 2, 2, 3]
#     ^ x           (1)
# [0,1,2,2,2,3]
#       ^ x         (2)


# Begin loop
# If no duplicate, update both
# If duplicate, update only next.
# Continue until no duplicate, then
# replace add spot with check spot, increment both
