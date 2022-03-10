// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// let input = fs.readFileSync(filePath).toString().split("\n");

// input = input[0];
// input = input.split(" ").map((a) => +a);
// console.log(input);
// solution(input[0], input[1]);
// function solution(A, B) {
//   if (A > B) {
//     console.log(">");
//   }
//   if (A < B) {
//     console.log("<");
//   }
//   if (A === B) {
//     //거의 무조건 =은 3개쓰면됨
//     console.log("==");
//   }
// }

///입력값 인풋 다바꿔가며 테스트해보고 백준 제출하는 습관 들이셈. 이게   틀릴수없다 생각할 때 제출.

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

input = input[0];
input = input.split(" ").map((a) => +a);
console.log(input);
solution(input[0], input[1]);
function solution(A, B) {}
