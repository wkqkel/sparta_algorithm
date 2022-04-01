// 가뷔바위보게임
// 1:가위, 2:바위, 3:보
// 각 회 A의 정보, B의 정보가 주어질 때 각 회 승자 출력하기

function solution(A, B) {
  //방법1
  // 3-3 무승부
  // 2-1 = 1 승리
  // 2-3 = -1 패배
  // 3-1 = 2 패배
  // 3-2 = 1 승리
  // 1-2 = -1 패배
  // 1-3= -2 승리
  // [-1, 2] 패배 [-2, 1] 승리 0 무승부

  //   for (let i = 0; i < A.length; i++) {
  //     let diff = A[i] - B[i];
  //     if ([-1, 2].includes(diff)) {
  //       console.log("B");
  //     } else if ([-2, 1].includes(diff)) {
  //       console.log("A");
  //     } else {
  //       console.log("D");
  //     }
  //   }
  // 방법2
  answer = "";
  // 예외 조건 주고,기준을 하나를 잡고, 나머지 처린
  for (let i = 0; i < A.length; i++) {
    if (A[i] === B[i]) answer += "D" + "\n";
    else if (A[i] === 1 && B[i] === 3) answer += "A" + "\n";
    else if (A[i] === 2 && B[i] === 1) answer += "A" + "\n";
    else if (A[i] === 3 && B[i] === 2) answer += "A" + "\n";
    else answer += "B" + "\n";
  }
  console.log(answer.trim());
}

solution([2, 3, 3, 1, 3], [1, 1, 2, 2, 3]);
