const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
const N = Number(input[0]);
const M = Number(input[1]);

const visited = Array(N + 1).fill(false);
const result = [];

function dfs(depth) {
  if (depth === M) {
    console.log(result.join(' '));
    return;
  }

  for (let i = 1; i <= N; i++) {
    if (!visited[i]) {
      visited[i] = true;
      result.push(i);
      dfs(depth + 1);
      result.pop();
      visited[i] = false;
    }
  }
}

dfs(0);
