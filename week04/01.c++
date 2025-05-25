#include <iostream>
#include <vector>
#include <unordered_set>
#include <algorithm>
using namespace std;
// 듣보잡
/*
1. 입력
2. 듣잡 입력
3. 보잡 입력
4. 근데 보잡 입력할때 듣잡에 있는 이름이면
5. 결과 저장
6. 정렬
7. 출력
8. 끝~
*/

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n, m;
    cin >> n >> m;

    unordered_set<string> unheard_set;
    vector<string> result;

    for (int i = 0; i < n; ++i) {
        string name;
        cin >> name;
        unheard_set.insert(name);
    }

    for (int i = 0; i < m; ++i) {
        string name;
        cin >> name;
        if (unheard_set.count(name)) {
            result.push_back(name);
        }
    }

    sort(result.begin(), result.end());

    cout << result.size() << '\n';
    for (int i = 0; i < result.size(); ++i) {
        cout << result[i] << '\n';
    }

    return 0;
}
