// https://www.acmicpc.net/problem/1083
// ➡️ 검색

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line.trim());
  if (input.length === 3) rl.close();
});

rl.on("close", () => {
  const n = Number(input[0]);
  const arr = input[1].split(" ").map(Number);
  let s = Number(input[2]);

  for (let i = 0; i < n - 1 && s > 0; i++) {
    let maxIdx = i;
    for (let j = i + 1; j < n && j - i <= s; j++) {
      if (arr[j] > arr[maxIdx]) {
        maxIdx = j;
      }
    }

    if (maxIdx !== i) {
      const [maxValue] = arr.splice(maxIdx, 1);
      arr.splice(i, 0, maxValue);
      s -= maxIdx - i;
    }
  }

  console.log(arr.join(" "));
});
