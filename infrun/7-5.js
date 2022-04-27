//카카오 캐시문제변형: 삽입정렬응용

//내풀이
// const solution = (n, arr) => {
//   let cache = Array(n).fill(0);

//   for (let i = 0; i < arr.length; i++) {
//     if (!cache.includes(arr[i])) {
//       cache.unshift(arr[i]);
//       cache.pop();
//     } else {
//       cache.splice(cache.indexOf(arr[i]), 1);
//       cache.unshift(arr[i]);
//     }
//   }
//   return cache;
// };

//영상풀이
// arr for문돌면서 순서대로 오는데
// 그 값이 있냐 없냐에 따라 히트냐 미스냐 찾고
// 미스면 캐시 사이즈-1부터 1까지 for문 돌면서 i-1을 i로 복사함 ans[i]=a[i-1]
// 그리고 miss난 값을 0번에 넣음 ans[0]=arr[i]
// 히트면 히트지점부터 1까지만 돌면서 또 뒤로 복사하고 제일 앞에 최근 작업 넣어줌

// function solution(size, arr) {
//   let answer = Array.from({ length: size }, () => 0);
//   arr.forEach((x) => {
//     let pos = -1;
//     // 캐시 돌면서 hit,miss판별
//     for (let i = 0; i < size; i++) if (x === answer[i]) pos = i;
//     if (pos === -1) {
//       for (let i = size - 1; i >= 1; i--) {
//         // 앞에꺼를 뒤로땡겨줌
//         answer[i] = answer[i - 1];
//       }
//     } else {
//       for (let i = pos; i >= 1; i--) {
//         // 앞에꺼를 뒤로땡겨줌
//         answer[i] = answer[i - 1];
//       }
//     }
//     answer[0] = x;
//   });
//   return answer;
// }

// 내장함수 이용 영상풀이

function solution(size, arr) {
  let answer = [];
  arr.forEach((x) => {
    let pos = -1;
    for (let i = 0; i < size; i++) if (x === answer[i]) pos = i;
    if (pos === -1) {
      answer.unshift(x);
      if (answer.length > size) answer.pop();
    } else {
      // 앞에꺼를 뒤로땡겨줌
      answer.splice(pos, 1);
      answer.unshift(x);
    }
  });
  return answer;
}

let arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(5, arr));
