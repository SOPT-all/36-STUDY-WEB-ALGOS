#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;
//1931�� ȸ�ǽ� ����
// ȸ�Ǹ� ������ �ð� �������� ����
bool compare(pair<int, int> a, pair<int, int> b) {
    if (a.second == b.second)
        return a.first < b.first; 
    return a.second < b.second;
}

int main() {
    int N;
    cin >> N;

    vector<pair<int, int>> meetings(N);

    for (int i = 0; i < N; ++i) {
        cin >> meetings[i].first >> meetings[i].second;
    }

    sort(meetings.begin(), meetings.end(), compare);

    int count = 0;
    int endTime = 0;

    for (int i = 0; i < N; ++i) {
        if (meetings[i].first >= endTime) {
            ++count;
            endTime = meetings[i].second;
        }
    }

    cout << count << '\n';

    return 0;
}
