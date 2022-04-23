//올바른 괄호(스택)
// 자료구조 스택 _ 웅덩이 => 입구와 출구가 하나=> 가장 나중에 들어간거 먼저 나오는 구조 LIFO(Last In First Out)
// 큐는 입구와 출구가 두개=> 먼저들어간게 먼저나옴 FIFO(Fist In First Out)
// 자바스크립트에서 스택만들기
// 그냥 배열만들고 push로 뒤로 넣고, pop으로 제일 나중꺼 빼냄
// 여는 괄호면 푸쉬 아니면 빼는데, 뺄때 뺄게없으면 NO반환 다빼고나서 짝이 안맞아서 남았으면 NO반환
const solution = (s) => {
  let answer = "YES";
  const stack = [];
  for (let x of s) {
    if (x === "(") stack.push(x);
    else {
      if (stack.length === 0) return "NO";
      // 빈 배열에 pop할 경우 undefined 를 반환
      stack.pop();
    }
  }

  if (stack.length > 0) return "NO";
  return answer;
};
// )()()
let a = "()()(()(()()))";
// let a = "()()(()(";
console.log(solution(a));
