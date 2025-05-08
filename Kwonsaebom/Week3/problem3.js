// https://www.acmicpc.net/problem/2839

const fs = require("fs");
const input = Number(fs.readFileSync("/dev/stdin").toString().trim());

let total = Number(input);

const big = 5;
const small = 3;

let count = 0;

while (total >= 0) {
  if (total % 5 === 0) {
    // 0일때도 포함됨
    count += total / 5;
    console.log(count);
    return;
  }
  total -= 3;
  count++;
}
console.log(-1);
