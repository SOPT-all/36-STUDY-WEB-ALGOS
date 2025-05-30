# 배추 재배 위해 해충으로부터 배추를 보호 !
# 흰지렁이가 해충 방지에 효과적
# 어떤 배추에 흰지렁이 1마리라도 있으면 인접 배추로 이동 가능 
# 배추들이 인접한 부분 찾아서 필요한 지렁이 개수 찾기
import sys
sys.setrecursionlimit(10000)  # DFS 재귀 깊이 제한 해제 (Python 기본 제한은 1000)

def dfs(x, y):
    dx = [0, 0, -1, 1]  # 좌우
    dy = [1, -1, 0, 0]  # 상하
    
    for i in range(4):  # 상하좌우 방향 탐색
        nx = x + dx[i]
        ny = y + dy[i]
        if (0 <= nx < m) and (0 <= ny < n):  # 범위 내에 있고
            if field[ny][nx] == 1:  # 배추가 있다면
                field[ny][nx] = 0  # 방문 처리 (0으로 만들어서 다시 방문 안 하게 함)
                dfs(nx, ny)  # 연결된 배추 계속 탐색

for _ in range(int(sys.stdin.readline())):
    m, n, k = map(int, sys.stdin.readline().split())  # 가로, 세로, 배추 개수
    field = [[0 for _ in range(m)] for _ in range(n)]  # 배추밭 초기화
    count = 0  # 지렁이 수

    for _ in range(k):
        x, y = map(int, sys.stdin.readline().split())
        field[y][x] = 1  # 배추 심기

    for x in range(m):
        for y in range(n):
            if field[y][x] == 1:  # 배추 발견 시
                dfs(x, y)  # 연결된 모든 배추를 0으로 만듦
                count += 1  # 지렁이 하나 필요
    print(count)  # 결과 출력