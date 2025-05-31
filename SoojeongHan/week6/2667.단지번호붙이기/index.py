# 1은 집이 있는 곳, 0은 집이 없는 곳
# 좌우 위아래 O, 대각선 X

import sys
sys.setrecursionlimit(10000)  # 재귀 깊이 증가 (DFS 사용 시 필요)

N = int(input())
graph = [list(map(int, input())) for _ in range(N)]
visited = [[False] * N for _ in range(N)]

# 방향 (상, 하, 좌, 우)
dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

def dfs(x, y):
    visited[x][y] = True
    count = 1  # 현재 집 포함
    for i in range(4):
        nx, ny = x + dx[i], y + dy[i]
        if 0 <= nx < N and 0 <= ny < N:
            if not visited[nx][ny] and graph[nx][ny] == 1:
                count += dfs(nx, ny)
    return count

result = []

for i in range(N):
    for j in range(N):
        if graph[i][j] == 1 and not visited[i][j]:
            result.append(dfs(i, j))

# 출력
print(len(result))
for r in sorted(result):
    print(r)
