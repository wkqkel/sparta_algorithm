const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\r\n")
  .map(Number);
// 개행문자 \r 안 보임 __ 키워드 vsc LF, CRLF // 백준에선 무조건 빼야하는듯
const array = [];
let sentence = "";
let j = 1;
let n = 1;
function solution(input) {
  for (let i = 1; i < input.length; i++) {
    while (array[array.length - 1] !== input[i]) {
      array.push(j);
      sentence += "+" + "\n";

      j++;
    }
    array.pop();
    sentence += "-" + "\n";
  }
}
solution(input);
console.log(sentence);
