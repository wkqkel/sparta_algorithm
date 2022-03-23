// 1부터 N까지 합 출력하기 _누적

function solution(N) {
  let sum = 0;
  for (let i = 1; i <= N; i++) {
    sum += i;
  }
  return sum;
}

console.log(solution(6));
