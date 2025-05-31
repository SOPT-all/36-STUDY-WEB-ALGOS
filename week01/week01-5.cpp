#include <iostream>
#include <vector>
using namespace std;
// 1015¹ø
int main() {
    int n;
    cin >> n;

    vector<int> A(n);
    for (int i = 0; i < n; i++) {
        cin >> A[i];
    }

    vector<pair<int, int>> pairs(n);
    for (int i = 0; i < n; i++) {
        pairs[i] = { A[i], i };
    }

    for (int i = 1; i < n; i++) {
        pair<int, int> key = pairs[i];
        int j = i - 1;
        while (j >= 0 && (pairs[j].first > key.first ||
            (pairs[j].first == key.first && pairs[j].second > key.second))) {
            pairs[j + 1] = pairs[j];
            j--;
        }
        pairs[j + 1] = key;
    }

    vector<int> P(n);
    for (int i = 0; i < n; i++) {
        int original_index = pairs[i].second;
        P[original_index] = i;
    }


    for (int i = 0; i < n; i++) {
        cout << P[i] << ' ';
    }
    cout << '\n';

    return 0;
}
