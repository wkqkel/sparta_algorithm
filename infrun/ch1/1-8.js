// 일곱난쟁이

// 주어진 값 9개 중 7개의 합은 100, 가짜난쟁이 2개를 찾는 방식으로 진행

const solution = (arr) => {
  let sum = arr.reduce((sum, cur) => sum + cur, 0);

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (sum - (arr[i] + arr[j]) === 100) {
        arr.splice(j, 1);
        arr.splice(i, 1);
        // i번를 먼저 지우면 i가 지워지면서 j가 당겨지니 i를 먼저지움
      }
    }
  }
  return arr;
};

console.log(solution([20, 7, 23, 19, 10, 15, 25, 8, 13]));
