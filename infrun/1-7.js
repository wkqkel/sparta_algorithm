function solution(arr) {
  //   let answer = 0;
  //   let dayOne = arr[0];
  //   for (let i = 1; i < arr.length; i++) {
  //     if (dayOne === +String(arr[i])[1]) {
  //       answer++;
  //     }
  //   }
  //   return answer;

  let answer = 0;
  let dayOne = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (dayOne === arr[i] % 10) {
      answer++;
    }
  }
  return answer;
}
console.log(solution([0, 12, 20, 54, 30, 87, 91, 30]));
