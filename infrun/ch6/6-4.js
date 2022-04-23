// 후위연산식
/*
사람들이 계산할 때 사용하는 수식을 중위표기식이라고 하는데,
3*5와 같이 피연산자 사이에 연산자를 두는 방법이에요.
이와달리 연산자를 피연산자 뒤에 놓는 방법을 후위표기식이라고 합니다.
*/

/*
후위표기식 읽는 법
 왼쪽에서 부터 순차적으로 읽기 시작한다. 피연산자(숫자)는 일단 지나치고, 연산자(+-\*)가 나오게 되면, 연산자 앞쪽 두 개의 숫자로 연산을 진행한다.
 예제) 4 7 2 + \*
 1.  왼쪽부터 순차적으로 읽으면서 연산자를 찾는다.
 2.  +연산자를 찾았다. +연산자를 기준으로 앞쪽 두개의 피연산자 7, 2 를 더한다.
 3.  연산을 진행하고 나면 연산된 값을 적어둔다. 4 9 *
 4.  다시 순차적으로 연산자를 찾는다.
 5. \*연산자를 찾았다. 앞쪽 두개의 피연산자를 이용하여 연산을 진행한다.
 6.  연산결과는 36
 
*/
//내풀이
// const solution = (s) => {
//   const stack = [];
//   for (let x of s) {
//     let first, second;
//     if (["+", "-", "*", "/"].includes(x)) {
//       second = +stack.pop();
//       first = +stack.pop();
//     }
//     switch (x) {
//       case "+":
//         stack.push(first + second);
//         break;
//       case "-":
//         stack.push(first - second);
//         break;
//       case "*":
//         stack.push(first * second);
//         break;
//       case "/":
//         stack.push(first / second);
//         break;
//       default:
//         stack.push(x);
//         break;
//     }
//   }
//   return stack;
// };
//영상풀이
const solution = (s) => {
  let answer;
  const stack = [];
  for (let x of s) {
    // x가 숫자면 푸쉬(넘버로 바꿔줌)
    if (!isNaN(x)) stack.push(Number(x));
    else {
      let rt = stack.pop();
      let lt = stack.pop();
      if (x === "+") stack.push(lt + rt);
      else if (x === "-") stack.push(lt - rt);
      else if (x === "*") stack.push(lt * rt);
      else if (x === "/") stack.push(lt / rt);
    }
  }
  answer = stack[0];
  return answer;
};
let str = "352+*9-";
console.log(solution(str));
