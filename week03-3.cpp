#include <iostream>
using namespace std;

int main() {
    //기본 입력
    int N;
    cin >> N;
    // 알고리즘

    int count = 0;

    while (N >= 0) {
        if (N % 5 == 0) {
            count += N / 5;
            cout << count << '\n';
            return 0;
        }
        N -= 3;
        count++;
    }

    cout << -1 << '\n';
    return 0;
}
