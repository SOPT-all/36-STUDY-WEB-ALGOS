// https://www.acmicpc.net/problem/11729
// 📌 백준 11729: 하노이 탑 이동 순서
// 💭 문제 설명:
//   - 원판 N개를 1번 기둥에서 3번 기둥으로 옮기는 순서를 출력해야 함
//   - 한 번에 한 개만 이동 가능하며, 큰 원판 위에 작은 원판이 올 수 없음

// 💡 접근 방법:
//   1. n개의 원판을 옮기기 위해서는 n-1개를 보조 기둥으로 이동
//   2. 가장 큰 원판을 목적지로 이동
//   3. 다시 n-1개를 목적지로 이동

// 📚 주요 개념:
//   - 분할정복, 재귀 함수(하노이탑 개념 생각이 나지 않아서 블로그 설명 그림 보고 이해했어요!)
//   - 이동 횟수는 2^n - 1번

const fs = require('fs');
const input = Number(fs.readFileSync('/dev/stdin').toString().trim());

let result = [];

function hanoi(n, from, to, via) {
  if (n === 1) {
    result.push(`${from} ${to}`);
    return;
  }ㄴ
  hanoi(n - 1, from, via, to);
  result.push(`${from} ${to}`);
  hanoi(n - 1, via, to, from);
}

console.log(2 ** input - 1);
hanoi(input, 1, 3, 2);
console.log(result.join('\n'));