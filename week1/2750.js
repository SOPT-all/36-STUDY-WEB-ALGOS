// https://www.acmicpc.net/problem/2750
// 📌 백준 2750: 수 정렬하기
// 💭 문제 설명:
//   - N개의 정수가 주어졌을 때, 오름차순으로 정렬해서 출력하는 문제
//
// 💡 접근 방법:
//   1. 입력값을 배열로 받아 숫자로 변환
//   2. 내장 sort 함수를 이용해 오름차순 정렬
//   3. 정렬된 배열을 하나씩 출력
//
// 📚 주요 개념:
//   - JavaScript의 기본 sort()는 문자열 기준이므로 숫자 비교 함수 필요 (a - b)
//   - 배열 입력 처리, 숫자 변환(map), 정렬, 반복 출력까지 기본기 연습용 문제
//   - 표준 입력 처리: fs.readFileSync('/dev/stdin') → 콘솔 입력을 한 번에 읽음
//   - 입력 정리: toString().trim().split('\n') → 줄 단위로 배열로 변환
//   - map(Number): 문자열 배열을 숫자 배열로 변환
//   - sort((a, b) => a - b): 숫자 오름차순 정렬 (기본 sort는 문자열 기준이라 안 됨)
//   - forEach(): 배열의 요소를 하나씩 출력 (console.log)

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]); 
const numbers = input.slice(1).map(Number); 

numbers.sort((a, b) => a - b);

numbers.forEach(num => console.log(num));
