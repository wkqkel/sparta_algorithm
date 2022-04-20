// 괄호안의 문자제거(스택)
// 여는 괄호와 문자를 만나면 스택에 넣어줌
// 닫는 괄호를 만나면 스택안에 닫는 괄호의 짝이 있을테니 (뒤에서부터) 여는 괄호가 나올 때 까지 다 제거
const solution = (s) => {
  let answer;
  let stack = [];
  for (let x of s) {
    if (x === ")") {
      while (stack.pop() !== "(");
    } else stack.push(x);
  }
  answer = stack.join("");
  return answer;
};

let str = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution(str));
