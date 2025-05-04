// https://www.acmicpc.net/problem/1015
// 📌 백준 1015: 수열 정렬  
// 💭 문제 설명:
//   - 배열 A를 주었을 때, 수열 P를 구해야 한다.
//
// 💡 접근 방법:
//   1. A의 각 원소에 대해 원래 인덱스를 함께 저장
//   2. 값 기준으로 오름차순 정렬
//   3. 정렬된 인덱스를 원래 인덱스 기준으로 배열 P에 저장
//
// 📚 주요 개념:
//   - 정렬하면서 원래 인덱스 추적 → 객체 또는 배열 튜플 사용
//   - 정렬된 순서에서 인덱스를 매핑 → 위치 추적 기반 정렬 문제
//   - 사고 순서: 정렬된 결과에서 → 원래 위치를 역으로 추적

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]); 
const A = input[1].split(' ').map(Number);

const indexedA = A.map((value, index) => ({ value, index }));

indexedA.sort((a, b) => a.value - b.value);

const P = Array(N);

indexedA.forEach((item, sortedIndex) => {
  P[item.index] = sortedIndex;
});

console.log(P.join(' '));
