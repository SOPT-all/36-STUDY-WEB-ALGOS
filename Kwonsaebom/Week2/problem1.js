// https://www.acmicpc.net/problem/11729
// ➡️ 검색

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

rl.on("line", (line) => {
  input = Number(line);
  rl.close();
});

rl.on("close", () => {
  const moves = [];

  function hanoi(n, from, to, via) {
    if (n === 1) {
      moves.push(`${from} ${to}`);
      return;
    }

    hanoi(n - 1, from, via, to);
    moves.push(`${from} ${to}`);
    hanoi(n - 1, via, to, from);
  }

  hanoi(input, 1, 3, 2);

  console.log(moves.length);
  console.log(moves.join("\n"));
});
