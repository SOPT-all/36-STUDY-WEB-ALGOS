#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;
//1260번
//https://www.acmicpc.net/problem/1260
int main() {
    int n, m, v;
    cin >> n >> m >> v;
    vector<vector<int>> graph(n + 1);
    vector<bool> visited_dfs(n + 1, false);
    vector<bool> visited_bfs(n + 1, false);
    vector<int> dfs_result;
    vector<int> bfs_result;
    for (int i = 0; i < m; i++) {
        int a, b;
        cin >> a >> b;
        graph[a].push_back(b);
        graph[b].push_back(a);
    }
    for (int i = 1; i <= n; i++) {
        sort(graph[i].begin(), graph[i].end());
    }
    // DFS
    function<void(int)> dfs = [&](int node) {
        visited_dfs[node] = true;
        dfs_result.push_back(node);
        for (int next : graph[node]) {
            if (!visited_dfs[next]) {
                dfs(next);
            }
        }
    };
    // BFS
    function<void(int)> bfs = [&](int start) {
        vector<int> queue;
        queue.push_back(start);
        visited_bfs[start] = true;
        while (!queue.empty()) {
            int node = queue.front();
            queue.erase(queue.begin());
            bfs_result.push_back(node);
            for (int next : graph[node]) {
                if (!visited_bfs[next]) {
                    visited_bfs[next] = true;
                    queue.push_back(next);
                }
            }
        }
    };
    dfs(v);
    bfs(v);
    for (int i = 0; i < dfs_result.size(); i++) {
        cout << dfs_result[i] << " ";
    }
    cout << endl;
    for (int i = 0; i < bfs_result.size(); i++) {
        cout << bfs_result[i] << " ";
    }
    cout << endl;
    return 0;

}