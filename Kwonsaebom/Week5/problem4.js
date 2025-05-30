// https://www.acmicpc.net/problem/2667

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);
const map = input.slice(1).map((line) => line.split("").map(Number));

const visited = [];
for (let i = 0; i < n; i++) {
  const row = [];
  for (let j = 0; j < n; j++) {
    row.push(false);
  }
  visited.push(row);
}
const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];

let groupSizes = [];

function dfs(x, y) {
  let count = 1;
  visited[y][x] = true;

  for (let dir = 0; dir < 4; dir++) {
    const nx = x + dx[dir];
    const ny = y + dy[dir];

    if (
      nx >= 0 &&
      nx < n &&
      ny >= 0 &&
      ny < n &&
      map[ny][nx] === 1 &&
      !visited[ny][nx]
    ) {
      count += dfs(nx, ny);
    }
  }

  return count;
}

// 전체 지도 탐색
for (let y = 0; y < n; y++) {
  for (let x = 0; x < n; x++) {
    if (map[y][x] === 1 && !visited[y][x]) {
      const groupSize = dfs(x, y);
      groupSizes.push(groupSize);
    }
  }
}

console.log(groupSizes.length); // 총 단지 수
groupSizes.sort((a, b) => a - b).forEach((size) => console.log(size));
