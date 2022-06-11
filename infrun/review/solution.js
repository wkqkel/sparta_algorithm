const solution = (arr) => {
  const n = arr.length;
  const dx = [0, 1, 0, -1];
  const dy = [-1, 0, 1, 0];
  let answer = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let flag = 1;
      for (let k = 0; k < 4; k++) {
        let nx = j + dx[k];
        let ny = i + dy[k];

        if (
          nx >= 0 &&
          ny >= 0 &&
          nx < n &&
          ny < n &&
          arr[i][j] <= arr[ny][nx]
        ) {
          flag = 0;
          break;
        }
      }
      if (flag) answer++;
      // count===4로 했는데, 각 모서리일땐 4가 아닐 수 있음.
    }
  }

  return answer;
};

let arr = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];

console.log(solution(arr));
