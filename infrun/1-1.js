// 세 수 중 최솟값 _if문활용
function solution(a, b, c) {
  //   return Math.min(a, b, c);
  let answer = a;
  if (a < b) answer = a;
  else answer = b;
  if (c < answer) answer = c;
  return answer;
}

console.log(solution(6, 5, 11));
