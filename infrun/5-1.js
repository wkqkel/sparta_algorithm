// sort를 쓰면 시간복잡도는 nlogn임
// 투포인터알고리즘을 가지고 for문 하나로 가능     o(n+m)
// const solution = (a, b) => {
//   return [...a, ...b].sort((a, b) => a - b);
// };

// const solution = (a, b) => {
//   let answer = [];
//   // 투 포인트 초기화
//   let p1 = (p2 = 0);
//   for (let i = 0; i < a.length + b.length; i++) {
//     if (a[p1] <= b[p2]) {
//       answer.push(a[p1]);
//       p1++;
//     } else {
//       answer.push(b[p2]);
//       p2++;
//     }
//   }
//   return answer;
// };

const solution = (arr1, arr2) => {
  let answer = [];
  let n = arr1.length;
  let m = arr2.length;
  // 투 포인트 초기화

  let p1 = (p2 = 0);
  // 둘중하나라도 거짓되면 false (하나가 끝나면)
  while (p1 < n && p2 < m) {
    // 후치연산
    if (arr1[p1] <= arr2[p2]) answer.push(arr1[p1++]);
    else answer.push(arr2[p2++]);
  }
  // 하나끝나면 남은거 한쪽을 다넣어줌
  while (p1 < n) answer.push(arr1[p1++]);
  while (p2 < m) answer.push(arr2[p2++]);
  return answer;
};

let a = [1, 3, 5];
let b = [2, 3, 6, 7, 9];
console.log(solution(a, b));
