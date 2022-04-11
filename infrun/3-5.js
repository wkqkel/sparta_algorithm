// 문자열 압축

const solution = (s) => {
  let answer = "";
  count = 1;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i - 1]) {
      count++;
    } else {
      answer += count !== 1 ? count + s[i] : s[i];
      count = 1;
    }
  }
  return answer; ///
};

console.log(solution("KKHSSSSSSSE"));
