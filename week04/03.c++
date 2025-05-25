#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;
//난쟁이 찾자

/*
키를 입력받을 때 값 다 더해서 100을 빼면 두 난쟁이의 키의 합이 나온다.
그 두 난쟁이를 찾으면 된다.
어떻게?
1. 9명의 난쟁이 키를 입력받는다.
2. 9명의 난쟁이 키를 모두 더한다.
3. 100을 빼서 두 난쟁이의 키의 합을 구한다.
4. 두 난쟁이의 키의 합을 구하기 위해 이중 반복문을 사용한다.
5. 두 난쟁이의 키의 합이 100을 빼서 구한 값과 같으면 그 두 난쟁이를 제외한 나머지 7명의 난쟁이 키를 출력한다.
*/

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    vector<int> dwarfs(9);
    int total_height = 0;
    for (int i = 0; i < 9; ++i) {
        cin >> dwarfs[i];
        total_height += dwarfs[i];
    }
    sort(dwarfs.begin(), dwarfs.end());
    int target_sum = total_height - 100;
    for (int i = 0; i < 8; ++i) {
        for (int j = i + 1; j < 9; ++j) {
            if (dwarfs[i] + dwarfs[j] == target_sum) {
                for (int k = 0; k < 9; ++k) {
                    if (k != i && k != j) {
                        cout << dwarfs[k] << '\n';
                    }
                }
                return 0;
            }
        }
    }
    


    
    return 0;
}