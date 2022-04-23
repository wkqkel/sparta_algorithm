// 공주구하기(큐)

// 큐Queue는 먼저 들어간게 먼저나오는 입구와 출구가 다름

// 배열 첫번째 제거 shift() 마지막 제거 pop() _둘다 원본 바뀜
// 배열 Idx제거 splice(i,num) _ 원본바뀜 slice(stIdx,endIdx) _원본안바뀜
// 배열 앞에추가 unshift() 뒤에 추가 push()

// // 혼자풀기 실패 k이하에서부터 동작안함
// const solution = (n, k) => {
//   let s = Array(n)
//     .fill(0)
//     .map((e, i) => i + 1);
//   let que = [];

//   while (s.length !== 1) {
//     for (let i = 0; i < k; i++) {
//       if (i === k - 1) s.shift();
//       else que.push(s.shift());
//     }
//     s = [...s, ...que];
//     que = [];
//   }
// };

//영상풀이
// 큐도 자바스크립트에선 배열 사용

function solution(n, k) {
  let answer;
  let queue = Array.from({ length: n }, (v, i) => i + 1);
  while (queue.length) {
    // k-1까지 뒤에 빼서 붙여줌(k-1-1번)
    for (let i = 1; i < k; i++) queue.push(queue.shift());
    queue.shift(); //k번째 없애줌
    if (queue.length === 1) answer = queue.shift();
  }
  return answer;
}

console.log(solution(8, 3));
