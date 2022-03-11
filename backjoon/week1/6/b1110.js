// 더하기 사이클

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

// console.log(input[i].split(" ").map(Number));
// console.log(solution(input[0]));
// console.log(solution(input[0]));
console.log(solution(input[0]));
function solution(N) {
  let newN = N;
  let count = 0;
  while (+N !== newN || count === 0) {
    newN = String(newN);
    if (newN < 10) {
      newN = "0" + newN; //문자열
    }
    let N0 = newN[0];
    let N1 = newN[1];
    newN = +N0 + +N1;
    newN = String(newN);
    newN = newN.length === 2 ? N1 + newN[1] : N1 + newN[0];
    newN = +newN;
    count++;
  }
  return count;
}

//풀이1 _ 라매개발자
// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// let input = fs.readFileSync(filePath).toString().split("\n");

// solution(+input[0]); // 맵 넘버따로 안하고 그냥 앞에 +붙여줘서 숫자열로만듬
// function solution(N) {
//   let makeNum = N;
//   let ans = 0;
//   while (makeNum !== N || ans === 0) {
//     let ten;
//     let one;
//     if (makeNum >= 10) {
//       ten = +String(makeNum)[0];
//       one = +String(makeNum)[1];
//     } else {
//       ten = 0;
//       one = +String(makeNum)[0];
//     }
//     makeNum = ten + one;
//     if (makeNum >= 10) {
//       makeNumOne = +String(makeNum)[1];
//     } else {
//       makeNumOne = +String(makeNum)[0];
//     }
//     makeNum = +(String(one) + String(makeNumOne));
//     ans++;
//   }
//   console.log(ans);
// }

// //풀이2 _연서님 풀이
// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// let input = fs.readFileSync(filePath).toString().trim().split("\n");

// let origin = Number(input);
// let count = 0;

// while (true) {
//   let sum = Math.floor(input / 10) + (input % 10);
//   //주어진 수가 10보다 작다면 앞에 0을 붙여 두 자리 수로 만들고 각 자리의 숫자를 더한다 -> 10의 자리에 있는 수 구하기 + 1의 자리에 있는 수 구하기
//   // 특정 숫자의 십의 자리 구하는 방법과 일의자리수 구하는 방법임 _ 기억해뒀다 써먹기
//   input = (input % 10) * 10 + (sum % 10);
//   //주어진 수의 가장 오른쪽 자리 수와 앞에서 구한 합의 가장 오른쪽 자리 수를 이어 붙이면 -> 1의 자리에 있는 수 10의 자리 수로 만들기
//   count++;
//   if (origin === input) {
//     console.log(count);
//     break;
//   }
// }
