// 등수구하기
// 입력된 순서대로 등수출력하기 이 때 1등이 3명이면 두번째점수는 4등이 되게 출력.

//1번풀이
// const solution = (arr) => {
//   // sort 원본 바뀜 주의 _펼침연산자 이용
//   const sortedArr = [...arr].sort((a, b) => b - a);
//   const rankArr = arr.map((e) => sortedArr.indexOf(e) + 1);
//   console.log(rankArr);
// };

// solution([87, 89, 92, 100, 76]);

//2번풀이
// 2중for문
//i 갑이 고정되고 j가 돌면서 j가 i보다크면 i번의 등수를 ++.

function solution(arr) {
  let n = arr.length;
  let answer = Array.from({ length: n }, () => 1);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[j] > arr[i]) answer[i]++;
    }
  }
  console.log(answer);
}

solution([87, 89, 92, 100, 76]);
