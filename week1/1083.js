// https://www.acmicpc.net/problem/1083
// 📌 백준 1083: 소트
// 💭 문제 설명:
//   - 크기가 N인 배열 A가 주어짐
//   - 연속된 두 개의 원소만 교환할 수 있음
//   - 최대 S번의 교환으로 만들 수 있는 배열 중 사전순으로 가장 큰 배열을 출력
//
// 💡 접근 방법:
//   1. 현재 위치에서 S번 이내로 이동 가능한 범위 내에서 가장 큰 수를 찾아 현재 위치로 이동
//   2. 선택한 수를 현재 위치까지 한 칸씩 왼쪽으로 이동시키며 교환
//   3. 이동에 사용한 교환 횟수를 S에서 차감
//   4. S가 0이 될 때까지 반복
//
// 📚 주요 개념:
//   - 그리디 알고리즘: 매 단계에서 가장 큰 수를 선택하여 사전순으로 큰 배열을 만듦
//   - 제한된 범위 내에서 최적의 선택을 반복하여 전체 최적해 도출

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);
const A = input[1].split(' ').map(Number);
let S = Number(input[2]);

for (let i = 0; i < N && S > 0; i++) {
  let maxIdx = i;
  for (let j = i + 1; j < N && j - i <= S; j++) {
    if (A[j] > A[maxIdx]) {
      maxIdx = j;
    }
  }

  for (let j = maxIdx; j > i; j--) {
    [A[j], A[j - 1]] = [A[j - 1], A[j]];
  }

  S -= maxIdx - i;
}

console.log(A.join(' '));
