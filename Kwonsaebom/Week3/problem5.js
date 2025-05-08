// https://www.acmicpc.net/problem/1541

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const splitByMinus = input.split("-");

const firstValue = splitByMinus[0]
  .split("+")
  .map(Number)
  .reduce((acc, cur) => acc + cur, 0);

const restValue = splitByMinus
  .slice(1)
  .map((group) =>
    group
      .split("+")
      .map(Number)
      .reduce((acc, cur) => acc + cur, 0)
  )
  .reduce((acc, cur) => acc + cur, 0);

const totalValue = firstValue - restValue;

console.log(totalValue);
