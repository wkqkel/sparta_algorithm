// 이민트리순회(DFS:깊이우선탐색)
// 부모노드에서 왼쪽, 오른쪽 자식이 기본구조
// 왼쪽자식은 부모노드 x2 오른쪽자식은 부모노드x2+1

// 깊이우선탐색_ 가보고 없으면 빽
// 전위 왼쪽가다가 막히면 되돌아와서 안가봤던길 감 또 막히면 뒤로 백
// 출력방식이
// 전위는 부=>왼=>오
// 중위는 왼=>부=>오 // 중위는 왼쪽자식 다음에 출력
// 후위는 왼 오 부 //기준이 부모

// v는 버택스로 정점
// 무조건 if else
function solution(v) {
  let answer;
  function DFS(v) {
    // if는 멈추는 지점
    if (v > 7) return;
    else {
      //전위 넘어간건 부모 출력하고 그다음 왼쪽자식
      console.log(v);
      DFS(v * 2);
      DFS(v * 2 + 1);
      // 중위
      DFS(v * 2); // 왼쪽가지
      console.log(v);
      DFS(v * 2 + 1);

      // 후위
      DFS(v * 2);
      DFS(v * 2 + 1);
      console.log(v);
    }
  }
  DFS(1);
  return answer;
}
console.log(solution(1));
