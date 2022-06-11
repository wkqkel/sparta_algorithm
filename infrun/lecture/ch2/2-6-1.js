// 격자판 다시풀기

const solution = (arr) => {
  const n = arr.length;
  let answer = 0;
  for (let i = 0; i < n; i++) {
    let sum1 = (sum2 = 0);
    for (let j = 0; j < n; j++) {
      // 앞에 값이 행, 자주 바뀌는 값이 j
      sum1 += arr[i][j];
      sum2 += arr[j][i];
    }
    answer = Math.max(answer, sum1, sum2);
  }
  let sum1 = (sum2 = 0);
  for (let i = 0; i < n; i++) {
    sum1 += arr[i][i];
    sum2 += arr[i][n - i - 1];
  }
  answer = Math.max(answer, sum1, sum2);
  return answer;
};

console.log(
  solution([
    [10, 13, 10, 12, 15],
    [12, 39, 30, 23, 11],
    [11, 25, 50, 53, 15],
    [19, 27, 29, 37, 27],
    [19, 13, 30, 13, 19],
  ])
);
