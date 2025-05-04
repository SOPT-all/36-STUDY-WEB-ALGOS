#include <iostream>
#include <vector>
using namespace std;
//1083번 내림차순 버블 정렬=> 다시
/*
교환은 많아봐야 S번
이전 정렬과 지금정렬 비교후 큰거 선택을..s-1번
*/
int main() {
	int n,s;
	cin >> n;
	vector<int> a(n);
	for (int i = 0; i < n; i++) {
		cin >> a[i];
	}
	cin>>s;	
	return 0;
}