#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;
//2839
//마지막 인덱스부터 내려오며 동전의 개수를 세는 방식
int main() {
    int n, k;
    cin >> n >> k;
    vector<int> coins(n);
    for (int i = 0; i < n; i++) {
		cin >> coins[i];
	}
    int count = 0;
    for (int i = n - 1; i >= 0; i--) {
		if (k == 0) break;
		count += k / coins[i];
		k %= coins[i];
	}
    cout << count << '\n';
    return 0;
}
