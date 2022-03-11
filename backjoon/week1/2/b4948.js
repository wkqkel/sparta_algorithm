// 베르트랑 공준

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

// input = input[0];
// input = input.split(" ").map((a) => +a);
// input.splice(-1, 1); // 배열마지막요소제거

for (i = 0; i < input.length - 1; i++) {
  console.log(solution(input[i]));
}
// input.map((e) => console.log(solution(e)));
function solution(A) {
  function isPrime(N) {
    for (let i = 2; i <= Math.sqrt(N); i++) {
      if (N % i === 0) {
        return false;
      }
    }
    return true;
  }
  let answer = 0;
  for (let i = A + 1; i <= 2 * A; i++) {
    if (isPrime(i)) {
      answer++;
    }
  }
  return answer;
}
