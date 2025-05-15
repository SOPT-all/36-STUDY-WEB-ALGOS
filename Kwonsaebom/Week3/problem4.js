https://www.acmicpc.net/problem/11000

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const classes = input.slice(1).map((line) => line.split(" ").map(Number));

const startTimes = classes.map((c) => c[0]).sort((a, b) => a - b);
const endTimes = classes.map((c) => c[1]).sort((a, b) => a - b);

let roomCount = 0;
let endIdx = 0;

for (let i = 0; i < N; i++) {
  // 시작 시간이 종료 시간보다 빠르면 → 새 강의실 필요
  if (startTimes[i] < endTimes[endIdx]) {
    roomCount++;
  } else {
    // 종료 시간이 지난 강의실은 재사용 가능
    endIdx++;
  }
}

console.log(roomCount);
