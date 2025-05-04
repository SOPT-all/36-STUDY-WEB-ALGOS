// https://www.acmicpc.net/problem/11399

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line);

  if (input.length === 2) {
    rl.close();
  }
});

rl.on("close", () => {
  const count = Number(input[0]);
  const times = input[1].split(" ").map(Number);

  times.sort((a, b) => a - b);

  let total = 0;

  for (let i = 0; i < count; i++) {
    let sum = 0;
    for (let j = 0; j < i + 1; j++) {
      sum += times[j];
    }
    total += sum;
  }
  console.log(total);
});
