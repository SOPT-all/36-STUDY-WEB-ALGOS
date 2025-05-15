// https://www.acmicpc.net/problem/1764

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [dmNumber, bmNumber] = input[0].split(" ").map(Number);

const dmPerson = input.slice(1, 1 + dmNumber);
const bmPerson = input.slice(1 + dmNumber);

const dmSet = new Set(dmPerson);
const result = [];

for (let person of bmPerson) {
  if (dmSet.has(person)) {
    result.push(person);
  }
}

result.sort();

console.log(result.length);
for (r of result) {
  console.log(r);
}
