# 그리디
# 동전 개수 최소화 하기

# 동전 종류 N과 목표 금액 K 입력
N, K = map(int, input().split())

# 동전의 가치를 입력받음
coins = [int(input()) for _ in range(N)]

# K를 만들기 위한 최소 동전 개수
count = 0

# 동전 가치를 내림차순으로 순차적으로 탐색
for coin in reversed(coins):
    if K == 0:
        break
    # 현재 동전으로 만들 수 있는 최대 개수를 계산
    count += K // coin
    # 남은 금액을 갱신
    K %= coin

print(count)