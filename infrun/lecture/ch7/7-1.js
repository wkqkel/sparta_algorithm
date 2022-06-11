// 선택정렬(큐)
//숫자들 중 가장 작은 값을 선택해서 맨 왼쪽에 있는 값과 교환하는 것이 선택정렬의 기본적인 개념이다.

// 기본 정렬 알고리즘 3가지 (선택정렬,버블정렬,삽입정렬)
//정렬 방법 중 가장 느린 것은 버블 정렬. 그리고 그다음으로 느린 방법이 바로 선택 정렬이다.
//선택 정렬이 버블 정렬보다 2배 더 빠를 수도 있음에 불구하고 선택 정렬의 시간 복잡도 역시 O(n²)이다.
// 삽입 정렬은 필요한 아이템만 스캔하고 선택 정렬은 전체 모든 아이템을 스캔하기 때문에 삽입 정렬은 선택 정렬보다 빠르다

// const solution = (arr) => {
//   return arr.sort((a, b) => a - b);
// };

//영상풀이
// arr이라는 배열을 받아서 이중for문 도는데 i랑 j는 i뒤편부터 돌면서
//  i부터 맨끝까지 중에서 제일 작은 숫자를 i번째에 넣음
// 이때 변수 idx에 i로(인덱스) 초기화하고 제일 작은값의 인덱스를 넣어줌
// if(arr[j]<arr[idx]) idx=j
// 다돌면 arr[i]값과 arr[idx]값의 위치를 바꿔줌

const solution = (arr) => {
  // 얕은복사로 arr을 바꾸면 answer도 바뀜
  let answer = arr;

  for (let i = 0; i < arr.length - 1; i++) {
    let idx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[idx]) idx = j;
    }
    // 자바스크립트 최신기능으로 원래는 tmp로 해서 바꼈는데 이렇게하면 바뀜.
    // 구조분해할당으로 swap [arr[1], arr[2], arr[4]] = [arr[2], arr[4], arr[1]];
    [arr[i], arr[idx]] = [arr[idx], arr[i]];
  }

  return answer;
};

let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));
