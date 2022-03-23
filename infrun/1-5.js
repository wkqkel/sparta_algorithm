//최솟값 구하기

function solution(arr) {
  //     // 방법 1
  // let min = Math.min();
  //   let min = Number.MAX_SAFE_INTEGER; // 안정적인 큰 숫자
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] < min) {
  //       min = arr[i];
  //     }
  //   }
  //   return min;
  // 방법2
  return Math.min(...arr); // 또는 Math.min.apply(null,arr) //첫번째 인자는 this로 null 넘기고, 두번째인자는 배열
}
console.log(solution([5, 3, 7, 11, 2, 15, 17]));
