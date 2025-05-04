#include <iostream>
#include <vector>
using namespace std;
//2750¹ø 
int main() {
	int n,min;
	cin >> n;

	vector<int> a(n);
	for (int i = 0; i < n; i++) {
		cin >> a[i];
	}

	for (int i = 0; i < n - 1; i++) {
		min = i;
		for (int j = i + 1; j < n; j++) {
			if (a[j] < a[min]) {
				min = j;
			}
		}
		swap(a[i], a[min]);
	}
	for (int i = 0; i < n; i++) {
		cout << a[i] << endl;
	}
	

	return 0;
}