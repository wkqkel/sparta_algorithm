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
  return answer;
};

// s[i]와 s[i+1]을 비교해서 같으면 cnt++ 다를땐 s[i]+cnt 하고 cnt=1 일보다 클때만 cnt붙이기

console.log(solution("KKHSSSSSSSE"));
