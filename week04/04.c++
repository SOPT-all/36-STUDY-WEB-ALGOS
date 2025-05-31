#include <iostream>
using namespace std;
// 분해합 
/*
분해합 구하는 함수 : 자릿수 나누기 본인 합하는거 
그냥 1부터 n-1까지 반복문 돌면서 분해합이 n과 같은 수 찾기
너무 비효율적인데.. 다른 방식 있나
*/

int get_decomposition_sum(int num) {
    int sum = num;
    while (num > 0) {
        sum += num % 10; 
        num /= 10;
    }
    return sum;
}

int main() {
    int n;
    cin >> n;

    for (int i = 1; i < n; ++i) {
        if (get_decomposition_sum(i) == n) {
            cout << i << '\n';  
            return 0;
        }
    }

    cout << 0 << '\n';  
    return 0;
}
