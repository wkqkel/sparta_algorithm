solution = (s, w) => {
  //     // 방법1
  //   let count = 0;
  //   for (let x of s) {
  //     if (x === w) count++;
  //   }
  //   return count;

  // 방법2 split의 리턴 배열의 갯수-1로 판단 _ 특이사항 _s의 마지막에 w가 존재해도 빈배열 반환함
  let answer = s.split(w).length;
  return answer - 1;
};

console.log(solution("COMPUTERPROGRAMMING", "R"));
