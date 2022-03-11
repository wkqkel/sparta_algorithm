// ACM호텔

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

// 인풋값을 배열로 나눔

const arrayA = input[1].split(" ").map(Number);
const arrayB = input[2].split(" ").map(Number);

for (let i = 1; i < +input[0] + 1; i++) {
  // console.log(input[i].split(" ").map(Number));
  console.log(+solution(input[i].split(" ").map(Number)));
}
// console.log(solution([99, 99, 9800]));
// 받은 인풋값을 토대로 출력되는 함수 만들기
function solution(array) {
  const answer = [];
  const H = array[0];
  const W = array[1];
  const N = array[2];
  // H값이 한 바퀴돌돌고, J값 돌기 => 이중반복문
  for (let j = 1; j <= W; j++) {
    for (let i = 1; i <= H; i++) {
      // 룸번호를 표시할때 현재 돌고있는 H값 + W값
      // 자바스크립트는 문자열로 취급될때 두개가 이어붙여지므로 문자열로 바꿔줌
      // 또 W값이 10보다 작을 때는 을0 붙여주고
      // 배열에 푸쉬
      answer.push(String(i) + String(j < 10 ? "0" + j : j));
    }
  }
  // 배열에 차곡차곡쌓였을텐데, 첫번째손님은 배열에 0번째일테니 N-1해줌
  return answer[N - 1];
}
