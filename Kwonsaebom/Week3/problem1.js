// https://www.acmicpc.net/problem/1931

const fs = require("fs");
const input = fs
  .readFileSync("input.txt", "utf-8")
  .toString()
  .trim()
  .split("\n");

const times = input.slice(1).map((line) => line.split(" ").map(Number));

const allEndTimes = times.map((time) => time[1]);
const firstEndTime = Math.min(...allEndTimes);

let endTime = firstEndTime;
let count = 1; // 가장 빨리 끝나는 회의를 이미 선택

const sortedTimes = times.sort((a, b) => {
  if (a[0] === b[0]) return a[1] - b[1];
  return a[0] - b[0];
});

for (let i = 0; i < sortedTimes.length; i++) {
  const startTime = sortedTimes[i][0];
  if (endTime <= startTime) {
    endTime = sortedTimes[i][1];
    count++;
  }
}

console.log(count);
