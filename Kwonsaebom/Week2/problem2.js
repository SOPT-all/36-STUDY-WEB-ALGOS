// https://www.acmicpc.net/problem/2751

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(Number(line));

  if (input.length - 1 === input[0]) rl.close();
});

rl.on("close", () => {
  const count = input[0];
  const numbers = input.slice(1);

  numbers.sort((a, b) => a - b);

  console.log(numbers.join("\n"));
});
