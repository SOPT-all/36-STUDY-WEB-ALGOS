# 수업이 겹치지 않게 
# 배치할 수 있는 최소 강의실 수 찾기

# 각 수업은 시작 시간 Si와 끝나는 시간 Ti
# 가장 빨리 끝나는 수업부터 배정

import sys, heapq

n = int(sys.stdin.readline())
lecture = sorted([list(map(int, sys.stdin.readline().split())) for _ in range(n)])
room = []

# 첫 강의 끝나는 시간
heapq.heappush(room,lecture[0][1])

for i in range(1,n):

    # 강의의 시작 시간이 현재 강의 끝나는 시간 보다 짧으면
    if lecture[i][0] < room[0]:
        # 새로운 강의실을 넣기 
        heapq.heappush(room, lecture[i][1])
    else:
        # 기존 강의를 빼기
        heapq.heappop(room)
        # 강의 넣기 
        heapq.heappush(room, lecture[i][1])
        
print(len(room))