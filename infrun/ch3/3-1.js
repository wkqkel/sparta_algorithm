// 회문문자열

//방법1
// const solution = (s) => {
//   const reverse = s.toLowerCase().split("").reverse().join("");
//   if (reverse === s.toLowerCase()) {
//     return "YES";
//   } else {
//     return "NO";
//   }
// };

console.log(["g", "e"] === ["g", "e"]);
//방법2

const solution = (s) => {
  let answer = "YES";
  let len = s.length;
  s = s.toLowerCase();
  for (let i = 0; i < Math.floor(len / 2); i++) {
    if (s[i] !== s[len - 1 - i]) {
      answer = "NO";
      return answer;
    }
  }
  return answer;
};

console.log(solution("gooGs"));
