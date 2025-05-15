// https://www.acmicpc.net/problem/2309

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const person = input.map(Number);
const sum = person.reduce((a, b) => a + b);

const fake = [];

for (let i = 0; i < person.length; i++) {
  for (let j = i + 1; j < person.length; j++) {
    if (sum - person[i] - person[j] === 100) {
      fake.push(person[i]);
      fake.push(person[j]);
    }
  }
}

const result = person
  .filter((p) => p !== fake[0] && p !== fake[1])
  .sort((a, b) => a - b);

console.log(result.join("\n"));
