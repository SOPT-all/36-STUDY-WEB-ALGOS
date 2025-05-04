// https://www.acmicpc.net/problem/1927

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(Number(line));

  if (input.length - 1 === input[0]) rl.close();
});

rl.on("close", () => {
  const count = input[0];
  const heap = [];
  const result = [];

  for (let i = 1; i <= count; i++) {
    const x = input[i];

    if (x === 0) {
      if (heap.length === 0) {
        result.push(0);
      } else {
        heap.sort((a, b) => b - a);
        result.push(heap.shift());
      }
    } else {
      heap.push(x);
    }
  }

  console.log(result.join("\n"));
});
