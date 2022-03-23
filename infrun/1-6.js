// 홀수_ 첫째줄에 홀수의 합 둘째줄에 홀수중에 최소값
// 방법1
// function solution(array) {
//   const oddArray = [];
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 !== 0) {
//       oddArray.push(array[i]);
//     }
//   }

//   const oddSum = oddArray.reduce((sum, cur, idx) => {
//     return (sum += cur);
//   }, 0);
//   const oddMin = Math.min(...oddArray);
//   console.log(oddSum);
//   console.log(oddMin);
// }

// 방법2 for of구문 이용
function solution(arr) {
  let answer = [];
  let sum = 0,
    min = Number.MAX_SAFE_INTEGER;
  // 배울때는 변수명 간단하게, 간단한 코드도 복잡해보임_ 면접때는 잘 지정
  for (let x of arr) {
    if (x % 2 === 1) {
      sum += x;
      if (x < min) min = x;
    }
  }
  answer.push(sum);
  answer.push(min);
  return answer;
}
console.log(solution([12, 77, 38, 41, 53, 92, 85]));
