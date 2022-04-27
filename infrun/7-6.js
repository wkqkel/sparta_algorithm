//장난꾸러기 현수

// 영상풀이
// sort돼있는값과 바꾼 상태를 비교해서 다른 인덱스를 찾기

const solution = (arr) => {
  let answer = [];
  // arr.slice()하면 복사_ 배열안에 배열이면 얕은 복사, 기본형 데이터면 깊은복사
  let sortArr = arr.slice();
  sortArr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== sortArr[i]) answer.push(i + 1);
  }
  return answer;
};

let arr = [120, 125, 152, 130, 135, 135, 143, 127, 160];
console.log(solution(arr));
