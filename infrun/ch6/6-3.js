// // 카카오 인형뽑기(스택)

// const solution = (a, b) => {
//   // break는 해당 반복문 통째로 건너뜀 continue는 반복문의 해당 조건만 건너뜀
//   let N = a.length;
//   let ans = 0;
//   let stack = [];
//   for (x of b) {
//     for (let i = 0; i < N; i++) {
//       if (a[i][x - 1] !== 0) {
//         if (stack[stack.length - 1] === a[i][x - 1]) {
//           stack.pop();
//           ans += 2;
//         } else {
//           stack.push(a[i][x - 1]);
//         }
//         a[i][x - 1] = 0;
//         break;
//       }
//     }
//   }

//   return ans;
// };

// 영상풀이

function solution(board, moves) {
  let answer = 0;
  let stack = [];
  moves.forEach((pos) => {
    for (let i = 0; i < board.length; i++) {
      if (board[i][pos - 1] !== 0) {
        // 꺼내고 0으로 바꿈
        let tmp = board[i][pos - 1];
        board[i][pos - 1] = 0;
        if (tmp === stack[stack.length - 1]) {
          stack.pop();
          answer += 2;
        } else stack.push(tmp);
        break;
      }
    }
  });
  return answer;
}

let a = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];
// 4 3 1 1 3 2 undefined 4
let b = [1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution(a, b));
