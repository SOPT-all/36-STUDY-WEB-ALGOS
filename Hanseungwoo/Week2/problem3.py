# https://www.acmicpc.net/problem/11279

import heapq

n = int(input()) 

h = []

for _ in range(n):
    x = int(input())  

    if x == 0:
        if len(h) == 0:
            print(0)
        else:
            num = heapq.heappop(h)
            print(-num)
    else:
        heapq.heappush(h, -x)