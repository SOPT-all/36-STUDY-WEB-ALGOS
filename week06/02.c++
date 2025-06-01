#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;
//2606
//https://www.acmicpc.net/problem/2606

/*
1. 입력 받은거 저장
2. BFS로 탐색
3. 방문한 컴퓨터 수 출력
*/
int main() {
    int n, m;
    cin >> n >> m;
    vector<vector<int>> graph(n + 1);
    vector<bool> visited(n + 1, false);
    for (int i = 0; i < m; i++) {
        int a, b;
        cin >> a >> b;
        graph[a].push_back(b);
        graph[b].push_back(a);
    }
    for (int i = 1; i <= n; i++) {
        sort(graph[i].begin(), graph[i].end());
    }
    // BFS
    vector<int> queue;
    queue.push_back(1);
    visited[1] = true;
    int count = 0;
    while (!queue.empty()) {
        int node = queue.front();
        queue.erase(queue.begin());
        count++;
        for (int next : graph[node]) {
            if (!visited[next]) {
                visited[next] = true;
                queue.push_back(next);
            }
        }
    }
    cout << count - 1 << endl;

    return 0;
}