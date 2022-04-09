const solution = (s) => {
  let answer = "YES";
  // ^ 꺽새는 아닌것들을 의미, 소문자가 아닌 것들 찾아서 빈문자열로 바꿔라
  s = s.toLowerCase().replace(/[^a-z]/g, "");

  if (s.split("").reverse().join("") !== s) {
    return "NO";
  }
  return answer;
};

console.log(solution("found7, time:, study;, Yduts;, emit, 7Dnuof"));
