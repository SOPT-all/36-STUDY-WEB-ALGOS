# RGB 거리에 집이 N개, 선분 거리 1번 ~ N번
# 집을 빨,초,파로 색칠함
# 1번 집의 색은 2번 집의 색과 같지 않아야 한다.
# N번 집의 색은 N-1번 집의 색과 같지 않아야 한다.
# i(2 ≤ i ≤ N-1)번 집의 색은 i-1번, i+1번 집의 색과 같지 않아야 한다.
# 그니까 앞과 i의 색, i와 뒤의 색이 달라야 하고 앞뒤는 같을 수 있음
# 비용의 최소값 ?
# DP
# DP[i][0] = min(DP[i-1][1], DP[i-1][2]) + cost[i][0]
# DP[i][1] = min(DP[i-1][0], DP[i-1][2]) + cost[i][1]
# DP[i][2] = min(DP[i-1][0], DP[i-1][1]) + cost[i][2]

n = int(input())
cost = [list(map(int, input().split())) for _ in range(n)]

# DP 배열 초기화 (첫 번째 집은 선택 비용 그대로)
dp = [[0] * 3 for _ in range(n)]
dp[0][0] = cost[0][0]
dp[0][1] = cost[0][1]
dp[0][2] = cost[0][2]

# DP 테이블 채우기
for i in range(1, n):
    dp[i][0] = min(dp[i-1][1], dp[i-1][2]) + cost[i][0]  # 빨강
    dp[i][1] = min(dp[i-1][0], dp[i-1][2]) + cost[i][1]  # 초록
    dp[i][2] = min(dp[i-1][0], dp[i-1][1]) + cost[i][2]  # 파랑

# 결과 출력: 마지막 집에서 세 색 중 최소 비용
print(min(dp[n-1]))