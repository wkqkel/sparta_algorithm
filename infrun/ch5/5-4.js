// const solution = (m, arr) => {
//   let ans = (lt = sum = 0);
//   for (let rt = 0; rt < arr.length; rt++) {
//     sum += arr[rt];
//     if (m <= sum) {
//       if (sum === m) ans++;
//       rt = ++lt - 1;
//       sum = 0;
//       continue;
//     }
//     ans++;
//   }
//   return ans;
// };

// 방법2
// const solution = (m, arr) => {
//   // rt본인이 포함된 m보다 작은 조건을 만족하는 배열의 경우의수는 rt-lt+1
//   // 조건을 만족안하고 sum이 커지면 조건 만족할 때까지 lt++하고, 만족하면  rt-lt+1
//   let ans = (lt = sum = 0);
//   for (let rt = 0; rt < arr.length; rt++) {
//     sum += arr[rt];
//     if (sum < m) ans += rt - lt + 1;
//     while (sum >= m) {
//       lt++;
//       sum -= arr[lt];
//       if (sum < m) ans += rt - lt + 1;
//     }
//   }
//   return ans;
// };

// 방법2-2
const solution = (m, arr) => {
  // rt본인이 포함된 m보다 작은 조건을 만족하는 배열의 경우의수는 rt-lt+1
  // 조건을 만족안하고 sum이 커지면 조건 만족할 때까지 lt++하고, 만족하면  rt-lt+1
  let ans = (lt = sum = 0);

  for (let rt = 0; rt < arr.length; rt++) {
    sum += arr[rt];
    while (sum > m) {
      sum -= arr[lt++];
    }
    ans += rt - lt + 1;
  }
  return ans;
};

let a = [1, 3, 1, 2, 3];
console.log(solution(5, a));
