// const solution = (str) => {
//   let answer = "";
//   //문자열안에서 숫자인지 아닌지 판별할때 isNaN메써드 활용
//   for (let x of str) {
//     if (!isNaN(x)) {
//       answer += x;
//     }
//   }
// // Number또는 parseInt
//   return Number(answer);
// };

const solution = (str) => {
  let answer = 0;
  //문자열안에서 숫자인지 아닌지 판별할때 isNaN메써드 활용
  for (let x of str) {
    if (!isNaN(x)) {
      // parseInt안쓰고 타입넘버로 뒤에 붙이는방법
      answer = answer * 10 + Number(x);
    }
  }
  return answer;
};

console.log(solution("g0en2T0s8eSoft"));
