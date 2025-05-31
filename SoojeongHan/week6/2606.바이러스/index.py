# 바이러스 네트워크 통해 전파
# 한 컴퓨터 감염 -> 연결된 모든 컴퓨터 감염
# 1번 컴퓨터 감염 시 몇개 컴퓨터 감염 ?# 바이러스 
from collections import deque

def bfs(start):
    queue = deque([start])
    visited[start] = True

    while queue:
        node = queue.popleft()
        for neighbor in graph[node]:
            if not visited[neighbor]:
                visited[neighbor] = True
                queue.append(neighbor)

# 입력
n = int(input())  # 컴퓨터 개수
m = int(input())  # 연결된 쌍의 수

# 그래프 초기화
graph = [[] for _ in range(n + 1)]
visited = [False] * (n + 1)

# 연결 정보 입력
for _ in range(m):
    a, b = map(int, input().split())
    graph[a].append(b)
    graph[b].append(a)  # 양방향 연결

# BFS 수행
bfs(1)

# 결과 출력 (1번 컴퓨터를 제외한 감염된 컴퓨터 수)
print(visited.count(True) - 1)
