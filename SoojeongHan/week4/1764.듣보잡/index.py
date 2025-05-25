import sys

# 입력 속도를 빠르게 하기 위해 sys.stdin 사용
input = sys.stdin.readline

# N: 듣도 못한 사람 수, M: 보도 못한 사람 수
N, M = map(int, input().split())

# 듣도 못한 사람들을 set에 저장
listen = set(input().strip() for _ in range(N))

# 보도 못한 사람들과 듣도 못한 사람들의 교집합 구하기
see = set(input().strip() for _ in range(M))
result = sorted(listen & see)  # 교집합을 사전순으로 정렬

# 출력
print(len(result))
for name in result:
    print(name)