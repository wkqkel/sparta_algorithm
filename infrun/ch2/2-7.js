// 봉우리
// 상하좌우가 나보다 작으면 봉우리가 됨
// 이때 격자의 바깥쪽(가장자리)는 0이므로 항상 나보다 작다.
// 네방향 탐색_ 나보다 큰게 있는지 탐색
// dx, dy를 초기화

function solution(arr) {
  //   console.log(arr);
  let n = arr.length;
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];
  let cnt = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let flag = 1;
      for (let k = 0; k < 4; k++) {
        let nx = i + dx[k];
        let ny = j + dy[k];
        // 이때 인덱스가 0이하 음수가 되면 인덱스 아웃오브랜지 오류남.
        // 참조전에 걸러줘야함
        if (
          nx >= 0 &&
          nx < n &&
          ny >= 0 &&
          ny < n &&
          arr[nx][ny] >= arr[i][j]
        ) {
          flag = 0;
          break; // k for문 멈추고 나옴
        }
      }
      if (flag) cnt++;
    }
  }

  return cnt;
}

let arr = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];

console.log(solution(arr));
