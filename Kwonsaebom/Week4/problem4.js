// https://www.acmicpc.net/problem/2231

const fs = require("fs");
const N = Number(fs.readFileSync(0).toString().trim());

let result = 0;

for (let i = 1; i < N; i++) {
  const eachNum = String(i).split("").map(Number);
  let totalNum = 0;
  for (let n of eachNum) {
    totalNum += n;
  }
  sum = i + totalNum;
  if (sum === N) {
    result = i;
    break;
  }
}

console.log(result);
