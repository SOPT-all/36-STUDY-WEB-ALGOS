// https://www.acmicpc.net/problem/2606

let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let n = Number(input[0]);
let m = Number(input[1]);

const graph = Array.from({ length: n + 1 }, () => []);
const visited = Array(n + 1).fill(false);

for (let i = 2; i < 2 + m; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  graph[a].push(b);
  graph[b].push(a);
}

let count = 0;

function dfs(v) {
  visited[v] = true;

  for (const next of graph[v]) {
    if (!visited[next]) {
      count++;
      dfs(next);
    }
  }
}

dfs(1);
console.log(count);
