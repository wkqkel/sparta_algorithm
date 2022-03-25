// 대문자 A를 #으로

solution = (s) => {
  //방법1
  //   let answer = "";
  //   for (let x of s) {
  //     if (x === "A") answer += "#";
  //     else answer += x;
  //   }
  //   return answer;

  //방법2 replace 및 정규식 이용
  let answer = s;
  answer = answer.replace(/A/g, "#");
  return answer;
};

console.log(solution("BANANA"));
