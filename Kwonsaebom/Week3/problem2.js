// https://www.acmicpc.net/problem/11047

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [count, sum] = input[0].split(" ").map(Number);
const coins = input.slice(1).map(Number);
const sortedCoins = coins.sort((a, b) => b - a);

let minCount = 0;

for (let i = 0; i < count; i++) {
  while (sortedCoins[i] <= sum) {
    sum = sum - sortedCoins[i];
    minCount++;
  }
}
