// 점수계산

// const solution = (arr) => {
//   answer = 0;
//   count = 1;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 1) {
//       answer += count;
//       count++;
//     } else {
//       count = 1;
//     }
//   }
//   console.log(answer);
// };
function solution(arr) {
  let answer = 0,
    cnt = 0;
  for (let x of arr) {
    if (x === 1) {
      cnt++;
      answer += cnt;
    } else cnt = 0;
  }
  console.log(answer);
}

solution([1, 0, 1, 1, 1, 0, 0, 1, 1, 0]);
