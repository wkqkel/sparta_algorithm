// 삼각형 판별하기
// 삼각형의 조건 _짧은 두 변의 합이 가장 긴 변의 길이보다 커야함.
function solution(A, B, C) {
  let answer, max;
  let sum = A + B + C;
  if (A < B) max = B;
  else max = A;
  if (max < C) max = C;
  if (max < sum - max) {
    return "YES";
  } else return "NO";
}
console.log(solution(13, 33, 17));
