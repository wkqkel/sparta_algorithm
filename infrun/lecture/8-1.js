// 재귀함수와 스택프레임(중요!)
// 재귀함수란 자기가 자기 자신을 호출
// 무한반복
// 초보자는 else if문으로

// 스택은 반환 주소(return address), 함수 매개 변수, 지역 변수 등 함수 호출과 관련된 데이터를 위한 메모리 영역
// 스택(Stack)은 후입선출(LIFO, Last-In-First-Out) 자료구조

// 중간에 자신을 호출하는 함수를 만나면 걔는 아래에서 대기하고 위로 또 쌓이고, 위에서부터 처리.
function solution(n) {
  function DFS(L) {
    if (L === 0) return;
    else {
      DFS(L - 1);
      console.log(L); // 순서바꾸면 1,2,3 출력됨!! 스택에 저장되기때문.(모든함수는 스택에들어감)
    } // 스택이 있고, 스택프레임이 있는데, 스택프레임에는 매개변수,지역변수,복귀주소를 저장
  }
  DFS(n);
}
solution(3);
