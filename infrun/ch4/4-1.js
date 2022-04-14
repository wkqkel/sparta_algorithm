// const solution = (arr) => {
//   let max = 0;
//   let answer = 0;

//   for (let x of arr) {
//     let sum = 0;
//     for (let w of String(x)) {
//       sum += +w;
//     }
//     if (+sum > max) {
//       answer = x;
//       max = +sum;
//     } else if (+sum === max) {
//       if (x > answer) {
//         answer = x;
//         max = +sum;
//       }
//     }
//   }
//   return answer;
// };

// 방법2
//숫자 자체를 누적하기

// const solution = (arr) => {
//   let answer,
//     max = Number.MIN_SAFE_INTEGER;

//   for (let x of arr) {
//     let sum = 0,
//       tmp = x;
//     // x의 사본인 tmp를 만들고(밑에서 원본인 x를 사용해야하기때문), 10으로 나누면 일의자리는 나머지가 되고, 앞의 것들은 몫이 됨
//     while (tmp) {
//       sum += tmp % 10;
//       // 몫 소수점 없애기위해 Math.floor 또는 parseInt 해줌
//       tmp = Math.floor(tmp / 10);
//     }
//     if (sum > max) {
//       answer = x;
//       max = sum;
//     } else if (sum === max) {
//       if (x > answer) {
//         answer = x;
//       }
//     }
//   }
//   return answer;
// };

// 방법3 내장함수이용

const solution = (arr) => {
  let answer,
    max = Number.MIN_SAFE_INTEGER;

  for (let x of arr) {
    let sum = x
      .toString()
      .split("")
      .reduce((s, cur) => s + Number(cur), 0);
    if (sum > max) {
      answer = x;
      max = sum;
    } else if (sum === max) {
      if (x > answer) {
        answer = x;
      }
    }
  }
  return answer;
};

console.log(solution([128, 460, 603, 40, 521, 137, 123]));
