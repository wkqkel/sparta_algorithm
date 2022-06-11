// const solution = (arr1, arr2) => {
//   let answer = [];
//   let n = arr1.length;
//   let m = arr2.length;
//   for (let i = 0; i < n; i++) {
//     if (arr2.includes(arr1[i])) {
//       answer.push(arr1[i]);
//     }
//   }
//   return answer.sort((a, b) => a - b);
// };

// 먼저 두 집합을 정렬하고, 투포인트알고리즘으로 작업
// p1 1 2 3 5 9
// p2 2 3 5 7 8 로 해서
// 가리키는 값이 같을 때는 answer에 푸쉬하고 포인터 두개 동시에 증가 아닐 떄는 작은 값을 가리키는 포인터를 증가
// 한쪽이 다 끝나면 교집합이 더있을수없음.
function solution(arr1, arr2) {
  let answer = [];
  // sort는 기볹적으로 원소들을 0문자로 변환하고 정렬해서 문자처럼 사전적으로 정의됨
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);
  let p1 = (p2 = 0);
  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] === arr2[p2]) {
      answer.push(arr1[p1++]);
      p2++;
    } else if (arr1[p1] < arr2[p2]) p1++;
    else p2++;
  }
  return answer;
}

let a = [1, 3, 9, 5, 2];
let b = [3, 2, 5, 7, 8];
console.log(solution(a, b));
