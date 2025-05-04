#include <iostream>
#include <vector>

using namespace std;
// 2751번 수 정렬하기 2:시간초과..4번..실패..
int partition(vector<int>& arr, int low, int high) {
	int pivot = arr[high];
	int i = low - 1;
	for (int j = low; j < high; j++) {
		if (arr[j] <= pivot) {
			i++;
			swap(arr[i], arr[j]);
		}
	}
	swap(arr[i + 1], arr[high]);
	return i + 1;
}

void quickSort(vector<int>& arr, int low, int high) {
	if (low < high) {
		int pi = partition(arr, low, high);
		quickSort(arr, low, pi - 1);
		quickSort(arr, pi + 1, high);
	}
}

int main() {
	ios::sync_with_stdio(false);  // 입출력 속도 최적화래..
	cin.tie(NULL);             

	int n;
	cin >> n;
	vector<int> a(n);
	for (int i = 0; i < n; i++) {
		cin >> a[i];
	}

	quickSort(a, 0, n - 1);

	for (int i = 0; i < n; i++) {
		cout << a[i] << '\n';  
	}

	return 0;
}
