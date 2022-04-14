// 졸업선물

// const solution = (M, arr) => {
//   // 제일비싼거 할인받는게 아니고(제일비싼거 할인받았다고 그래도 제일 비싸서 먼저 사야되는게 아닐 수 있음) 하나씩 할인받았다 치고 계산해봐야함.
//   // arr[arr.length - 1][0] /= 2;
//   let answer = 0;
//   arr.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));

//   for (let i = 0; i < arr.length; i++) {
//     let arrCopy = [...arr];
//     arrCopy[i][0] /= 2;
//     console.log(arrCopy);
//     let cnt = 0;
//     let left = M;
//     for (let j = 0; j < arr.length; j++) {
//       let giftFee = arr[j][0];
//       let shipFee = arr[j][1];
//       let totalFee = giftFee + shipFee;
//       left -= totalFee;
//       cnt++;

//       if (left <= 0) {
//         answer = Math.max(cnt, answer);

//         continue;
//       }
//     }
//   }
//   return answer;
// };

const solution = (m, product) => {
  // 제일비싼거 할인받는게 아니고(제일비싼거 할인받았다고 그래도 제일 비싸서 먼저 사야되는게 아닐 수 있음) 하나씩 할인받았다 치고 계산해봐야함.
  // arr[arr.length - 1][0] /= 2;
  let answer = 0;
  let n = product.length;
  arr.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));

  for (let i = 0; i < n; i++) {
    // 할인시키고 먼저 샀다고침
    let money = m - (product[i][0] / 2 + product[i][1]);
    let cnt = 1;

    for (let j = 0; j < n; j++) {
      if (j !== i && product[j][0] + product[j][1] > money) break;
      // i는 사면 안되고, 상품전체가격이 남은머니보다 작으면
      if (j !== i && product[j][0] + product[j][1] <= money) {
        money -= arr[j][0] + arr[j][1];
        cnt++;
      }
    }
    answer = Math.max(cnt, answer);
  }
  return answer;
};
let arr = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];
console.log(solution(28, arr));
