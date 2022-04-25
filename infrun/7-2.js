//버블정렬
//버블정렬은 배열내의 두개의 인접한 Index를 비교하여
// 더 큰 숫자를 뒤로 보내 차곡차곡 쌓아 정렬하는 방법입니다.

//강의영상
// 버블정렬이란
// arr을받고 이웃한 두 수끼리 비교해서 뒤에가 작으면 바꿔줌
// 이중for문으로 i랑 안쪽에 j가 도는데 arr[j]>arr[j+1]이면 바꿔줌(점점 큰게 뒤로감)
// i는 0부터 length-1만큼 돌고(앞뒤비교니까)
// i가 한 바퀴돌때마다 제일 뒤에 제일 큰값이 들어가있게 되므로 마지막자리는 결정돼서 점점 안돌아도됨, j는 0부터 length-1-i번보다 하나적게 돌면됨

const solution = (arr) => {
  let answer = arr;
  //i는 length-2까지 돔
  for (let i = 0; i < arr.length - 1; i++) {
    for (j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return answer;
};

let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));
