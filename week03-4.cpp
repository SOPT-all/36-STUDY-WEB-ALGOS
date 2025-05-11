#include <iostream>
#include <vector>
#include <algorithm>
#include <queue>

using namespace std;
// �� ���.. ������ �� ���� ȸ�� ���� �����ϸ� �� , �ƴϸ� �� ���ǽ�,ũ�Ⱑ �� ���ǽ� ����
int main() {
    //�⺻ �Է�
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int N;
    cin >> N;

    vector<pair<int, int>> lectures(N);
    for (int i = 0; i < N; ++i) {
        cin >> lectures[i].first >> lectures[i].second;
    }

    // �˰���

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
