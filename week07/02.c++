#include <iostream>
#include <vector>
#include <cmath>
using namespace std;
// 9663번
// https://www.acmicpc.net/problem/9663

// board 퀸의 위치, countIdx 현재 퀸을 놓을 인덱스, countQ 경우의 수를 세기

//1. 입력
//2. n*n 체스판에 퀸을 n개 놓는 경우의 수
//3. 퀸은 가로, 세로, 대각선에 놓을 수 없다.
//4. 재귀로 퀸을 놓는 경우의 수 구하기
//5. promising 함수로 퀸을 놓을 수 있는지 확인

int countQ = 0;
int n;
vector<int> board;

bool promising(int countIdx) {
    for (int i = 0; i < countIdx; i++) {
        if (board[countIdx] == board[i] || abs(countIdx - i) == abs(board[countIdx] - board[i])) {
            return false;
        }
    }
    return true;
}

void nqueen(int countIdx) {
    if (countIdx == n) {
        countQ++;
        return;
    }

    for (int i = 0; i < n; i++) {
        board[countIdx] = i; 
        if (promising(countIdx)) {
            nqueen(countIdx + 1); 
        }
    }
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

    cin >> n;
    board.resize(n);
    nqueen(0);
    cout << countQ<< endl;
    return 0;
}
