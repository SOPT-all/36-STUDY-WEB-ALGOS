#include <iostream>
#include <vector>
using namespace std;
//1427번  
/*
* 정수 입력 받고, 각 자릿수 10으로 나누며 배열에 저장후 정렬
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