// https://www.acmicpc.net/problem/1015

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

let A = [];
let B = [];
let P = [];

rl.on("close", () => {
  let count = Number(input[0]);
  let A = input[1].split(" ").map(Number);

  B = [...A].sort((a, b) => a - b);

  for (let i = 0; i < count; i++) {
    for (let j = 0; j < count; j++) {
      if (A[i] === B[j]) {
        P.push(j);
        break;
      }
    }
  }

  console.log(P.join(" "));
});
