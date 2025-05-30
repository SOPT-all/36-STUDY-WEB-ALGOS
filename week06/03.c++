#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;
//1012
//https://www.acmicpc.net/problem/1012
// 1. 입력 받은거 저장
// 2. DFS로 탐색
// 3. 몇개의 배추 묶음이 나오는지
// 4. 출력

int main() {
    int t;
    cin >> t;
    while (t--) {
        int m, n, k;
        cin >> m >> n >> k;
        vector<vector<int>> graph(n, vector<int>(m, 0));
        vector<vector<bool>> visited(n, vector<bool>(m, false));
        //배추밭
        for (int i = 0; i < k; i++) {
            int x, y;
            cin >> x >> y;
            graph[y][x] = 1; 
        }

        int worm_count = 0;

        function<void(int, int)> dfs = [&](int x, int y) {
            if (x < 0 || x >= m || y < 0 || y >= n || visited[y][x] || graph[y][x] == 0) {
                return;
            }
            visited[y][x] = true; 
            dfs(x - 1, y);
            dfs(x + 1, y);
            dfs(x, y - 1);
            dfs(x, y + 1);
        };

        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                if (graph[i][j] == 1 && !visited[i][j]) {
                    dfs(j, i); // 새로운 배추 묶음 발견
                    worm_count++; // 지렁이 수 증가
                }
            }
        }

        cout << worm_count << endl; // 결과 출력
    }
    return 0;
}