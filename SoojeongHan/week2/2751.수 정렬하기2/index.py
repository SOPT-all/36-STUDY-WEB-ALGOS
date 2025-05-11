# N개의 수, 오름차순 정렬
# N = int(input()) -> 시간 초과남
# readline으로 변경했는데도 오래 걸려서 좋은 방법 찾아봐야 할 듯

import sys

# 수의 개수 N 입력
N = int(sys.stdin.readline())

# 빈 리스트 생성
arr = []

# N개의 수 입력 받기
# numbers 리스트에 추가
for _ in range(N):
    arr.append(int(sys.stdin.readline()))

# numbers 리스트를 오름차순으로 정렬
arr.sort()

# 정렬된 수를 한 줄씩 출력
for num in arr:
    print(num)