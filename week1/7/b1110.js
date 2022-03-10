// Fly me to the Alpha Centauri

const fs = require("fs");
const { off } = require("process");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString();
solution(input);

function solution(N) {
  if (N < 10) "0" + N;
  let newN = N[0] + N[1];
  let;
}
