// 대소문자 변환

function solution(S) {
  let answer = "";
  for (let x of S) {
    let num = x.charCodeAt();
    if (num >= 65 && num <= 90) {
      answer += x.toLowerCase();
    } else answer += x.toUpperCase();
  }
  console.log(answer);
}

solution("StuDY");
