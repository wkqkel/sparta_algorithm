// 유효한 펠린드롬 복습

// //방법1 아스키코드 이용
// const solution = (str) => {
//   str = str.toUpperCase();
//   let answer = "";
//   for (let x of str) {
//     let num = x.charCodeAt();
//     // 65~90 대문자 97~122 소문자 charCodeAt, String.fromCharCode 기억!
//     if (num >= 65 && num <= 90) {
//       answer += x;
//     }
//   }
//   for (let i = 0; i < answer.length / 2; i++) {
//     if (answer[i] !== answer[answer.length - 1 - i]) {
//       return "NO";
//     }
//   }
//   return "YES";
// };

// 방법2 정규식 이용

const solution = (str) => {
  str = str.toLowerCase().replace(/[^a-z]/g, "");
  if (str.split("").reverse().join("") !== str) {
    return "NO";
  }
  return "YES";
};

console.log(solution("found7, time:, study;, Yduts;, emit, 7Dnuof"));
