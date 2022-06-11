// // 1-10 정규식 공부하기
// const solution = (str, word) => {
//   // return str.replace(/[^R]/gi, "").length;
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === word) count++;
//   }
//   return count;
// };

// console.log(solution("COMPUTERPROGRAMMING", "R"));

// //  1-16 중복된 문자열 제거
// set을 배열로 바꾸기 _ 스프레드 연산자 이용
// const solution = (str) => {
//   return [...new Set(str.split(""))].join("");
// };

// console.log(solution("ksekkset"));

// 2-2 가위바위보

// const solution = (arrA, arrB) => {
//   // A-B
//   // A승리 1, -2
//   // A 무승부 0
//   const answer = [];
//   for (let i = 0; i < arrA.length; i++) {
//     let diff = arrA[i] - arrB[i];

//     if (diff === 1 || diff === -2) answer.push("A");
//     else if (diff === 0) answer.push("D");
//     else answer.push("B");
//   }
//   return answer;
// };

// console.log(solution([2, 3, 3, 1, 3], [1, 1, 2, 2, 3]));
