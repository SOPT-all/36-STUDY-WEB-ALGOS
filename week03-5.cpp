#include <iostream>
#include <string>
using namespace std;
// -뒤에 다 묶기 - 만날때까지
int main() {
    //기본 입력
    string s;
    cin >> s;

    // 알고리즘
    int result = 0, num = 0;
    bool minus = false;

    for (int i = 0; i <= s.size(); ++i) {
        if (i == s.size() || s[i] == '+' || s[i] == '-') {
            if (minus)
                result -= num;
            else
                result += num;
            num = 0;

            if (i < s.size() && s[i] == '-')
                minus = true;
        }
        else {
            num = num * 10 + (s[i] - '0');
        }
    }

    cout << result << '\n';
    return 0;
}
