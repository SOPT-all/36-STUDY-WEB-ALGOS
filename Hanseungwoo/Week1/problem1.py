# https://www.acmicpc.net/problem/2750

n = int(input())

nums = []

for _ in range(n):
    nums.append(int(input()))

nums = sorted(set(nums))  

for num in nums:
    print(num)