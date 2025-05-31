# DFS와 BFS로 탐색한 결과를 출력하는 프로그램을 작성
# 정점 번호가 작은 거 먼저, 갈 곳 없으면 종료
# 1 ~ N
# DFS : 깊이 우선 탐색
# 한 정점에서 끝까지 들어갔다가 없으면 되돌아옴
# 재귀, 스택

# BFS : 너비 우선 탐색
# 한 정점에서 가까운 정점부터
# 큐

# DFS와 BFS
n,m,v = map(int,input().split())

#행렬 만들기
graph = [[0]*(n+1) for _ in range(n+1)]
for i in range (m):
    a,b = map(int,input().split())
    graph[a][b] = graph[b][a] = 1

#방문 리스트 행렬
visited_dfs = [0] * (n + 1)
visited_bfs = [0] * (n + 1)

#dfs 함수 만들기
def dfs(V):
    visited_dfs[V] = 1 #방문처리
    print(V, end=' ')
    for i in range(1, n+1):
        if graph[V][i] == 1 and visited_dfs[i] == 0:
            dfs(i)

#bfs 함수 만들기
def bfs(V):
    queue = [V]
    visited_bfs[V] = 1 #방문처리
    while queue:
        V = queue.pop(0) #방문 노드 제거
        print(V, end = ' ')
        for i in range(1, n+1):
            if(visited_bfs[i] == 0 and graph[V][i] == 1):
                queue.append(i)
                visited_bfs[i] = 1 # 방문처리

dfs(v)
print()
bfs(v)