// 교육과정설계(큐)

// const solution = (a, b) => {
//   let queue = [];
//   let answer = false;
//   for (let x of b) {
//     if (a.includes(x)) {
//       queue.push(x);
//     }
//   }
//   queue = queue.filter((e, i) => i === queue.indexOf(e)).join("");
//   if (queue === a) {
//     answer = true;
//   }
//   return answer;
// };

// 영상풀이
// 필수과목을 큐에 넣고 있으면
// 들은 과목이 필수과목중 존재하면 includes 큐의 제일 앞을 뺌 shift
// 이 때 큐의 첫번째랑 includes 트루인 필수과목 것과 다르면 바로 return NO
// 또 마지막에 큐가 남아았어도 NO
const solution = (need, plan) => {
  let answer = "YES";
  let queue = need.split("");
  for (let x of plan) {
    if (queue.includes(x)) {
      // ## if 조건문에서 shift하면 수행도 됨
      if (x !== queue.shift()) return "NO";
    }
  }
  if (queue.length) return "NO";
  return answer;
};

let a = "CBA";
let b = "CBDAGE";
console.log(solution(a, b));
