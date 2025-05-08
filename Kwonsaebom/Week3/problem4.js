// https://www.acmicpc.net/problem/11000

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const classes = input
  .slice(1)
  .map((oneClass) => oneClass.split(" ").map(Number));

classes.sort((a, b) => a[0] - b[0]);

const endTimes = [];

for (let i = 0; i < classes.length; i++) {
  const [start, end] = classes[i];

  // 가장 빨리 끝나는 강의실부터 확인
  // 종료 시간이 가장 빠른 방이 현재 수업 시작 시간보다 같거나 이르면 재사용
  if (endTimes.length > 0 && endTimes[0] <= start) {
    endTimes.shift(); // 재사용
  }

  endTimes.push(end);
  endTimes.sort((a, b) => a - b); // 항상 가장 빠르게 끝나는 강의가 먼저
}
