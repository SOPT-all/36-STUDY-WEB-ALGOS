# include <iostream>
# include <vector>
# include <algorithm>
# include <limits>

using namespace std;
//14888번
//https://www.acmicpc.net/problem/14888
//모든 경우의 수 (a+b+c+d)!/(a!*b!*c!*d!)

// 1. 입력
// 2. n개의 숫자와 연산자 4개(+, -, *, /)의 개수
// 3. 연산자 우선순위는 없고, 왼쪽부터 순서대로 계산
// 4. 재귀로 모든 경우의 수를 구하고, 최대값과 최소값을 구하기
// 5. 음수 나눗셈은 -(-a/b)로 처리
//issue: numeric_limits 처음에 초기값 0으로 설정 => 음수일 때 문제 발생

int n;
vector<int> numbers;
int op[4]; 
int max_result = numeric_limits<int>::min();
int min_result = numeric_limits<int>::max();
void dfs(int idx, int current) {
    if (idx == n) {
        max_result = max(max_result, current);
        min_result = min(min_result, current);
        return;
    }

    for (int i = 0; i < 4; i++) {
        if (op[i] > 0) {
            op[i]--;

            int next = current;

            switch (i) {
                case 0:
                    next += numbers[idx];
                    break;
                case 1:
                    next -= numbers[idx];
                    break;
                case 2:
                    next *= numbers[idx];
                    break;
                case 3:
                    if (current < 0)
                        next = -(-current / numbers[idx]);
                    else
                        next = current / numbers[idx];
                    break;
            }

            dfs(idx + 1, next);
            op[i]++; 
        }
    }
}


int main() {
    cin >> n;
    numbers.resize(n);
    for (int i = 0; i < n; i++) cin >> numbers[i];
    for (int i = 0; i < 4; i++) cin >> op[i];

    dfs(1, numbers[0]);

    cout << max_result << '\n';
    cout << min_result << '\n';
    return 0;
}
