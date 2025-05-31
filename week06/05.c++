#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;
//1149
//https://www.acmicpc.net/problem/1149
// 1. 입력 받은거 저장
// 2. 입력받을 때 집의 색깔별로 비용을 저장
// 3. 최소 비용 계산 어떻게? -> 현재 집의 색깔을 선택했을 때, 이전 집의 색깔은 선택하지 못하는 규칙을 이용
// 4. 최소 비용 출력
int main() {
    int N;
    cin >> N;

    vector<vector<int>> house(N + 1, vector<int>(3, 0));

    for (int i = 1; i <= N; ++i) {
        int r, g, b;
        cin >> r >> g >> b;
        house[i][0] = min(house[i - 1][1], house[i - 1][2]) + r; 
        house[i][1] = min(house[i - 1][0], house[i - 1][2]) + g; 
        house[i][2] = min(house[i - 1][0], house[i - 1][1]) + b; 
    }

    cout << min({house[N][0], house[N][1], house[N][2]}) << endl;

    return 0;
}
