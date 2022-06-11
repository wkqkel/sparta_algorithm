// 이진수 출력(재귀)
// 나머지를 출력
// 몫이 0이되면 브레이크
// 거꾸로 출력 => 함수 밑에 두기
// 초보자는 if else로 시작하고 종착점부터 생각 언제멈춰야하는지
// n===0일때 return
// else
function solution(n) {
  let answer = "";
  function DFS(n) {
    if (n === 0) return;
    else {
      DFS(parseInt(n / 2));
      answer += n % 2;
    }
  }
  DFS(n);
  return answer;
}
console.log(solution(11));
