function solution(S) {
  // 방법1
  //   return S.toUpperCase();
  //방법2
  //   let answer = "";
  //   for (let x of S) {
  //     if (x === x.toLowerCase()) {
  //       answer += x.toUpperCase();
  //     } else {
  //       answer += x;
  //     }
  //   }
  //   return answer;

  // 방법3
  let answer = "";
  for (let x of S) {
    let num = x.charCodeAt();
    // 소문자를 대문자로 바꾸기 아스키코드를 -32 소문자로바꾸기 +32
    if (num >= 97 && num <= 122) answer += String.fromCharCode(num - 32);
    else answer += x;
  }
  return answer;
}

console.log(solution("ItisTimeToStudy"));
