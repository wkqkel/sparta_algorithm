let arr = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];

const solution = (arr) => {
  const n = arr.length;
  let count = 0;
  let dy = [-1, 0, 1, 0];
  let dx = [0, 1, 0, -1];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let flag = 1;
      for (let k = 0; k < 4; k++) {
        let di = i + dy[k];
        let dj = j + dx[k];
        if (
          di >= 0 &&
          dj >= 0 &&
          di < n &&
          dj < n &&
          arr[i][j] <= arr[di][dj]
        ) {
          flag = 0;
          break;
        }
      }
      count += flag;
    }
  }
  return count;
};

console.log(solution(arr));
