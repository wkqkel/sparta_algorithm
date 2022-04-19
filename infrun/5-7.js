// 아나그램 _ 두 문자열이 알파벳의 나열 순서는 다르지만 그 구성이 일치하면 두 단어는 아나그램이라고 함
// 내 풀이
// const solution = (a, b) => {
//   const sH = new Map();

//   for (let x of a) {
//     if (sH.has(x)) {
//       sH.set(x, sH.get(x) + 1);
//     } else {
//       sH.set(x, 1);
//     }
//   }
//   for (let x of b) {
//     if (sH.has(x)) {
//       sH.set(x, sH.get(x) - 1);
//       if (sH.get(x) === 0) sH.delete(x);
//     } else {
//       return "NO";
//     }
//   }
//   return Boolean(!sH.size) && "YES";
// };

// 영상 풀이
const solution = (a, b) => {
  const sH = new Map();
  let answer = "YES";
  for (let x of a) {
    if (sH.has(x)) {
      sH.set(x, sH.get(x) + 1);
    } else {
      sH.set(x, 1);
    }
  }
  for (let x of b) {
    if (!sH.has(x) || sH.get(x) === 0) return "NO";
    sH.set(x, sH.get(x) - 1);
  }
  return answer;
};

let a = "AbaAeCe";
let b = "baeeACA";

// let a = "abaCC";
// let b = "Caaab";
console.log(solution(a, b));
