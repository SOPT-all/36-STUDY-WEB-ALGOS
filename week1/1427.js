// https://www.acmicpc.net/problem/1427
// 📌 백준 1427: 소트인사이드
// 💭 문제 설명:
//   - 숫자 N이 주어졌을 때, 그 숫자의 각 자릿수를 큰 수부터 작은 수로 정렬해 출력
//
// 💡 접근 방법:
//   1. 입력값을 문자열로 받아 각 자릿수를 split()
//   2. 숫자로 변환 후 내림차순 정렬
//   3. 배열을 문자열로 다시 join()해서 출력
//
// 📚 주요 개념:
//   - 숫자를 문자열로 다루기 → split()으로 각 자릿수 분해
//   - sort((a, b) => b - a): 내림차순 정렬 (큰 수 → 작은 수)
//   - join(''): 배열을 다시 문자열로 합침
//   - 정렬된 배열을 문자열로 합칠 때 join('') 사용
//   - 문자열로 입력받아 각 자리 숫자를 배열로 분해
//   - map(Number): 각 문자 → 숫자로 변환


const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim(); 

const digits = input
  .split('')        
  .map(Number)      
  .sort((a, b) => b - a); 

console.log(digits.join('')); 