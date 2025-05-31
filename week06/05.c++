#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;
//1149
//https://www.acmicpc.net/problem/1149

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
