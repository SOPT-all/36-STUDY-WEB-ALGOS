#include <iostream>
#include <vector>
using namespace std;
//1427��  
/*
* ���� �Է� �ް�, �� �ڸ��� 10���� ������ �迭�� ������ ����
*/
int main() {

	int n;
	cin >> n;
	vector<int> a(10, 0);
	while (n > 0) {
		a[n % 10]++;
		n /= 10;
	}
	for (int i = 9; i >= 0; i--) {
		for (int j = 0; j < a[i]; j++) {
			cout << i;
		}
	}
	cout << endl;


	return 0;
}