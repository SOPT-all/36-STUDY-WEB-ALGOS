const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = +input[0];
const numbers = input[1].split(' ').map(Number);
const operators = input[2].split(' ').map(Number); // [+, -, *, /]

let max = -Infinity;
let min = Infinity;

function dfs(depth, current, plus, minus, mul, div) {
  if (depth === N) {
    max = Math.max(max, current);
    min = Math.min(min, current);
    return;
  }

  if (plus > 0)
    dfs(depth + 1, current + numbers[depth], plus - 1, minus, mul, div);
  if (minus > 0)
    dfs(depth + 1, current - numbers[depth], plus, minus - 1, mul, div);
  if (mul > 0)
    dfs(depth + 1, current * numbers[depth], plus, minus, mul - 1, div);
  if (div > 0) {
    const result =
      current < 0
        ? -Math.floor(Math.abs(current) / numbers[depth])
        : Math.floor(current / numbers[depth]);
    dfs(depth + 1, result, plus, minus, mul, div - 1);
  }
}

dfs(1, numbers[0], ...operators);
console.log(max);
console.log(min);
