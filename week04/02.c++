#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;


int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    //입력
    int n, m;
    cin >> n;
    vector<int> cards(n);
    for (int i = 0; i < n; ++i) {
        cin >> cards[i];
    }
    cin >> m;
    vector<int> queries(m);
    for (int i = 0; i < m; ++i) {
        cin >> queries[i];
    }
    //알고리즘
    sort(cards.begin(), cards.end());

    for (int i = 0; i < m; ++i) {
        int x = queries[i];
        int lower = lower_bound(cards.begin(), cards.end(), x) - cards.begin();
        int upper = upper_bound(cards.begin(), cards.end(), x) - cards.begin();
        cout << (upper - lower) << " ";
    }

    cout << '\n';

    //출력
    cout << '\n';
 
    return 0;
}