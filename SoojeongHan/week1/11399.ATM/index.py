# ATM에서 돈 뽑기 N명 
# 걸리는 시간이 적은 사람부터 더하면 될 듯 

# 총 몇 명인지
n = int(input())

# 얼마나 걸리는지
arr = list(map(int,input().split()))

# 작은 거부터 정렬 
arr.sort()

result = 0
time = 0

# 더하기
for i in range(n):
    time += arr[i]
    result += time

print(result)
