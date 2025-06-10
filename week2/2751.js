// https://www.acmicpc.net/problem/2751
// 📌 백준 2751: 수 정렬 2
// 💭 문제 설명:
//   - N개의 수를 오름차순으로 정렬하여 출력
//   - N ≤ 1,000,000 이므로 빠른 정렬 필요

// 💡 접근 방법:
//   - JavaScript 기본 sort는 퀵/병합정렬 기반 (O(N log N))
//   - 입력/출력도 최적화 필요 (fs 모듈 사용)

// 📚 주요 개념:
//   - 고속 정렬 알고리즘 필요 (기본 sort 가능)
//   - 입출력 최적화 (fs + join)

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

input.shift();

input.sort((a, b) => a - b);

console.log(input.join('\n'));