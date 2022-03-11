//소수구하기

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

solution(input[0], input[1]);
function solution(M, N) {
  function isPrime(N) {
    for (let i = 2; i <= Math.sqrt(N); i++) {
      if (N % i === 0) {
        return false;
      }
    }
    return true;
  }

  for (let i = M; i <= N; i++) {
    if (i === 1) {
      continue;
    }
    if (isPrime(i)) {
      console.log(i);
    }
  }
}
