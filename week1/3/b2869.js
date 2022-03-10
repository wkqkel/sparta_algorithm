// 달팽이는 올라가고싶다 _나도 ㅋ

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split(" ");

console.log(solution(input));

function solution(input) {
  const A = +input[0];
  const B = +input[1];
  let V = +input[2];
  //1번풀이 시간초과
  // let answer = 1;
  // while (V > 0) {
  //   V = V - A;
  //   if (V > 0) {
  //     V = V + B;
  //     answer++;
  //   }
  // }
  // return answer;
  //2번풀이
  // 밤에 미끄러지기 전의 결과가 벽길이보다 높아도 통과
  // days * (up-down)+down > height
  //  days= (height - down)/(up-down)
  // 이때 나누기가 딱 안떨어지므로 3.4이렇게 나올텐데 날짜를 세는 것이므로 올림해야함
  // Math.ceil((height-down)/(up-down))
  return Math.ceil((V - B) / (A - B));
}
