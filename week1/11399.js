// https://www.acmicpc.net/problem/11399
// 📌 백준 11399: ATM
// 💭 문제 설명:
//   - N명의 사람들이 ATM을 이용하려고 줄을 섬
//   - 각 사람이 돈을 인출하는 데 걸리는 시간이 주어짐
//   - 각 사람이 기다리는 시간의 합이 최소가 되도록 줄을 서는 순서를 결정해야 함
//
// 💡 접근 방법:
//   1. 인출 시간이 짧은 사람부터 줄을 세움 (오름차순 정렬!)
//   2. 각 사람의 대기 시간은 앞사람들의 인출 시간의 합
//   3. 모든 사람의 대기 시간을 합산하여 총 대기 시간을 계산
//
// 📚 주요 개념:
//   - 그리디 알고리즘: 매 단계에서 최적의 선택을 함으로써 전체 최적해 도출
//   - 누적 합: 각 단계에서 이전까지의 합을 이용하여 현재 값을 계산

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);
const times = input[1].split(' ').map(Number);

times.sort((a, b) => a - b);

let total = 0;
let sum = 0;

for (let i = 0; i < N; i++) {
  sum += times[i];
  total += sum;
}

console.log(total);

