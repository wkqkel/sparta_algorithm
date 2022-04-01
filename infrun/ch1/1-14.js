// 가장 긴 문자열

const solution = (arr) => {
  let max = Number.MIN_SAFE_INTEGER;
  let answer;
  for (let x of arr) {
    if (x.length > max) {
      max = x.length;
      answer = x;
    }
  }
  console.log(answer);
};
solution(["teacher", "time", "student", "beautiful", "good"]);
