// https://www.acmicpc.net/problem/10816

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const cardNumber = input[1].split(" ").map(Number);
const number = input[3].split(" ").map(Number);

const answer = [];

for (let i = 0; i < number.length; i++) {
  let count = 0;
  for (let j = 0; j < cardNumber.length; j++) {
    if (number[i] === cardNumber[j]) {
      count++;
    }
  }
  answer.push(count);
}

return answer.join(" ");
