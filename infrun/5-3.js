// const solution = (M, arr) => {
//   let tmp =ans= [];

//   for (let i = 0; i < arr.length; i++) {
//     let sum = tmp.reduce((a, b) => a + b, 0);
//     console.log(i, sum, tmp, ans);
//     if (sum < M) {
//       tmp.push(arr[i]);
//     } else if (sum >= M) {
//       tmp.shift();
//       i--;
//     }
//     sum = tmp.reduce((a, b) => a + b, 0);
//     if (sum === M) {
//       ans.push([...tmp]);
//     }
//   }
//   return ans;
// };

// 배열말고 투포인트로 풀기
// 투포인트알고리즘 대표문제
const solution = (m, arr) => {
  // 우선 lt는 왼쪽(left)포인트, rt는 오른쪽(right)포인트를 0으로 초기화

  let answer = (sum = lt = 0);
  // sum은 lt부터 rt까지의 합
  // sum이 M보다 작으면 rt증가, 같거나 커지면 lt증가
  // rt가 증가해서 (sum이 커지거나) lt가 증가해서 (sum이 작아질때마다) sum 다시확인
  // 마지막에서 rt가 length보다 커지면 sum보다 작으니 종료.(lt는 증가해봤자 작아짐)
  for (let rt = 0; rt < arr.length; rt++) {
    sum += arr[rt];
    if (sum === m) answer++;
    while (sum >= m) {
      sum -= arr[lt++];
      if (sum === m) answer++;
    }
  }
  return answer;
};

let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));
