//격자판 최대합

// //이차원 배열 arr[행][열] 순으로 코드짜기 행이 세로임.

// const solution = (arr) => {
//   let answer = Number.MIN_SAFE_INTEGER;
//   let n = arr.length;
//   let sum1 = (sum2 = 0); //행의 합은 sum1
//   for (let i = 0; i < n; i++) {
//     sum1 = sum2 = 0;
//     for (let j = 0; j < n; j++) {
//       sum1 += arr[i][j];
//       sum2 += arr[j][i];
//     }
//     answer = Math.max(answer, sum1, sum2);
//   }
//   sum1 = sum2 = 0;
//   for (let i = 0; i < n; i++) {
//     sum1 += arr[i][i];
//     sum2 += arr[i][n - i - 1];
//   }
//   answer = Math.max(answer, sum1, sum2);
//   console.log(answer);
// };

// solution([
//   [10, 13, 10, 12, 15],
//   [12, 39, 30, 23, 11],
//   [11, 25, 50, 53, 15],
//   [19, 27, 29, 37, 27],
//   [19, 13, 30, 13, 19],
// ]);
