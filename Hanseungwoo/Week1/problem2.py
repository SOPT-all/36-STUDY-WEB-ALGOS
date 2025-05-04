# https://www.acmicpc.net/problem/1427

n = input()      
nums = []         

for num in n:
    nums.append(int(num))

for i in range(len(nums)):
    max_idx = i
    for j in range(i + 1, len(nums)):
        if nums[j] > nums[max_idx]:    
            max_idx = j
    nums[i], nums[max_idx] = nums[max_idx], nums[i]  

for fin in nums:
    print(fin, end='')