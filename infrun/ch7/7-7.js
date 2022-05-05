//내풀이

// const solution = (arr) => {
//   arr = arr.sort((a, b) => (a[0] - b[0] === 0 ? a[1] - b[1] : a[0] - b[0]));
//   return arr;
// };

// 내풀이2 버블정렬이용 _ 두개값이용해서 앞쪽이 크면 위치바꾸기
// const solution = (arr) => {
//   let answer = arr;
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (j = 0; j < arr.length - i - 1; j++) {
//       if (arr[j][0] > arr[j + 1][0]) {
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//       } else if (arr[j][0] === arr[j + 1][0]) {
//         if (arr[j][1] > arr[j + 1][1]) {
//           [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//         }
//       }
//     }
//   }
//   return answer;
// };

//영상풀이
const solution = (arr) => {
  arr = arr.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    else return a[0] - b[0];
  });
  return arr;
};
let arr = [
  [2, 7],
  [1, 3],
  [1, 2],
  [2, 5],
  [3, 6],
];

console.log(solution(arr));
