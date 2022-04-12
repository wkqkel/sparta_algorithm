// 가장짧은 문자거리
// 방법1
// const solution = (s, t) => {
//   let index = -1;
//   let indexArray = [];
//   let answer = [];
//   while (true) {
//     index = s.indexOf(t, index + 1);
//     if (index === -1) {
//       break;
//     }
//     indexArray.push(index);
//   }
//   for (let i = 0; i < s.length; i++) {
//     let min = 100;
//     for (let x of indexArray) {
//       if (min > Math.abs(i - x)) {
//         min = Math.abs(i - x);
//       }
//     }
//     answer.push(min);
//   }
//   return answer;
// };
// 방법2
// for문을 왼쪽에서 1번 오른쪽에서부터 1번 돌림. 그러면서 둘 중 작은 값으로 함\

const solution = (s, t) => {
  let answer = [];
  let p = 1000;
  for (let x of s) {
    if (x === t) {
      p = 0;
      answer.push(p);
    } else {
      p++;
      answer.push(p);
    }
  }
  p = 1000;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === t) p = 0;
    else {
      p++;
      answer[i] = Math.min(answer[i], p);
    }
  }
  return answer;
};

console.log(solution("teachermode", "e"));
