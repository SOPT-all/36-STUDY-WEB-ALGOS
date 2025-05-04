#include <iostream>
#include <vector>
using namespace std;
//11399번
/*
삽입 정렬
-> 오름차순 정렬
*/
int main() {
	int n;
	cin >> n;
	vector<int> a(n);
	for (int i = 0; i < n; i++) {
		cin >> a[i];
	}
	//정렬
	for (int i = 1; i < n; i++) {
		int key = a[i];
		int j = i - 1;
		while (j >= 0 && a[j] > key) {
			a[j + 1] = a[j];
			j--;
		}

		a[j + 1] = key;
	}
	int total = 0;
	int sum = 0;
	for (int i = 0; i < n; i++) {
		sum += a[i]; 
		total += sum;   
	}

	cout << total << endl;


	return 0;
}