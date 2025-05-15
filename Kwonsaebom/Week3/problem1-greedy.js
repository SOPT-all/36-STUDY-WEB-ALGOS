// https://www.acmicpc.net/problem/1931

const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin", "utf-8")
  .toString()
  .trim()
  .split("\n");

const times = input.slice(1).map((line) => line.split(" ").map(Number));

const sortedTimes = times.sort((a, b) => {
  if (a[1] === b[1]) return a[0] - b[0];
  return a[1] - b[1];
});

let count = 0;
let endTime = 0;

for (let i = 0; i < sortedTimes.length; i++) {
  const [start, end] = sortedTimes[i];
  if (endTime <= start) {
    endTime = end;
    count++;
  }
}

console.log(count);
