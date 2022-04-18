// 슬라이딩 윈도우 라는 알고리즘
// 언제 투포인트알고리즘을 쓰는지?
// Two Pointers 는 1차원 배열에서 두 개의 포인터를 조작하여 원하는 결과를 얻는 알고리즘
// 2개의 포인터를 사용하여 기존의 방식보다 시간을 개선
// 즉, 어떤 특정 조건을 만족하는 🔥연속 구간🔥을 구할 때 O(N) 으로 풀 수 있도록 도와주는 알고리즘
// 투포인트알고리즘: 구간이 가변적 / 슬라이딩 윈도우:구간이 고정적

// 내풀이
const solution = (m, arr) => {
  let lt = 0,
    sum = 0,
    max = Number.MIN_SAFE_INTEGER;
  for (let rt = 0; rt < arr.length; rt++) {
    sum += arr[rt];
    if (rt - lt === m - 1) {
      if (sum > max) {
        max = sum;
      }
      sum -= arr[lt++];
    }
  }
  return max;
};

//강의풀이
// const solution = (k, arr) => {
//   let sum = arr[0] + arr[1] + arr[2],
//     max = Number.MIN_SAFE_INTEGER;
//   for (let i = k; i < arr.length; i++) {
//     sum += arr[i] - arr[i - k];
//     if (sum > max) max = sum; // 또는 max = Math.max(max,sum)
//   }
//   return max;
// };

let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));
