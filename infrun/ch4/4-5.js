// k번쨰 큰수

function solution(n, k, arr) {
  let sumArr = [];
  // 모든 경우의 수를 기록 nC3

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let m = j + 1; m < n; m++) {
        sumArr.push(arr[i] + arr[j] + arr[m]);
      }
    }
  }
  // 중복제거 set이용
  sumArr = [...new Set(sumArr.sort((a, b) => b - a))];
  return sumArr[k - 1] ? sumArr[k - 1] : -1;
}

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];

console.log(solution(10, 3, arr));
