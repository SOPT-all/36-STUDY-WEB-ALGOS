const fs = require('fs');
const N = +fs.readFileSync('/dev/stdin').toString().trim();

let count = 0;
const col = Array(N).fill(false);
const diag1 = Array(2 * N).fill(false);
const diag2 = Array(2 * N).fill(false);

function dfs(row) {
  if (row === N) {
    count++;
    return;
  }

  for (let i = 0; i < N; i++) {
    if (col[i] || diag1[row + i] || diag2[row - i + N]) continue;

    col[i] = diag1[row + i] = diag2[row - i + N] = true;
    dfs(row + 1);
    col[i] = diag1[row + i] = diag2[row - i + N] = false;
  }
}

dfs(0);
console.log(count);
