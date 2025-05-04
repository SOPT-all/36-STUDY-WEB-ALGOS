# https://www.acmicpc.net/problem/1083

def limited_bubble_sort(arr, S):
    n = len(arr)
    for i in range(n):
        if S == 0:
            break  

        for j in range(n - 1, i, -1):  
            if S == 0:
                break
            if arr[j - 1] < arr[j]:  
                arr[j - 1], arr[j] = arr[j], arr[j - 1]
                S -= 1  
    return arr

n = int(input())
arr = list(map(int, input().split()))
S = int(input())

result = limited_bubble_sort(arr, S)

for num in result:
    print(num, end=' ')