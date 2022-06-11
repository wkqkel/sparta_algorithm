//버블정렬응용
// 순서는 그대로, 음의 정수는 앞쪽, 양의정수는 뒤쪽으로
const solution = (arr) => {
  // 영상풀이
  // 풀이1. for문 2번 돌면서 처음엔 음수를 푸쉬하고 두번짼 양수를 푸쉬
  // 풀이2. 버블정렬사용
  // 버블정렬은 이웃한거끼리 비교하는건데, 앞에가 양수고 뒤에가 음수면 바꿔버림
  // i가 한번돌때마다 음수는 한칸씩 앞으로오고, 제일뒤에가야할 양수는 하니씩 가있게됨.
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > 0 && arr[j + 1] < 0) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
};

let arr = [1, 2, 3, -3, -2, 5, 6, -6];
console.log(solution(arr));
