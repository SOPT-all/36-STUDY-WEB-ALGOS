# 최대 힙
# 큰 수가 우선 제거 

# 빠른 입력 sys 모듈
import sys

# 최소 힙을 사용 heapq 모듈
import heapq

# input을 sys.stdin.readline으로!
input = sys.stdin.readline

# 연산의 개수 n 입력받기
n = int(input())

# 힙으로 사용할 빈 리스트 생성
q = []

# n번 동안 입력을 반복
for _ in range(n):
    # 정수 x 입력받기
    x = int(input())

    # 입력이 0이라면
    if x == 0:
        # 힙이 비어있으면 0 출력
        if len(q) == 0:
            print(0)
        # 힙에서 가장 큰 값 출력하고 제거
        else:
            print(-heapq.heappop(q))
    # 입력이 0이 아니라면 (자연수라면)
    else:
        # 힙에 -x 추가
        heapq.heappush(q, -x)
