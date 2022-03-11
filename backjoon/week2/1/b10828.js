//   스택 후입선출_ 아래쪽부터 쌓이고, 위에서부터빼감 _ 프링글스통 생각!

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");
// 개행문자 \r 안 보임 __ 키워드 vsc LF, CRLF // 백준에선 무조건 빼야하는듯
const answer = [];
let sentence = "";
for (let i = 1; i < +input[0] + 1; i++) {
  solution(input[i]);
}

// function solution(input) {
//   let answer = "";

//   let command = input.split(" ")[0];
//   switch (command) {
//     case "push":
//       answer.push(input.split(" ")[1]);
//       break;
//     case "pop":
//       returnPop = answer.pop();
//       if (!returnPop) {
//         answer += -1 + "\n";
//         break;
//       }
//       answer += +returnPop + "\n";
//       break;
//     case "size":
//       console.log(+answer.length);
//       break;
//     case "empty":
//       if (answer.length === 0) {
//         console.log(1);
//       } else {
//         console.log(0);
//       }
//       break;
//     case "top":
//       if (!answer[answer.length - 1]) {
//         console.log(-1);
//       } else console.log(+answer[answer.length - 1]);
//   }
// }

function solution(input) {
  //   스택 후입선출_ 아래쪽부터 쌓이고, 위에서부터빼감 _ 프링글스통 생각!
  let command = input.split(" ")[0];
  switch (command) {
    case "push":
      answer.push(input.split(" ")[1]);
      break;
    case "pop":
      returnPop = answer.pop();
      if (!returnPop) {
        sentence += -1 + "\n";
        break;
      }
      sentence += returnPop + "\n";
      break;
    case "size":
      sentence += answer.length + "\n";
      break;
    case "empty":
      if (answer.length === 0) {
        sentence += 1 + "\n";
      } else {
        sentence += 0 + "\n";
      }
      break;
    case "top":
      if (!answer[answer.length - 1]) {
        sentence += -1 + "\n";
      } else sentence += answer[answer.length - 1] + "\n";
  }
}
console.log(sentence);
