// 보이는 학생 수
// 앞에 서있는 사람들보다 크면 보이고, 같거나 작으면 안보임

function solution(arr) {
  let max = Number.MIN_SAFE_INTEGER;
  let cnt = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
      cnt++;
    }
  }
  console.log(cnt);
}

solution([130, 135, 148, 140, 45, 150, 150, 153]);
