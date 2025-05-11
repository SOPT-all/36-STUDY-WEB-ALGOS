#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;
//2839
//������ �ε������� �������� ������ ������ ���� ���
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
