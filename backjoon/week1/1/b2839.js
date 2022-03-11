// 설탕배달

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

input = input[0];
// input = input.split(" ").map((a) => +a);

console.log(solution(input));
function solution(A) {
  let count = 0;
  while (true) {
    // 5로 나눴을 때 딱 떨어지면 그 몫+count를 리턴, 값이 0이 됐을때도 해당.
    if (A % 5 === 0) {
      return A / 5 + count;
      break;
    }
    // 0보다 작으면 -1리턴
    if (A < 0) {
      return -1;
      break;
    }
    // 기본적으로 -3씩 빼나가고, 카운트를 올려준다.
    A -= 3;
    count++;
  }
}
