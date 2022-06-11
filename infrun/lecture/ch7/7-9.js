//이 문제도 그리디 대표문제2

// 각 사람마다 오는 시간, 가는 시간을 분리시키고, 시간 순으로 정렬
// ex) [5,"s"],[12,"s"],[14,"e"],[14,"s"]
// s를 만나면 사람이 온것이니 증가 ++, e를 만나면 사람이 갔으니 감소.
// 그러고 한차례마다 cnt와 answer을 비교해서 큰값을 answer
// e랑 s가 있으면 e가 먼저와야함. 정각에는 사람이 존재하지 않는것이므로! 반대로 하면 최댓값이 안맞음

// 영상풀이

function solution(times) {
  let answer = Number.MIN_SAFE_INTEGER;
  let T_line = [];
  for (let x of times) {
    T_line.push([x[0], "s"]);
    T_line.push([x[1], "e"]);
  }
  T_line.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1].charCodeAt() - b[1].charCodeAt();
      return a[1] - b[1];
    } //아스키코드상 e가 먼저(알파벳 s보다 e가 먼저) // 이때 숫자가 아닌 문자니까 아스키코드로 바꿔줌
    else return a[0] - b[0];
  });

  let cnt = 0;
  for (let x of T_line) {
    if (x[1] === "s") cnt++;
    else cnt--;
    answer = Math.max(answer, cnt);
  }

  return answer;
}

let arr = [
  [14, 18],
  [12, 15],
  [15, 20],
  [20, 30],
  [5, 14],
];
console.log(solution(arr));
