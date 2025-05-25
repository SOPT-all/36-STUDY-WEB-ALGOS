// https://www.acmicpc.net/problem/10816

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const cardNumber = input[1].split(" ").map(Number);
const number = input[3].split(" ").map(Number);

const cardMap = new Map();

for (let num of cardNumber) {
  cardMap.set(num, cardMap.get(num) || 0 + 1);
}

const answer = number.map((n) => cardMap.get(n) || 0);

console.log(answer);
