# include <iostream>
# include <vector>
# include <algorithm>

using namespace std;
//15649번
//https://www.acmicpc.net/problem/15649
// 1. 입력
// 2. 1부터 m꺼자 n개의 경우의 수
// 실패 3. 모든 경우의 수 최대 8C8 => 8!= 좀 많져 일반적인 반복문 비효율적
// 실패 4. 재귀 방식 => 시간 초과
// 5. 메모제이션 사용해서 시간 줄여보자 => 굳이다
// 6.  ios::sync_with_stdio(false); cin.tie(NULL); => 이거 사용.. 입출력 속도 문제..

void dfs(int n, int m, vector<int>& sequence, vector<bool>& visited, string& output) {
    if (sequence.size() == m) {
        for (int num : sequence) {
            output += to_string(num) + " ";
        }
        output += "\n";
        return;
    }
    for (int i = 1; i <= n; i++) {
        if (!visited[i]) {
            visited[i] = true;
            sequence.push_back(i);
            dfs(n, m, sequence, visited, output);
            sequence.pop_back();
            visited[i] = false;
        }
    }
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(NULL);

    int n, m;
    cin >> n >> m;

    vector<int> sequence;
    vector<bool> visited(n + 1, false);
    string output;

    dfs(n, m, sequence, visited, output);

    cout << output;
    return 0;
}