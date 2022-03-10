//제로

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\r\n")
  .map(Number);

solution(input);

function solution(input) {
  let array = [];

  for (let i = 1; i < +input[0] + 1; i++) {
    if (+input[i] === 0) {
      array.pop();
    } else {
      array.push(+input[i]);
    }
  }
  console.log(
    array.reduce((sum, cur, i) => {
      return sum + cur;
    }, 0)
  );
  // 리듀스 참고(프로그래머스 약수의 합)
  // 초깃값을 넣어주면 i=0부터 시작
  // 안넣어주면 초깃값은 배열의 첫번째 요소가 되고, i=1부터 시작해서 반복문을 도는 방식
  // i를 이용할 때 초깃값을 넣어줘서 이용하는 것이 더 안전하게 원하는 값을 도출할 수 있을듯. 참
}
