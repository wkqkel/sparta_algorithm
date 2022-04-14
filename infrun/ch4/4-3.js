// 멘토링 => 블루투포스(모든 경우의 수를 다 확인)

const solution = (test) => {
  // 0. 멘토, 멘티가 될 수 있는 모든 경우의 수 [i,j] = [멘토인 학생번호, 멘티인 학생번호] => i,j 이중 for문'
  let answer = 0;
  let tmp = [];
  let n = test[0].length;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      // 1. i,j가 멘토,멘티가 될 수 있는지 체크 => 테스트마다 돌면서(k) i의 등수(pi)가 j의 등수(pj)보다 작은지(s) 체크 => [테스트수,등수] = k,s 이중 for문
      let cnt = 0;
      for (let k = 0; k < test.length; k++) {
        let pi = (pj = 0);

        for (let s = 0; s < n; s++) {
          // 멘토 i나 멘티 j인 학생이 k번째 테스트의 s위치에 있으면 그 학생의 등수 pi,pj는 s
          if (i === test[k][s]) pi = s;
          if (j === test[k][s]) pj = s;
        }
        // 해당 테스트에 멘토,멘티 가능 여부 체크 cnt
        if (pi < pj) cnt++;
      }
      //특정 멘토,멘티가 테스트 다 돌았을 때 다 가능했으면 최종 답에도 추가
      if (cnt === test.length) {
        tmp.push([i, j]);
        answer++;
      }
    }
  }
  console.log(tmp);
  return answer;
};

let arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];
console.log(solution(arr));
