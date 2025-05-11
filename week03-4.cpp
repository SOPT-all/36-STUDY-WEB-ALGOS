#include <iostream>
#include <vector>
#include <algorithm>
#include <queue>

using namespace std;
// 힙 사용.. 끝났을 때 다음 회의 시작 가능하면 ㄱ , 아니면 새 강의실,크기가 즉 강의실 개수
int main() {
    //기본 입력
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int N;
    cin >> N;

    vector<pair<int, int>> lectures(N);
    for (int i = 0; i < N; ++i) {
        cin >> lectures[i].first >> lectures[i].second;
    }

    // 알고리즘

    sort(lectures.begin(), lectures.end());


    priority_queue<int, vector<int>, greater<int>> pq;
    pq.push(lectures[0].second);

    for (int i = 1; i < N; ++i) {
        if (pq.top() <= lectures[i].first) {
            pq.pop();
        }
        pq.push(lectures[i].second);
    }

    cout << pq.size() << '\n';
    return 0;
}
