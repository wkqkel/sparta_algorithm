// 큐2
// 먼저집어넣은 데이터가 먼저 나오는 선입선출 방식

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");
// 개행문자 \r 안 보임 __ 키워드 vsc LF, CRLF // 백준에선 무조건 빼야하는듯
const answer = [];
let sentence = "";
for (let i = 1; i < +input[0] + 1; i++) {
  solution(input[i]);
}

function solution(input) {
  let command = input.split(" ")[0];
  if (command === "push") {
    answer.push(input.split(" ")[1]);
  } else if (command === "pop") {
    if (answer.length === 0) {
      sentence += -1 + "\n";
    } else {
      sentence += answer.shift() + "\n";
    }
  } else if (command === "size") {
    sentence += answer.length + "\n";
  } else if (command === "empty") {
    if (answer.length === 0) {
      sentence += 1 + "\n";
    } else {
      sentence += 0 + "\n";
    }
  } else if (command === "front") {
    if (answer.length === 0) {
      sentence += -1 + "\n";
    } else {
      sentence += answer[0] + "\n";
    }
  } else if (command === "back") {
    if (answer.length === 0) {
      sentence += -1 + "\n";
    } else {
      sentence += answer[answer.length - 1] + "\n";
    }
  }
}
console.log(sentence);
// push X: 정수 X를 큐에 넣는 연산이다.
// pop: 큐에서 가장 앞에 있는 정수를 빼고, 그 수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
// size: 큐에 들어있는 정수의 개수를 출력한다.
// empty: 큐가 비어있으면 1, 아니면 0을 출력한다.
// front: 큐의 가장 앞에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
// back: 큐의 가장 뒤에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
