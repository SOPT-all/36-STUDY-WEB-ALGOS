#include <iostream>
#include <vector>
#include <algorithm>
#include <string>

using namespace std;
// 2667번
// https://www.acmicpc.net/problem/2667
// 1. 입력 받은거 저장
// 2. DFS로 탐색
// 3. 단지 수와 각 단지의 집 수 출력
/*
issue: N줄의 숫자 문자열을 연속된 문자열로 입력하는데
 for (int i = 0; i < n; i++) {
    for (int j = 0; j < n; j++) {
        cin >> graph[i][j];
    }
}
이 방식은 cin이 공백 기준으로 입력을 받기 때문에 문자열 한 줄을 정수 N개로 나누는 입력 형식에서 틀림.. 그것도 모르고
*/
int main() {
    int n;
    cin >> n;

    vector<vector<int>> graph(n, vector<int>(n));
    vector<vector<bool>> visited(n, vector<bool>(n, false));
    vector<int> house_count;

    for (int i = 0; i < n; i++) {
        string line;
        cin >> line;
        for (int j = 0; j < n; j++) {
            graph[i][j] = line[j] - '0';
        }
    }

    function<void(int, int)> dfs = [&](int x, int y) {
        if (x < 0 || x >= n || y < 0 || y >= n || visited[y][x] || graph[y][x] == 0)
            return;

        visited[y][x] = true;
        house_count.back()++;

        dfs(x - 1, y); 
        dfs(x + 1, y); 
        dfs(x, y - 1); 
        dfs(x, y + 1); 
    };

    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            if (graph[i][j] == 1 && !visited[i][j]) {
                house_count.push_back(0);  
                dfs(j, i);                 
            }
        }
    }

    sort(house_count.begin(), house_count.end());

    cout << house_count.size() << '\n';
    for (int count : house_count) {
        cout << count << '\n';
    }

    return 0;
}
